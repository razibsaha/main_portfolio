import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps,router }: AppProps) {
  
  return (
      <ThemeProvider attribute="class">
      
      <div className="relative grid flex-grow grid-cols-12 gap-5 mx-auto bg-no-repeat dark:bg-transparent md:py-12 lg:mb-0 md:mb-16 md:px-8 sm:px-20 lg:px-20 xl:px-32">
        
        {/* blob */}
    <div className="absolute top-0 bg-purple-500 rounded-full -left-4 h-96 w-96 animate-blob mix-blend-normal blur-xl filter -z-10"></div>
    <div className="absolute top-0 bg-yellow-500 rounded-full animation-delay-2000 -right-4 h-96 w-96 animate-blob opacity-70 mix-blend-multiply blur-xl filter -z-10"></div>
    <div className="absolute bg-pink-500 rounded-full animation-delay-4000 -bottom-8 left-20 h-96 w-96 animate-blob opacity-70 mix-blend-multiply blur-xl filter -z-10"></div>
        {/* blob */}
        
        <div className="col-span-12 text-base text-center bg-white dark:bg-dark-500
        md:col-span-5
        xl:col-span-3 
        lg:col-span-4 shadow-custom-light dark:shadow-custom-dark dark:bg-[#0a192f] rounded-2xl border dark:border-[#64ffda]">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl md:col-span-7 lg:col-span-8
        xl:col-span-9  dark:bg-[#0a192f] dark:bg-opacity-90 border dark:border-[#64ffda]">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
      
    </ThemeProvider>
  );
}

export default MyApp;
