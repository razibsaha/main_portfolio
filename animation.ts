import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 60,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
}
export const fadeInSidebar: Variants = {
    initial: {
        opacity: 0,
        y: 20,
      },
      animate: {
        opacity: 1,
        y: 0
       ,
       transition:{
        delay:0.2,
        duration: 1
       } 
      }
}
export const fadeInSocial: Variants = {
    initial: {
        opacity: 0,
        y: 40,
      },
      animate: {
        opacity: 1,
        y: 0
       ,
       transition:{
        delay:0.4,
        duration: 1
       } 
      }
}
export const fadeUpImage: Variants = {
    initial: {
        opacity: 0,
        y: 30,
      },
      animate: {
        opacity: 1,
        y: 0
       ,
       transition:{
        delay:0,
        duration: .5
       } 
      }
}
export const fadeDownIn: Variants = {
    initial: {
        opacity: 0,
        x: 60,
      },
      animate: {
        opacity: 1,
        x: 0,
      },
}
export const stagger: Variants = {
    initial: {
      },
      animate: {
        transition: {
            staggerChildren: 0.1,
        }
      },
}
export const stagger2: Variants = {
    initial: {
      },
      animate: {
        transition: {
            staggerChildren: 0.2,
        }
      },
}
export const stagger3: Variants = {
    initial: {
      },
      animate: {
        transition: {
            staggerChildren: 0.3,
        }
      },
}

export const routeAnimation: Variants = {
    initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
       ,
       transition:{
        delay:0.1,
        duration: 0.1
       } 
      },
      exit: {
        opacity:0,
        transition: {
            delay: 0.1,
            ease: 'easeInOut'
        }
      }
}