import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

const gmarketSansBold = localFont({
  src: './fonts/GmarketSans/GmarketSansTTFBold.ttf',
  variable: '--font-gmarket-sans-bold',
});

const gmarketSansMedium = localFont({
  src: './fonts/GmarketSans/GmarketSansTTFMedium.ttf',
  variable: '--font-gmarket-sans-medium',
});

const gmarketSansLight = localFont({
  src: './fonts/GmarketSans/GmarketSansTTFLight.ttf',
  variable: '--font-gmarket-sans-light',
});

export const metadata: Metadata = {
  title: `BIN's BIN`,
  description: 'BIN about SOMETHING',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gmarketSansBold.variable} ${gmarketSansLight.variable} ${gmarketSansMedium.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
