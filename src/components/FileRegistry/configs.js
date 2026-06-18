// Конфигурация файловых реестров для единого компонента FileRegistry.
// Имена полей (name/Name/title/licenseName/reportName, year/expiryDate/issueDate,
// urlOfFile) взяты из бэкенд-моделей. fileRequired:true — у моделей, где path
// обязателен (создание без файла даёт 500), поэтому файл требуем в UI.

export const REGISTRIES = {
  prices: {
    endpoint: '/api/prices',
    entity: { one: 'прайс-лист', list: 'Сохранённые прайс-листы' },
    fields: [
      { key: 'name', label: 'Название прайс-листа', required: true },
      { key: 'year', label: 'Год' },
    ],
  },
  'information-materials': {
    endpoint: '/api/information-materials',
    entity: { one: 'материал', list: 'Информационные материалы' },
    file: false,
    fields: [
      { key: 'title', label: 'Заголовок', required: true },
      { key: 'urlOfFile', label: 'URL файла', required: true },
    ],
  },
  licenses: {
    endpoint: '/api/licenses',
    entity: { one: 'лицензия', list: 'Лицензии' },
    fields: [
      { key: 'licenseName', label: 'Название лицензии', required: true },
      { key: 'expiryDate', label: 'Дата истечения' },
    ],
  },
  certificates: {
    endpoint: '/api/certificate-of-accreditation',
    entity: { one: 'сертификат', list: 'Сертификаты об аккредитации' },
    fields: [
      { key: 'name', label: 'Название сертификата', required: true },
      { key: 'issueDate', label: 'Дата выдачи' },
    ],
  },
  'corporate-documents': {
    endpoint: '/api/corporate-documents',
    entity: { one: 'документ', list: 'Корпоративные документы' },
    fileRequired: true,
    publicPage: true, // /about-us/corporate-documents показывает список
    fields: [{ key: 'Name', label: 'Название документа', required: true }],
  },
  'anti-corruption': {
    endpoint: '/api/anti-corruption',
    entity: { one: 'документ', list: 'Документы по противодействию коррупции' },
    fileRequired: true,
    publicPage: true, // /anti-corruption/register показывает список
    fields: [{ key: 'title', label: 'Название документа', required: true }],
  },
  'pp-plans': {
    endpoint: '/api/public-procurement-plans',
    entity: { one: 'план закупок', list: 'Планы госзакупок' },
    fileRequired: true,
    fields: [{ key: 'Name', label: 'Название плана', required: true }],
  },
  'pp-announcements': {
    endpoint: '/api/public-procurement-announcements',
    entity: { one: 'объявление', list: 'Объявления о госзакупках' },
    fileRequired: true,
    fields: [
      { key: 'Name', label: 'Название объявления', required: true },
      { key: 'year', label: 'Год', required: true },
    ],
  },
  'pp-protocols': {
    endpoint: '/api/public-procurement-protocols',
    entity: { one: 'протокол', list: 'Протоколы госзакупок' },
    fileRequired: true,
    fields: [
      { key: 'Name', label: 'Название протокола', required: true },
      { key: 'year', label: 'Год', required: true },
    ],
  },
  'financial-reports': {
    endpoint: '/api/finance-reports',
    entity: { one: 'финотчёт', list: 'Финансовые отчёты' },
    fields: [
      { key: 'reportName', label: 'Название отчёта', required: true },
      { key: 'year', label: 'Год' },
    ],
  },
  'income-expenses': {
    endpoint: '/api/income-and-expense-reports',
    entity: { one: 'отчёт', list: 'Доходы и расходы' },
    fields: [{ key: 'reportName', label: 'Название отчёта', required: true }],
  },
  'public-services': {
    endpoint: '/api/report-on-public-services-rendered',
    entity: { one: 'отчёт', list: 'Отчёты о госуслугах' },
    fileRequired: true,
    fields: [
      { key: 'reportName', label: 'Название отчёта', required: true },
      { key: 'year', label: 'Год', required: true },
    ],
  },
};
