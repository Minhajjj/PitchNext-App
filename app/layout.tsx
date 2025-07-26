import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const workSanas = localFont({
  src: [
    { //1
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    { //2
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    { //3
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    { //4
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { //5
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    { //6
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { //7
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    { //8
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "300",
      style: "normal",
    }
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "PitchNext",
  description: "PitchNext is a platform for sharing and discovering innovative ideas. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSanas.variable}
      >
        {children}
      </body>
    </html>
  );
}
