import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sickbay.ai',
	description: 'HackFest 2024',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Suspense fallback={<Loading />}>
				<body className={inter.className + ' overflow-x-hidden'}>
					{children}
				</body>
			</Suspense>
		</html>
	);
}
