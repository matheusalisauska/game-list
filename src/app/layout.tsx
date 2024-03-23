import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    style: 'normal',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Game List',
    description: 'game_list',
    manifest: '/manifest.json',
    icons: [],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='pt-BR' className={poppins.className}>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='manifest' href='/manifest.json' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='black-translucent'
                />
                <meta
                    name='viewport'
                    content='initial-scale=1, viewport-fit=cover'
                />
                <meta property='og:image' content='<generated>' />
                <meta property='og:image:type' content='<generated>' />
                <meta property='og:image:width' content='<generated>' />
                <meta property='og:image:height' content='<generated>' />
            </head>
            <body className='bg-[#000] text-white'>{children}</body>
        </html>
    );
}
