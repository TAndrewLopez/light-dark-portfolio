import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-300 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark dark:text-white">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:text-white dark:bg-dark-300 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
