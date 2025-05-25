"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUp, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// interface
import { SwiperIndex } from "../CustomProps";

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    // category: "フロントエンド",
    title: "Fundraisin",
    description:
      "Fundraising Platform for non-profit organization, its go globally for ANZ, UK, and CA",
    // description:
    //   "非営利団体の資金調達プラットフォーム作成。<br/> \
    //   現在オーストラリア、ニュージーランド、英国、カナダにグロバールに稼働しています。",
    stack: [
      { name: "Html 5" },
      { name: "Code Igniter 3" },
      { name: "CSS 5" },
      { name: "Javascript" },
      { name: "Jquery" },
    ],
    image: "/assets/Funraisin.png",
    live: "https://www.funraisin.co",
  },
  {
    num: "02",
    category: "Frontend",
    // category: "フロントエンド",
    title: "Setir Kanan",
    description:
      "Market Place for Second Hand Car and Car Service by Astra Group",
    // description: "アストラグループの中古車や中古車サービスの市場",
    stack: [
      { name: "Next" },
      { name: "React" },
      { name: "Typescript" },
      { name: "React Query" },
    ],
    image: "/assets/SetirKanan.png",
    live: "https://setirkanan.co.id",
  },
  {
    num: "03",
    category: "Frontend",
    // category: "フロントエンド",
    title: "In House Application for Human Resource",
    description:
      "Creating Candidate Profiling using generated rule for it to becomes simple and less time to make",
    // description:
    //   "定められた規則で単純で作成時間が短くなる候補者プロファイリングを作成",
    stack: [
      { name: "Next" },
      { name: "React" },
      { name: "Typescript" },
      { name: "React Query" },
      { name: "Debounce CRUD" },
      { name: "Shadcn" },
    ],
    image: "/",
    live: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperIndex) => {
    // get current index
    const currentIndex = swiper.activeIndex;
    // update project state based
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project category */}
              <h3 className="text-[25px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
                {/* {project.category} ・プロジェクト */}
              </h3>

              {/* project description */}
              <p
                className="text-white/60"
                // dangerouslySetInnerHTML={{ __html: project.description }}
              >
                {project.description}
              </p>

              {/* stack */}
              <ul className="flex gap-2 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live projects */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github repo */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div
                        className="relative w-full"
                        style={{ aspectRatio: "1859 / 894" }}
                      >
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt="pic"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
