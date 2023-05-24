import '../globals.css'
import { Inter } from 'next/font/google'
import TheHeader from '@/components/TheHeader'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Ann Provan',
    description: 'American Artist',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="main">
                    {/* @ts-expect-error Async Server Component */}
                    <TheHeader />

                    {children}
                </main>
            </body>
        </html>
    )
}
