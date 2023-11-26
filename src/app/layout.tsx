import type { Metadata } from 'next'
import './globals.css'
import { inter } from './fonts'
import TanstackProvider from '@/providers/TanstackProvider'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
    title: 'Products App',
    description: 'Products fetched from API',
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-slate-50 antialiased`}>
                <Navbar />
                <TanstackProvider>{children}</TanstackProvider>
            </body>
        </html>
    )
}
