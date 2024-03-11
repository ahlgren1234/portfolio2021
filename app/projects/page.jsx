'use client'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

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
  {
    image: '/work/coming-soon.png',
    category: 'Webflow',
    name: 'WebbTeam',
    description: 'Website for my little webdesign studio.',
    link: 'https://webbteam.se',
    github: '',
  },
  
]

// remove category duplicates
const uniqueCategories = ['all projects', ...new Set(projectData.map((item) => item.category))]

const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter(project => {
    return category === 'all projects' ? project : project.category === category
  })

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Some Of My Projects</h2>
        { /* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return <TabsTrigger onClick={() => setCategory(category)}  key={index} value={category} className="capitalize w-[162px] md:w-auto">{category}</TabsTrigger>
            })}
          </TabsList>
          { /* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects