import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { FooterMobile } from '@/components/footer-mobile';

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
            <head></head>
            <body className='w-full bg-[#000] text-white '>
                <Header />
                {children}
                <FooterMobile />
            </body>
        </html>
    );
}
