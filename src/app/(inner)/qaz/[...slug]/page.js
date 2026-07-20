import { redirect } from 'next/navigation';

// Fallback для /qaz-путей без казахской страницы (niokr-заглушка оригинала,
// новые центры и т.п.): как WPML оригинала — не 404, а русская версия.
// Статические /qaz/* роуты приоритетнее и перехватываются раньше.
export default function QazFallback({ params }) {
  const rest = params?.slug?.length ? `/${params.slug.join('/')}` : '/';
  redirect(rest);
}
