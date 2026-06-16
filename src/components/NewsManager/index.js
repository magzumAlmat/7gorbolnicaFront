'use client';

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import END_POINT from '../config/index';
import EditorJSRenderer from '../EditorJSRenderer';
import {
  Box, Typography, Button, TextField, Paper, Grid,
  Card, CardContent, CardActions, CardMedia, Chip,
  IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  Select, MenuItem, FormControl, InputLabel, Stack,
  Alert, Snackbar, Tooltip, InputAdornment, CircularProgress
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const NewsEditorJS = dynamic(() => import('../NewsEditorJS'), { ssr: false });

const CATEGORIES = [
  { value: 'События', label: 'События' },
  { value: 'Выступления', label: 'Выступления' },
  { value: 'Наука', label: 'Наука' },
  { value: 'Объявления', label: 'Объявления' },
  { value: 'Пресс-релизы', label: 'Пресс-релизы' },
];

const generateSlug = (text) => {
  const translitMap = {
    'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z','и':'i',
    'й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t',
    'у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y',
    'ь':'','э':'e','ю':'yu','я':'ya',' ':'-',
    'ә':'a','ғ':'g','қ':'k','ң':'n','ө':'o','ұ':'u','ү':'u','һ':'h','і':'i',
  };
  return text.toLowerCase().split('').map(c => translitMap[c] || c).join('')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    + '-' + Date.now().toString(36);
};

const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Контент новости хранится либо как EditorJS JSON ({ blocks: [...] }),
// либо (у импортированных новостей) как обычный текст. Приводим оба формата
// к структуре EditorJS, чтобы текст подгружался и в редактор, и в предпросмотр.
const textToBlocks = (text) => ({
  blocks: String(text)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => ({ type: 'paragraph', data: { text: p.replace(/\n/g, '<br>') } })),
});
const parseEditorContent = (content) => {
  if (!content) return { blocks: [] };
  if (typeof content === 'object') {
    return Array.isArray(content.blocks) ? content : { blocks: [] };
  }
  if (typeof content === 'string') {
    const s = content.trim();
    if (!s) return { blocks: [] };
    if (s.startsWith('{')) {
      try {
        const parsed = JSON.parse(s);
        if (parsed && Array.isArray(parsed.blocks)) return parsed;
      } catch { /* не JSON — трактуем как обычный текст */ }
    }
    return textToBlocks(s);
  }
  return { blocks: [] };
};

