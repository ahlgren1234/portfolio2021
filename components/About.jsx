import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Peter Ahlgren',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+46 76 2503192',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'peter@peterahlgren.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 13 Jan, 1974',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Senior Web Developer',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Sunnanlid 9B, 71330 Nora, Sweden',
  },
]

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Lexicon IT Professionals, Örebro',
        qualification: 'IT operations/support technician',
        years: '2024 - 2024',
      },
      {
        university: 'Nercia Educations, Örebro',
        qualification: 'Application Developer',
        years: '1998 - 1999',
      },
      {
        university: 'Katrineholms Technical School, Katrineholm',
        qualification: 'Computer Science Engineer',
        years: '1996 - 1997',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Peter Ahlgren Consulting',
        role: 'Full Stack App & Web Developer',
        years: '2000 - Now',
      },
      {
        company: 'Enfo Group, Örebro',
        role: 'Cloud Developer',
        years: '2022 - 2023',
      },
      {
        company: 'Navigraph, Stockholm',
        role: 'Senior Front End Developer',
        years: '2021 - 2021',
      },
      {
        company: 'Dormy Golf & Fashion',
        role: 'Full Stack Web Developer',
        years: '2015 - 2016',
      },
    ],
  },
]

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Javascript, Typescript',
      },
      {
        name: 'React, Next.js, Vue, React Native',
      },
      {
        name: 'C#, .NET',
      },
      {
        name: 'Git, Node, Databases, rest API, GraphQL',
      },
      {
        name: 'WordPress, Webflow',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  }
]

const About = () => {

  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section className="xl:h-[980px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">About Me</h2>
        <div className="flex flex-col xl:flex-row">
          { /* image */}
          <div className="relative flex-1 hidden xl:flex">
            <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/about-peter.png" />
          </div>
          { /* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              { /* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                { /* personal info */ }
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4 h3">Unmatched Service Quality for Over 20 Years</h3>
                    <p className="max-w-xl mx-auto subtitle xl:mx-0">
                      I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.
                    </p>
                    { /* icons */}
                    <div className="grid gap-4 mb-12 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return <div className="flex items-center mx-auto gap-x-4 xl:mx-0" key={index}>
                          <div className="text-primary">{ item.icon }</div>
                          <div>{ item.text }</div>
                        </div>
                      })}
                    </div>
                    { /* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>Swedish, English</div>
                    </div>
                  </div>
                </TabsContent>
                { /* qualifications */ }
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="mb-8 text-center h3 xl:text-left">My Awesome Journey</h3>
                    { /* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      { /* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize h4">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        { /* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map((item, index) => {
                            const {company, role, years} = item
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="mb-2 text-xl font-semibold leading-none">{company}</div>
                                  <div className="mb-4 text-lg leading-none text-muted-foreground">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            )
                          }) }
                        </div>
                      </div>
                      { /* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize h4">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        { /* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map((item, index) => {
                            const {university, qualification, years} = item
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="mb-2 text-xl font-semibold leading-none">{university}</div>
                                  <div className="mb-4 text-lg leading-none text-muted-foreground">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            )
                          }) }
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                { /* skills */ }
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8 h3">What I Use Everyday</h3>
                    { /* skills */ }
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>
                      { /* skills list */}
                      <div>
                        {getData(skillData, 'skills').data.map((item, index) => {
                          const {name} = item
                          return (
                            <div className="w-2/4 mx-auto text-center xl:text-left xl:mx-0" key={index}>
                              <div className="font-medium">{name}</div>
                            </div>
                          )
                        }) }
                      </div>
                    </div>
                    { /* tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">Tools</h4>
                      <div className="mb-4 border-b border-border"></div>
                      { /* tool list */ }
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About