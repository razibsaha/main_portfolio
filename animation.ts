export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 60,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
}
export const fadeInSidebar = {
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
export const fadeInSocial = {
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
export const fadeUpImage = {
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
export const fadeDownIn = {
    initial: {
        opacity: 0,
        x: 60,
      },
      animate: {
        opacity: 1,
        x: 0,
      },
}
export const stagger = {
    initial: {
      },
      animate: {
        transition: {
            staggerChildren: 0.1,
        }
      },
}
export const stagger2 = {
    initial: {
      },
      animate: {
        transition: {
            staggerChildren: 0.2,
        }
      },
}
export const stagger3 = {
    initial: {
      },
      animate: {
        transition: {
            staggerChildren: 0.3,
        }
      },
}

export const routeAnimation = {
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