"use client"

import Link from "next/link"
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
    image: '/work/Djungelgymmet.png',
    category: 'WordPress',
    name: 'Djungelgymmet',
    description: 'Website for a local outdoors gym.',
    link: 'https://www.djungelgymmet.se/',
    github: '',
  },
  {
    image: '/work/Airbnb-Clone.png',
    category: 'react js',
    name: 'Airbnb Clone',
    description: 'A clone of the Airbnb website made in React JS.',
    link: 'https://airbnb-clone-psi-sand.vercel.app/',
    github: 'https://github.com/ahlgren1234/airbnb-clone',
  },
  {
    image: '/work/Footprint.png',
    category: 'CSS',
    name: 'Footprint CSS Library',
    description: 'A small CSS Framework. Works like Boostrap, just better ;-).',
    link: 'http://ahlgren1234.github.io/footprint/',
    github: 'https://github.com/ahlgren1234/footprint',
  },
  {
    image: '/work/enjoy-mvc.png',
    category: 'PHP',
    name: 'Enjoy MVC Framework',
    description: 'Fully working MVC Framework written in PHP.',
    link: '',
    github: 'https://github.com/ahlgren1234/enjoy-mvc',
  },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        { /* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Some of My Projects</h2>
          <p className="subtitle mb-8">Here you can see some of all the projects, that I have had the pleasure to work on.</p>
          <Link href="/projects">
            <Button>More Projects</Button>
          </Link>
        </div>
        { /* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{640: {slidesPerView: 2,}}} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
            { /* Show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return <SwiperSlide key={index}>
                <ProjectCard project={ project } />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work