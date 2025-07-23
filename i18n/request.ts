import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Get the locale from cookies, fall back to 'ar' (Arabic) if not found
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ar';

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});