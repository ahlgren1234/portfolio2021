import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description: 'I design a modern, selling and beautiful website for you in Figma. After that, I can convert it to HTML & CSS for you too.'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description: 'I develop your website using the latest technologies, usually React, Next.js or C# and .NET. What ever functionality you want, I can create it for you.'
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description: 'If you need a mobile app, I can create it for you using React Native, so it will be professionally working on both iPhone and Android devices.'
  },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='mx-auto mb-12 text-center section-title xl:mb-24'>My Services</h2>
        { /* Grid items */}
        <div className='grid justify-center xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services