export default function NewsManager() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');
  const [editingNews, setEditingNews] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [deleteDialog, setDeleteDialog] = useState({ open: false, item: null });
  const [previewDialog, setPreviewDialog] = useState({ open: false, item: null });

  const [form, setForm] = useState({
    titleRu: '',
    titleKz: '',
    titleEn: '',
    category: 'События',
    contentRu: null,
    contentKz: null,
    contentEn: null,
    image: '',
    publishedAt: new Date().toISOString().slice(0, 16),
  });
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [activeLang, setActiveLang] = useState('ru');

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${END_POINT}/api/kazniisa/news`);
      setNewsList(res.data);
    } catch (err) {
      console.error('Fetch news error:', err);
      setSnackbar({ open: true, message: 'Ошибка загрузки новостей', severity: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchNews(); }, [fetchNews]);

  const resetForm = () => {
    setForm({
      titleRu: '', titleKz: '', titleEn: '',
      category: 'События',
      contentRu: null, contentKz: null, contentEn: null,
      image: '',
      publishedAt: new Date().toISOString().slice(0, 16),
    });
    setCoverFile(null);
    setCoverPreview('');
    setActiveLang('ru');
  };

  const handleCreate = () => {
    resetForm();
    setEditingNews(null);
    setView('editor');
  };

  const handleEdit = (news) => {
    const parseContent = parseEditorContent;

    setForm({
      titleRu: news.title?.ru || '',
      titleKz: news.title?.kz || '',
      titleEn: news.title?.en || '',
      category: news.category || 'События',
      contentRu: parseContent(news.content?.ru),
      contentKz: parseContent(news.content?.kz),
      contentEn: parseContent(news.content?.en),
      image: news.image || '',
      publishedAt: news.publishedAt ? new Date(news.publishedAt).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16),
    });
    setCoverPreview(news.image || '');
    setCoverFile(null);
    setEditingNews(news);
    setActiveLang('ru');
    setView('editor');
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverFile(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!form.titleRu.trim()) {
      setSnackbar({ open: true, message: 'Введите заголовок (RU)', severity: 'warning' });
      return;
    }

    setSaving(true);
    try {
      let imageUrl = form.image;

      if (coverFile) {
        const fd = new FormData();
        fd.append('image', coverFile);
        const uploadRes = await axios.post(`${END_POINT}/api/upload/editorjs`, fd, {
          headers: { ...getAuthHeaders(), 'Content-Type': 'multipart/form-data' },
        });
        if (uploadRes.data.success) imageUrl = uploadRes.data.file.url;
      }

      const payload = {
        title: JSON.stringify({ ru: form.titleRu, kz: form.titleKz, en: form.titleEn }),
        content: JSON.stringify({
          ru: form.contentRu || { blocks: [] },
          kz: form.contentKz || { blocks: [] },
          en: form.contentEn || { blocks: [] },
        }),
        category: form.category,
        image: imageUrl,
        publishedAt: form.publishedAt ? new Date(form.publishedAt).toISOString() : new Date().toISOString(),
        slug: editingNews?.slug || generateSlug(form.titleRu),
      };

      if (editingNews) {
        await axios.put(`${END_POINT}/api/kazniisa/news/${editingNews.id}`, payload, { headers: getAuthHeaders() });
        setSnackbar({ open: true, message: 'Новость обновлена', severity: 'success' });
      } else {
        await axios.post(`${END_POINT}/api/kazniisa/news`, payload, { headers: getAuthHeaders() });
        setSnackbar({ open: true, message: 'Новость создана', severity: 'success' });
      }

      await fetchNews();
      setView('list');
      resetForm();
    } catch (err) {
      console.error('Save error:', err);
      setSnackbar({ open: true, message: `Ошибка: ${err.response?.data?.message || err.message}`, severity: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    const item = deleteDialog.item;
    if (!item) return;
    try {
      await axios.delete(`${END_POINT}/api/kazniisa/news/${item.id}`, { headers: getAuthHeaders() });
      setSnackbar({ open: true, message: 'Новость удалена', severity: 'success' });
      setDeleteDialog({ open: false, item: null });
      fetchNews();
    } catch (err) {
      setSnackbar({ open: true, message: 'Ошибка удаления', severity: 'error' });
    }
  };

  const filteredNews = newsList.filter(n =>
    (n.title?.ru || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (view === 'editor') {
    return (
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
          <IconButton onClick={() => { setView('list'); resetForm(); }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#0C2340' }}>
            {editingNews ? 'Редактирование новости' : 'Новая новость'}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            startIcon={saving ? <CircularProgress size={18} color="inherit" /> : <SaveIcon />}
            onClick={handleSave}
            disabled={saving}
            sx={{ bgcolor: '#10b857', '&:hover': { bgcolor: '#0d9646' }, textTransform: 'none', fontWeight: 700, px: 4 }}
          >
            {saving ? 'Сохранение...' : 'Сохранить'}
          </Button>
        </Stack>

        <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', fontSize: 12 }}>
            Основные данные
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Заголовок (RU) *" value={form.titleRu}
                onChange={(e) => setForm({ ...form, titleRu: e.target.value })}
                sx={{ '& .MuiInputBase-input': { fontSize: 18, fontWeight: 600 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Заголовок (KZ)" value={form.titleKz}
                onChange={(e) => setForm({ ...form, titleKz: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Заголовок (EN)" value={form.titleEn}
                onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Категория</InputLabel>
                <Select value={form.category} label="Категория"
                  onChange={(e) => setForm({ ...form, category: e.target.value })}>
                  {CATEGORIES.map(c => <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth type="datetime-local" label="Дата публикации" value={form.publishedAt}
                onChange={(e) => setForm({ ...form, publishedAt: e.target.value })}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Button variant="outlined" component="label" startIcon={<ImageIcon />}
                  sx={{ height: 56, width: '100%', textTransform: 'none' }}>
                  {coverPreview ? 'Сменить обложку' : 'Загрузить обложку'}
                  <input type="file" hidden accept="image/*" onChange={handleCoverChange} />
                </Button>
              </Box>
            </Grid>
            {coverPreview && (
              <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <Box component="img" src={coverPreview} alt="cover" sx={{ height: 120, borderRadius: 2, objectFit: 'cover' }} />
                  <IconButton size="small" onClick={() => { setCoverFile(null); setCoverPreview(''); setForm({ ...form, image: '' }); }}
                    sx={{ position: 'absolute', top: -8, right: -8, bgcolor: 'white', boxShadow: 1 }}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            )}
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#64748b', textTransform: 'uppercase', fontSize: 12 }}>
              Контент статьи
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {['ru', 'kz', 'en'].map(lang => (
              <Chip
                key={lang}
                label={lang.toUpperCase()}
                onClick={() => setActiveLang(lang)}
                color={activeLang === lang ? 'primary' : 'default'}
                variant={activeLang === lang ? 'filled' : 'outlined'}
                sx={{ fontWeight: 700 }}
              />
            ))}
          </Stack>

          {activeLang === 'ru' && (
            <NewsEditorJS
              key="editor-ru"
              holderId="editorjs-ru"
              data={form.contentRu}
              onChange={(data) => setForm(prev => ({ ...prev, contentRu: data }))}
            />
          )}
          {activeLang === 'kz' && (
            <NewsEditorJS
              key="editor-kz"
              holderId="editorjs-kz"
              data={form.contentKz}
              onChange={(data) => setForm(prev => ({ ...prev, contentKz: data }))}
            />
          )}
          {activeLang === 'en' && (
            <NewsEditorJS
              key="editor-en"
              holderId="editorjs-en"
              data={form.contentEn}
              onChange={(data) => setForm(prev => ({ ...prev, contentEn: data }))}
            />
          )}
        </Paper>
      </Box>
    );
  }

  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#0C2340' }}>
          Управление новостями
        </Typography>
        <Chip label={`${newsList.length} записей`} size="small" />
        <Box sx={{ flexGrow: 1 }} />
        <TextField
          size="small" placeholder="Поиск..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
          sx={{ width: 250 }}
        />
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleCreate}
          sx={{ bgcolor: '#0C2340', '&:hover': { bgcolor: '#1a3a5c' }, textTransform: 'none', fontWeight: 700, px: 3 }}>
          Новая запись
        </Button>
      </Stack>

      {loading ? (
        <Box sx={{ textAlign: 'center', py: 8 }}><CircularProgress /></Box>
      ) : filteredNews.length === 0 ? (
        <Paper sx={{ py: 8, textAlign: 'center', borderRadius: 3 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            {searchTerm ? 'Ничего не найдено' : 'Новостей пока нет'}
          </Typography>
          {!searchTerm && (
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleCreate}
              sx={{ bgcolor: '#0C2340', textTransform: 'none' }}>
              Создать первую новость
            </Button>
          )}
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {filteredNews.map((news) => {
            const date = news.publishedAt
              ? new Date(news.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
              : '';

            return (
              <Grid item xs={12} sm={6} md={4} key={news.id}>
                <Card sx={{
                  height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' },
                  border: '1px solid #e2e8f0',
                }}>
                  {news.image && (
                    <CardMedia component="img" height="160" image={news.image} alt={news.title?.ru} sx={{ objectFit: 'cover' }} />
                  )}
                  {!news.image && (
                    <Box sx={{ height: 160, bgcolor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ImageIcon sx={{ fontSize: 48, color: '#cbd5e1' }} />
                    </Box>
                  )}
                  <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                      <Chip label={news.category || 'Без категории'} size="small"
                        sx={{ bgcolor: '#0C2340', color: 'white', fontWeight: 600, fontSize: 11 }} />
                      {date && (
                        <Chip icon={<AccessTimeIcon sx={{ fontSize: '14px !important' }} />}
                          label={date} size="small" variant="outlined" sx={{ fontSize: 11 }} />
                      )}
                    </Stack>
                    <Typography variant="subtitle1" sx={{
                      fontWeight: 700, lineHeight: 1.3, color: '#0C2340',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {news.title?.ru || 'Без заголовка'}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'flex-end' }}>
                    <Tooltip title="Просмотр">
                      <IconButton size="small" onClick={() => setPreviewDialog({ open: true, item: news })}>
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Редактировать">
                      <IconButton size="small" color="primary" onClick={() => handleEdit(news)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Удалить">
                      <IconButton size="small" color="error" onClick={() => setDeleteDialog({ open: true, item: news })}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, item: null })}>
        <DialogTitle>Удалить новость?</DialogTitle>
        <DialogContent>
          <Typography>
            Вы уверены, что хотите удалить «{deleteDialog.item?.title?.ru}»? Это действие необратимо.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, item: null })}>Отмена</Button>
          <Button color="error" variant="contained" onClick={handleDelete}>Удалить</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={previewDialog.open} onClose={() => setPreviewDialog({ open: false, item: null })}
        maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {previewDialog.item?.title?.ru}
          </Typography>
          <IconButton onClick={() => setPreviewDialog({ open: false, item: null })}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {previewDialog.item?.image && (
            <Box component="img" src={previewDialog.item.image} alt=""
              sx={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 2, mb: 3 }} />
          )}
          <EditorJSRenderer data={parseEditorContent(previewDialog.item?.content?.ru)} />
        </DialogContent>
      </Dialog>

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
