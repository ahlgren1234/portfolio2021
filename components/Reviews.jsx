"use client"

import Image from "next/image"

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const reviewsData = [
  {
    avatar: '/reviews/johndoe.png',
    name: 'Scott Williams',
    job: 'CEO',
    review: 'My experience with  Peter is that they are very professional. Our collaboration went very well, and we are very happy with the result. 5 stars from us.'
  },
  {
    avatar: '/reviews/johndoe.png',
    name: 'Björn Eremo',
    job: 'Business Owner',
    review: 'Jag är alltid nöjd med resultatet av arbetet som Peter utför. Peter är kunnig flexibel och väldigt lyhörd. Hemsidan blev mycket bättre än jag vågat hoppas på och jag känner stort förtroende i det fortsatta samarbetet. Jag kan varmt rekommendera Peter!'
  },
  {
    avatar: '/reviews/johndoe.png',
    name: 'Anders Hermansson',
    job: 'Business Owner',
    review: 'Vi fick en hemsida som uppfyllde alla våra önskemål och mer därtill. Det var ett bra samarbete som vi gärna gör om.'
  },
  {
    avatar: '/reviews/johndoe.png',
    name: 'Patrik Nilsson',
    job: 'CEO',
    review: 'Top of the line. Professional service and fast deliveries. Everything we could ask for and more.'
  },
]

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-12 text-center section-title">Reviews</h2>
        <p className="mx-auto text-lg text-center subtitle text-muted-foreground">What some of my clients say about me :</p>
        { /* slider */}
        <Swiper slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1400: {slidesPerView: 3}, }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}} className="h-[420px]">
          {reviewsData.map((person, index) => {
            return <SwiperSlide key={index}>
              <Card className="bg-[#fef9f5] dark:bg-secondary/40 p-8 min-h-[370px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    { /* image */}
                    <Image src={person.avatar} width={70} height={70} alt="" priority />
                    { /* name */}
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
              </Card>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews