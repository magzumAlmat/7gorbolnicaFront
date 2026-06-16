'use client';
import { Typography, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const TEXT = '#334155';

const editions = [
  {
    year: '2025',
    issues: [
      { label: 'Вестник КазНИИСА №1,2,3 (2025)', href: 'https://drive.google.com/file/d/1GOTWL2Cin2oRSz6mtwQR7wOj9KGHm_3J/view?usp=sharing' },
    ],
  },
  {
    year: '2024',
    issues: [
      { label: 'Вестник КазНИИСА №1,2,3 (2024)', href: 'https://drive.google.com/drive/folders/19E_xpiqtumRZVvQtJ9afIdkqbQhqbAqR?usp=sharing' },
      { label: 'Вестник КазНИИСА №4,5,6 (2024)', href: 'https://drive.google.com/drive/folders/1qALas8_by9hUmutbCCWOAPoFKVhQ1n-3?usp=sharing' },
      { label: 'Вестник КазНИИСА №7,8,9 (2024)', href: 'https://drive.google.com/drive/folders/1wUX0Qs7lF_4_X4WZJ8wtwOGuFzclRn-4?usp=sharing' },
      { label: 'Вестник КазНИИСА №10,11,12 (2024)', href: 'https://drive.google.com/file/d/10exmptlLjyJrdMtc6kD4QwIBpYl0lCyy/view?usp=sharing' },
    ],
  },
  {
    year: '2023',
    issues: [
      { label: 'Вестник КазНИИСА №1,2,3 (2023)', href: 'https://drive.google.com/drive/folders/1eLiqkaXxLouceukxyPqKpWwz9IWDfQjj?usp=drive_link' },
      { label: 'Вестник КазНИИСА №4,5,6 (2023)', href: 'https://drive.google.com/drive/folders/193JsDJw0-c4-l-3muyq-brzPaAnIHGgM?usp=drive_link' },
      { label: 'Вестник КазНИИСА №7,8,9 (2023)', href: 'https://drive.google.com/drive/folders/1qt-5U744IYEDDVwAXuxAnnUX1dA2hSPT?usp=drive_link' },
      { label: 'Вестник КазНИИСА №10,11,12 (2023)', href: 'https://drive.google.com/drive/folders/1Y2vUgx7M3LwHQ3yzX--T4QWs-1xgkzxK?usp=drive_link' },
    ],
  },
  {
    year: '2022',
    issues: [
      { label: 'Вестник КазНИИСА №1,2,3 (2022)', href: 'https://drive.google.com/file/d/1Mr_VOfGxTbqVsp2H_50GxsJI_X_V7XvY/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №4,5,6 (2022)', href: 'https://drive.google.com/file/d/1tZ2VuGBpoplV9w8WT3y2i3hlIGlddRrE/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №7,8,9 (2022)', href: 'https://drive.google.com/drive/folders/1uPMUojUjBP07F3EMLsAMvH6br9jJyFhW?usp=share_link' },
      { label: 'Вестник КазНИИСА №10,11,12 (2022)', href: 'https://drive.google.com/drive/folders/1Ap8A9eKdfHkaCNrpC8hco-voS9DYaern?usp=share_link' },
    ],
  },
  {
    year: '2021',
    issues: [
      { label: 'Вестник КазНИИСА №1 (2021)', href: 'https://drive.google.com/file/d/1QOhA2E7NcvRwL2lGUWdQKlHykr7P5xY6/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №2 (2021)', href: 'https://drive.google.com/file/d/1WBE9qP9QMxbQOlvCpCEd-xZHBiwzp0ly/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №3 (2021)', href: 'https://drive.google.com/file/d/15AT-kAQp6KnJBveC5Pmo8hCUhRj1EYY/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №4 (2021)', href: 'https://drive.google.com/file/d/1cDUafzdXXDmPzs0OlYtlPOP2NOFc4k3W/view?usp=sharing' },
    ],
  },
  {
    year: '2020',
    issues: [
      { label: 'Вестник КазНИИСА №1 (2020)', href: 'https://drive.google.com/file/d/1aIMYJGG96D8SlZ6ZlmJWfYLupVdYGYEj/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №2 (2020)', href: 'https://drive.google.com/file/d/1KBUoNS3vbzUX4i52i5s5eInDnVkPRF7U/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №3 (2020)', href: 'https://drive.google.com/file/d/1nKE26h4ZqvwE3D2gy1RHJgKtD-qkxisX/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №4 (2020)', href: 'https://drive.google.com/file/d/1C0-5YiAzh-sNef5AcWEfmH4LlU_XLkKF/view?usp=sharing' },
    ],
  },
  {
    year: '2019',
    issues: [
      { label: 'Вестник КазНИИСА №1 (2019)', href: 'https://drive.google.com/file/d/1mjTpTEPOOdlPrkbzf8D6Bogaps-EHtfv/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №2 (2019)', href: 'https://drive.google.com/file/d/1LqVzuEULs7owaI116zBdMy0NWI0YisKG/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №3 (2019)', href: 'https://drive.google.com/file/d/1eRwCMismNxDiRAvlRJ3rLeGuAfzbx3i6/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №4 (2019)', href: 'https://drive.google.com/file/d/1qScp17FngWpmBhil4KWNlWKrDjK_HK73/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №5 (2019)', href: 'https://drive.google.com/file/d/1pf78IPc6zOocfpY4dKaP_4_ZLCM4YJA9/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №6 (2019)', href: 'https://drive.google.com/file/d/1KnpXU1EpDa0z63X785iuxs7iQGyndHsV/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №7 (2019)', href: 'https://drive.google.com/file/d/1swEjZPty5VEqNjHJhLHKOOhAk-yYa4wz/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №8 (2019)', href: 'https://drive.google.com/file/d/1Ksv7RqSAJok0reTk4ZGifNVvCwAjXzOC/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №9 (2019)', href: 'https://drive.google.com/file/d/1hkr5d5JcewOqsSlsCyL77G321GcMQgYi/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №10 (2019)', href: 'https://drive.google.com/file/d/1NZvZabFknzDTmeV7rr22p2fUurvgDDu8/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №11 (2019)', href: 'https://drive.google.com/file/d/1VYvlHR2y7s5AI3jVobVHYdDrYoD-8gOO/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №12 (2019)', href: 'https://drive.google.com/file/d/1WUNJFgHz7aeZYWBBY6JDXyGpIhxOaYCI/view?usp=sharing' },
    ],
  },
  {
    year: '2018',
    issues: [
      { label: 'Вестник КазНИИСА №1 (2018)', href: 'https://drive.google.com/file/d/1ITqkHTiECKbe-4-3jP22HGRJt-PvzAj_/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №2 (2018)', href: 'https://drive.google.com/file/d/1fhHUpMdmx-FvX8mwojq-xJXBkZMWFOcb/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №3 (2018)', href: 'https://drive.google.com/file/d/1QeNH6-prulCvqxG1Mur4dgiW_GL1hNDj/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №4 (2018)', href: 'https://drive.google.com/file/d/16uEPP3zbQp54mX5G6Rn8myynMuIR3eTI/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №5 (2018)', href: 'https://drive.google.com/file/d/1NY5DuIK2aIlYf7B6hM-m4D-9ZWrZGuwH/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №6 (2018)', href: 'https://drive.google.com/file/d/1k0FhgbiNbAHTvIt_V9umByB7I0s3lvkH/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №7 (2018)', href: 'https://drive.google.com/file/d/1PHuiOtIOL7qWqgJr8-0FMFoJrzX1mcBX/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №8 (2018)', href: 'https://drive.google.com/file/d/1jn0CmG0Z-QwdWj49eu6YogwwjxD_Zq6P/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №9 (2018)', href: 'https://drive.google.com/file/d/1OMzpxMhshYB6aDw5ZLi9eDZ_sT4QO9dy/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №10 (2018)', href: 'https://drive.google.com/file/d/1w9B7172zxsyylmlXGhkLWWc_D-3GocjT/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №11 (2018)', href: 'https://drive.google.com/file/d/10kCDi7s6t_auoh3MYKPjfsKREssFI4Hd/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №12 (2018)', href: 'https://drive.google.com/file/d/1sIXQ8SLDIjWB8h6fNLES-z0seG-an3pP/view?usp=sharing' },
    ],
  },
  {
    year: '2017',
    issues: [
      { label: 'Вестник КазНИИСА №1 (2017)', href: 'https://drive.google.com/file/d/1SRbxRRgurrRbO3JsdtCIeWXVwRjkzsxR/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №2 (2017)', href: 'https://drive.google.com/file/d/13EqD2ce5HFrjH9a26I9kS7p0Ww9F_jRr/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №3 (2017)', href: 'https://drive.google.com/file/d/1aCNkUctj6SUpjOQTf4iXaR0af-TfZgU-/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №4 (2017)', href: 'https://drive.google.com/file/d/1hkoaLkBIkCldvzpKjfxzIlZDKLSyxXOt/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №5 (2017)', href: 'https://drive.google.com/file/d/1AFjJcYu6TZBIY2L-gASPZPUGo3a4dxL6/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №6 (2017)', href: 'https://drive.google.com/file/d/1EPyoCQO54j-gvLSWOaFvyyA6P9IGff8m/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №7 (2017)', href: 'https://drive.google.com/file/d/1LIySIipMCh-gkECLt_pX2KfobCL9SJbz/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №8 (2017)', href: 'https://drive.google.com/file/d/1PL8qJcAhc2MBCtz6ztcdDwWwHf61FS0u/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №9 (2017)', href: 'https://drive.google.com/file/d/1nIbmRirB3k253We8aM6w-y_zsGiv7vAC/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №10 (2017)', href: 'https://drive.google.com/file/d/1B4ZJgHKSjdzdGRQeZ2KDCBb1d5rmY3jj/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №11 (2017)', href: 'https://drive.google.com/file/d/1ihaoxPEDPq7V56wnebyq4N1iUPIu3Ah2/view?usp=sharing' },
      { label: 'Вестник КазНИИСА №12 (2017)', href: 'https://drive.google.com/file/d/1ITqkHTiECKbe-4-3jP22HGRJt-PvzAj_/view?usp=sharing' },
    ],
  },
];

const sections = [
  'Сейсмостойкое строительство',
  'Информационные технологии',
  'Ценообразование в строительстве',
  'Стандартизация в строительстве',
];

function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: 3, mt: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        {children}
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5 }} />
    </Box>
  );
}

