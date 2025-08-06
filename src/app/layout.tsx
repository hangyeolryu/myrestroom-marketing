import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyRestroom - 깨끗한 나의 화장실",
  description:
    "언제 어디서나 깨끗하고 편리한 화장실을 찾아보세요. 실시간 리뷰와 평점으로 최고의 화장실을 추천받으세요.",
  keywords: [
    "화장실",
    "화장실 찾기",
    "깨끗한 화장실",
    "화장실 앱",
    "MyRestroom",
  ],
  authors: [{name: "MyRestroom Team"}],
  creator: "MyRestroom",
  publisher: "MyRestroom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://efflio.com"),
  icons: {
    icon: [
      {url: "/favicon.png", sizes: "32x32", type: "image/png"},
      {url: "/favicon.png", sizes: "16x16", type: "image/png"},
    ],
    apple: [{url: "/favicon.png", sizes: "180x180", type: "image/png"}],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "MyRestroom - 깨끗한 나의 화장실",
    description: "언제 어디서나 깨끗하고 편리한 화장실을 찾아보세요.",
    url: "https://efflio.com",
    siteName: "MyRestroom",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/myrest_logo.png",
        width: 1200,
        height: 630,
        alt: "MyRestroom Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyRestroom - 깨끗한 나의 화장실",
    description: "언제 어디서나 깨끗하고 편리한 화장실을 찾아보세요.",
    images: ["/myrest_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
