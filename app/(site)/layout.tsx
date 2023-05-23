import '../globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Ann Provan',
    description: 'American Artist',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>
                    <Header />

                    {children}
                </main>
            </body>
        </html>
    )
}
