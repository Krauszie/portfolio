"use client";

import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const PDF_FILE_URL = 'Faza_Murtadho_Resume.pdf'

const Home = () => {
  const downloadCV = (filename: string): void => {
    // Get the current URL
    const url = window.location.href;

    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = url;
    
    // Set the download attribute with the provided filename
    anchor.download = filename;
    
    // Append the anchor to the body (necessary for Firefox)
    document.body.appendChild(anchor);
    
    // Trigger a click on the anchor element to start the download
    anchor.click();
    
    // Remove the anchor element from the document
    document.body.removeChild(anchor);
  }

  return (
    <section className="h-full bg-slate-950 -z-[99]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br/><span className="text-accent">Faza Murtadho</span>
            </h1>
            <p className="max-2-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            {/* btn n socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                onClick={() => {downloadCV(PDF_FILE_URL)}}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;