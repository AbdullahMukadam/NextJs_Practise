import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Loading from "./loading";
import Navbar from "./Components/Navbar";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Provider>
          <div className="w-full flex items-center justify-center relative">
            <Navbar />
          </div>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>

        </Provider>

      </body>
    </html>
  );
}
