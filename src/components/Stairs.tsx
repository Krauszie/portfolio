import { motion } from "framer-motion"

// variants
const StairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: [ "100%", "0%" ],
    },
}

interface StairProps {
    stairs: number;
  }

// index for staggered delay
const reverseIndex = (index:number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
    {/* render 6 motion */}
    {[...Array(6)].map((_, index) => {
        return(
            <motion.div 
                key={index} 
                variants={StairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-accent/50 relative"
            />
        );
    })}
    </>
  );
};

export default Stairs;