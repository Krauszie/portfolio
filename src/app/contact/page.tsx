"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
          initial={{opacity: 0}}
          animate={{
            opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"},
          }}
        >
            {/* image */}
            <motion.div 
              initial={{opacity: 0}}
              animate={{
                opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeInOut"},
              }}

              className="w-screen h-screen mix-blend-soft-light absolute"
            >
                <Image
                    src="/assets/MT.png"
                    priority 
                    quality={100} 
                    fill
                    alt=""
                    className="object-contain"
                />
            </motion.div>

        </motion.div>
    </div>
  );
};

export default Contact;