"use client";

import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className=" h-full">
      <div className=" container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row  items-center justify-between  xl:pt-8 xl:pb-9">
          {/* text  */}
          <div className=" text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className=" h1 mb-2">
              Hello I am <br /> <span className=" text-accent">IVIC</span>
            </h1>
            <p className=" max-w-[500px]  mb-2 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis iusto totam illo adipisci quos impedit?
            </p>
            {/* button and social  */}
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-2  xl:mb-0">
                <Social
                  containerStyle=" flex gap-6 "
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo  */}
          <div className=" order-1 xl:order-none mb-0 xl:mb-0">
            <Photo />
          </div>
          
        </div>
      </div>
      <Stats />
    </section>
  );
}