export default function JournalBulletinPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 0.5, fontSize: { xs: '1.5rem', md: '1.9rem' }, letterSpacing: '-0.02em' }}>
        Журнал «Вестник»
      </Typography>
      <Typography sx={{ fontSize: '1rem', color: GRAY_TEXT, mb: 4, lineHeight: 1.7 }}>
        Научный журнал АО «КазНИИСА» — результаты исследований в области строительной науки
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Журнал «Вестник» АО «КазНИИСА» основан в 2011 году. В журнале публикуются результаты
        теоретических и экспериментальных исследований в области строительной науки. Издание
        выходит ежеквартально и включает рецензируемые научные статьи.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: `4px solid ${BLUE}`, borderRadius: '0 6px 6px 0', p: 3, fontStyle: 'italic', mb: 5 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          «Основан в 2011 году. В журнале публикуются результаты теоретических и экспериментальных
          исследований в области строительной науки.»
        </Typography>
      </Box>

      <SectionTitle>Тематические разделы</SectionTitle>

      <Box component="ul" sx={{ pl: 3, mb: 5 }}>
        {sections.map((s) => (
          <Box component="li" key={s} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>{s}</Typography>
          </Box>
        ))}
      </Box>

      <SectionTitle>Архив выпусков</SectionTitle>

      {editions.map(({ year, issues }) => (
        <Box key={year} sx={{ mb: 4 }}>
          <Typography sx={{ fontWeight: 700, color: BLUE, fontSize: '1.1rem', mb: 1.5 }}>
            {year}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {issues.map((issue) => (
              <Box
                key={issue.label}
                component="a"
                href={issue.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1.2,
                  bgcolor: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: TEXT,
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: BLUE,
                    bgcolor: BLUE_LIGHT,
                    color: BLUE,
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <OpenInNewIcon sx={{ fontSize: 16, color: BLUE, flexShrink: 0 }} />
                {issue.label}
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      <SectionTitle>Требования к публикации</SectionTitle>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
        Для авторов доступен документ «Требования к оформлению публикации в журнале «Вестник» АО
        «КазНИИСА»». За подробной информацией обращайтесь по адресу{' '}
        <Box
          component="a"
          href="mailto:info@kazniisa.kz"
          sx={{ color: BLUE, textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}
        >
          info@kazniisa.kz
        </Box>
        .
      </Typography>
    </Box>
  );
}
