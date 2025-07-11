import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import { Metadata } from 'next';

import "./globals.css";

export const metadata:Metadata = {
  title : "el safwat colleage",
  description:"description about the colleage",

}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (

    <html lang={locale}>
      <body
        className={`bg-[rgba(0,0,0,.1)] `}
      >
        <NextIntlClientProvider>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>

  );
}
