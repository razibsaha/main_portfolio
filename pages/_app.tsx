import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
      <div className="col-span-12 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 shadow-custom-light dark:shadow-custom-dark dark:bg-[#0a192f]">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500 dark:bg-red-500">Main menu</div>
    </div>
    </ThemeProvider>
  );
}

export default MyApp;
