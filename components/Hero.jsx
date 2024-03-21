import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine
} from 'react-icons/ri'

import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[90vh] xl:h-[78vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container relative mx-auto">
        <Image src="/hero/notice-1.png" height={120} width={120} alt="" className="hidden xl:flex absolute top-0 right-[50px] -mt-[80px] animate-bounce z-10000" />
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
            <h1 className="mb-4 font-marker h1">Hello, my name is Peter Ahlgren</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I'm a fullstack web & app developer.<br />
            I have <strong className="text-primary">20 years of experience</strong> in programming and development.<br />
            Through out the years I have been working with companies like <strong className="text-primary">Disney, Warner Bros, Swedish Cancer & Allergy Fund, Lexicon and many more</strong>.</p>
            <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">Contact me <Send size={ 18 } /></Button>
              </Link>
              <Link href="/PeterAhlgrenResume.pdf" target="_blank">
                <Button className="gap-x-2" variant="secondary">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            { /* Socials */}
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
          </div>
          <div className="relative hidden xl:flex">
            { /* badge 1 */}
            <Badge containerStyles="absolute top-[24%] -left-[5rem]" icon={<RiBriefcase4Fill />} endCountNum={20} badgeText="Years Of Experience" />
            { /* badge 2 */}
            <Badge containerStyles="absolute top-[80%] -left-[1rem]" icon={<RiTodoFill />} endCountNum={500} endCountText="" badgeText="Finished Projects" />
            { /* badge 3 */}
            <Badge containerStyles="absolute top-[55%] -right-8" icon={<RiTeamFill />} endCountNum={300} endCountText="" badgeText="Happy Clients" />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/hero-peter.png" />
          </div>
        </div>
        <div className="absolute hidden bottom-44 md:flex left-2/4 xl:bottom-0 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero