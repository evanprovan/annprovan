import Navbar from '@/components/Navbar';
import '../globals.css';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Ann Provan',
    description: 'American Artist',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <main>
                    <header>
                        <Navbar />
                    </header>

                    {children}
                </main>
            </body>
        </html>
    );
}
