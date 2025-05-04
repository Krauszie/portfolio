"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSpringboot,
  SiThymeleaf,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// about data
const about = {
  title: "About me",
  // description:
  //   "Full Stack Developer with 2+ years of experience in building responsive, user-friendly websites and applications. \
  // Proficient in HTML, CSS, and JavaScript frameworks, with a strong passion for exploring new technologies in Front-End Development. \
  // Gained valuable experience working in a Japanese & Australian IT company, where I developed a deep understanding of professional work ethics and cross-cultural collaboration.",
  description:
    "2年間以上ユーザーに優しい、反応が速いウェブやアプリを作る経験があるフルスタック開発者です。<br /> \
    HTMLやCSSやJavascriptフレームワークなど熟練してフロントエンドの新たな技術を強く体験したい気持ちがあります。<br /> \
    日本とオーストラリアのIT企業から貴重な経験をもらい、さらにプロとしての働きと異文化との協力の理解が深まりました。",
  info: [
    {
      // fieldName: "Name",
      fieldName: "名前",
      fieldValue: "Faza Murtadho",
    },
    {
      // fieldName: "Phone",
      fieldName: "電話番号",
      fieldValue: "(+62) 853 4722 3920",
    },
    {
      // fieldName: "Experience",
      fieldName: "職務期間",
      fieldValue: "2 年",
    },
    {
      // fieldName: "Email",
      fieldName: "メール",
      fieldValue: "faza.murtadho@gmail.com",
    },
    {
      // fieldName: "Nationality",
      fieldName: "国籍",
      fieldValue: "インドネシア",
    },
    {
      // fieldName: "Languages",
      fieldName: "言語",
      // fieldValue: "English: Fluent, Indonesia: Native",
      fieldValue: "英語：流暢、インドネシア語：生まれつき",
    },
    {
      // fieldName: "Language Certification",
      fieldName: "言語能力証明書",
      // fieldValue: "TOEFL PBT (2017) - Score: 610",
      fieldValue: "TOEFL (国際基準の英語能力測定試験) 2017 - スコア：610",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/icons/badge.svg",
  // title: "My experience",
  title: "My experience",
  description: "",
  items: [
    {
      // company: "PT SOFTEM MITRA INDONESIA, Jakarta",
      // position: "Full Stack Developer",
      company: "会社名：PT Softem Mitra Indonesia, Jakarta",
      position: "Full Stack Developer「フルスタック開発者」",
      duration: "2022 - 2024",
    },
    {
      // company: "PT KELOLA JASA ARTHA, Surabaya",
      // position: "Intern Mobile Programmer",
      company: "会社名：PT Kelola Jasa Artha, Surabaya",
      position: "スマホ向けプログラマー（インターン）",
      duration: "2021 - 2022",
    },
    {
      // company: "Institut Teknologi Sepuluh Nopember, Surabaya",
      // position: "Intern Front End Developer",
      company: "会社名：ITSスラバヤ工科大学, Surabaya",
      position: "フロントエンド開発者",
      duration: "2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/icons/cap.svg",
  // title: "My education",
  title: "My education",
  description: "",
  items: [
    {
      // institution: "Institut Teknologi Sepuluh Nopember, Surabaya",
      // degree: "Bachelor of Computer Science",
      institution: "機関名：ITSスラバヤ工科大学",
      degree: "計算機科学の学士",
      duration: "2018 - 2022",
    },
    {
      // institution: "freeCodeCamp Certification",
      // degree: "JavaScript Algorithms and Data Structures",
      institution: "freeCodeCampからの認定証",
      degree: "Javascriptのアルゴリズムとデータ構造",
      duration: "2022",
    },
    {
      // institution: "freeCodeCamp Certification",
      // degree: "Scientific Computing with Python",
      institution: "freeCodeCampからの認定証",
      degree: "Pythonで科学技術計算 ",
      duration: "2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  // description:
  //   "Front-End Website: Tailwind CSS, ReactJS, Typescript, Thymeleaf.  \
  // Other Programming Language: JavaScript, Java, C#, HTML, Springboot. \
  // Architecture: Model View Controller.",
  description:
    "フロントエンド：Tailwind CSS, ReactJS, Typescript, Thymeleaf. <br/> \
    他のプログラミング言語：Javascript, Java, C#, HTML, Springboot. <br/>\
    アーキテクチャ：Model View Controller",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiVuedotjs />,
      name: "Vue.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiSpringboot />,
      name: "Springboot",
    },
    {
      icon: <SiThymeleaf />,
      name: "Thymeleaf",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {/* <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger> */}
            <TabsTrigger value="about">私について</TabsTrigger>
            <TabsTrigger value="experience">経験</TabsTrigger>
            <TabsTrigger value="education">学歴</TabsTrigger>
            <TabsTrigger value="skill">技術</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skill */}
            <TabsContent value="skill" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p
                    className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                    dangerouslySetInnerHTML={{ __html: skills.description }}
                  >
                    {/* {skills.description} */}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p> */}
                <p
                  className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify"
                  dangerouslySetInnerHTML={{ __html: about.description }}
                />
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 whitespace-nowrap"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
