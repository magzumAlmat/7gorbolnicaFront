'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';

const breadcrumbNameMap = {
  'about-us': 'О нас',
  'governing-bodies': 'Органы управления',
  'contacts': 'Контакты',
  'branches': 'Филиалы',
  'corporate-documents': 'Корпоративные документы',
  'news': 'Новости',
  'awards': 'Награды',
  'vacancies': 'Вакансии',
  'partners': 'Партнеры',
  'history-kazniisa': 'История КазНИИСА',
  'frequently-asked-questions': 'Вопросы и ответы',
  'centres': 'Центры',
  'center-for-seismic-resistance-inspection-of-buildings-and-structures': 'Центр сейсмостойкости',
  'center-for-standard-and-individual-design': 'Центр проектирования',
  'center-for-science-and-digitalization-of-construction': 'Центр науки и цифровизации',
  'corporate-university': 'Корпоративный университет',
  'center-for-regulation-in-construction': 'Центр нормирования',
  'center-for-scientific-research-of-the-construction-industry': 'Центр научных исследований',
  'journal-bulletin': 'Журнал «Вестник»',
  'academic-secretary-service': 'Служба Ученого секретаря',
  'personalities': 'Персоналии',
  'innovative-research': 'Инновационные исследования',
  'collections-of-works-of-ao-kazniisa': 'Сборники трудов',
  'the-international-cooperation': 'Международное сотрудничество',
  'regulatory-documents': 'Нормативные документы',
  'eskks': 'ЕСККС',
  'bocc': 'БОСС',
  'about-the-boss': 'О БОСС',
  'news-boss': 'Новости БОСС',
  'meetings': 'Заседания',
  'uniform-norms-model': 'Модель единых норм',
  'norms-of-the-cis-countries': 'Нормы стран СНГ',
  'niokr': 'НИОКР',
  'buildingsmart-kazakhstan': 'BuildingSMART Kazakhstan',
  'professional-certification-foundation': 'Профессиональная сертификация',
  'buildingsmart-participants-registry': 'Реестр участников',
  'events-buildingsmart': 'События',
  'news-buildingsmart-kazakhstan': 'Новости',
  'eurocode': 'Еврокоды',
  'compliance-and-anti-corruption': 'Противодействие коррупции',
  'register-of-positions-exposed-to-corruption-risks': 'Реестр должностей',
  'list-of-corruption-risks-identified-based-on-the-results-of-the-corruption-risk-analysis': 'Перечень рисков',
  'projects': 'Проекты',
};

export default function BasicBreadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
      <Link underline="hover" color="inherit" href="/">
        Главная
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = breadcrumbNameMap[value] || decodeURIComponent(value);

        return last ? (
          <Typography color="text.primary" key={to} sx={{ fontSize: '0.9rem' }}>
            {displayName}
          </Typography>
        ) : (
          <Link underline="hover" color="inherit" href={to} key={to} sx={{ fontSize: '0.9rem' }}>
            {displayName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
