"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62)853 4722 3920"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "faza.murtadho@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sleman, Yogyakarta, Indonesia"
  },
]

const Contact = () => {
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //           access_key: "YOUR_ACCESS_KEY_HERE",
  //           name: e.target.name.value,
  //           email: e.target.email.value,
  //           message: e.target.message.value,
  //       }),
  //   });
  //   const result = await response.json();
  //   if (result.success) {
  //       console.log(result);
  //   }
  // }

  return (
    <div className="w-full h-full relative">
        <motion.div 
          initial={{opacity: 0}}
          animate={{
            opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="py-6"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              {/* form */}
              <div className="xl: h-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <h3 className="text-4xl text-accent">Let's work together</h3>
                  <p className="text-white/60">
                  Form still Work In Progress, please do contact via email or phone that is listed manually. Also I'm very sorry for the inconvenience.
                  </p>

                  {/* input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="fullname" placeholder="Fullname"/>
                    <Input type="email" placeholder="Email Adress"/>
                    <Input type="phone" placeholder="Phone Number"/>
                  </div>

                  {/* select */}
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="est">Front End Development</SelectItem>
                        <SelectItem value="cst">Back End Development</SelectItem>
                        <SelectItem value="mst">Full Stack Development</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  {/* textarea */}
                  <Textarea 
                    className="h-[200px]"
                    placeholder="Type your message here."
                  />

                  {/* btn */}
                  <Button size="md" className="max-w-40">
                    Send message
                  </Button>
                </form>
              </div>

              {/* info */}
              <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index)=> {
                    return (
                      <li 
                        key={index}
                        className="flex items-center gap-6"
                      >
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl">{item.description}</h3>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>


            {/* image */}
            <motion.div 
              initial={{opacity: 0}}
              animate={{
                opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeInOut"},
              }}

              className="mt-20 w-screen h-screen mix-blend-soft-light absolute"
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