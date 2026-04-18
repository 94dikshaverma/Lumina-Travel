import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lumina Travel | Premium Journeys',
  description: 'Plan your perfect journey without the stress. Tailored luxury travel experiences designed just for you.',
  keywords: ['luxury travel', 'travel planner', 'custom itinerary', 'honeymoon planning', 'international trips'],
  openGraph: {
    title: 'Lumina Travel | Premium Journeys',
    description: 'Plan your perfect journey without the stress. Tailored luxury travel experiences designed just for you.',
    url: 'https://luminatravel.com', // Replace with your production domain
    siteName: 'Lumina Travel',
    locale: 'en_US',
    type: 'website',
    // Next.js automatically detects app/opengraph-image.png so we don't need to specify images array here!
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Travel | Premium Journeys',
    description: 'Plan your perfect journey without the stress. Tailored luxury travel experiences designed just for you.',
    // Next.js automatically detects app/twitter-image.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
