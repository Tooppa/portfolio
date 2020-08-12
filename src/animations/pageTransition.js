const easing = [0.6, -0.05, 0.01, 0.99]
export const dropDown = {
    initial: {
        y: "-100%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    },
    exit:{
        opacity:0
    }
}