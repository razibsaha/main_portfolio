import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import '../styles/typing.css'
import '../styles/blob.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-5 md:gap-3 md:py-12 lg:mb-0 md:mb-16 md:px-8 lg:px-24 xl:px-32 dark:bg-[#0a192f] dark:bg-opacity-100">
        
        <div className="col-span-12 text-base text-center bg-white dark:bg-dark-500
        md:col-span-5
        lg:col-span-3 shadow-custom-light dark:shadow-custom-dark dark:bg-[#0a192f]">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl md:col-span-7 lg:col-span-9 dark:bg-dark-500 dark:bg-[#0a192f] dark:bg-opacity-90 dark:mix-blend-multiply">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two">
        
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
