import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Crop View | Proteção e Combate a Pragas',
    description: 'Software de controle de pragas agrícolas.',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html
            lang='pt-br'
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className=''>{children}</body>
        </html>
    );
}