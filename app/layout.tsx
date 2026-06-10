import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohammad Tajwar Chowdhury — AI Engineer',
  description:
    'Portfolio of Mohammad Tajwar Chowdhury — AI Engineer specialising in RAG systems, autonomous agents, LLM fine-tuning, and multi-agent orchestration.',
  openGraph: {
    title: 'Mohammad Tajwar Chowdhury — AI Engineer',
    description: 'RAG · Agents · LLMs · MLOps',
    url: 'https://tajwarchy.vercel.app',
    siteName: 'Tajwar Chowdhury Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}