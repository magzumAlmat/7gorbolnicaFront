import { redirect } from 'next/navigation';

// Английская версия — как на оригинале kazniisa.kz: /eng/* отдаёт 301 на русские
// страницы (переведённого контента у оригинала нет). Зеркалим это поведение.
export default function EngRedirect({ params }) {
  const rest = params?.slug?.length ? `/${params.slug.join('/')}` : '/';
  redirect(rest);
}
