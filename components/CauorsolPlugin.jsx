"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const[sliderMovie,setSliderMovie]=React.useState([{
    "adult": false,
    "backdrop_path": "/8SaEH4kYCy7JlviyhKtSVsMkt4r.jpg",
    "genre_ids": [28, 53],
    "id": 1315988,
    "original_language": "es",
    "original_title": "Mikaela",
    "overview": "During the eve of the 6th of January, a record-breaking snowstorm sweeps across Spain. In the midst of its chaos, a group of robbers seizes the opportunity to hijack an armoured van. A few meters away is Leo, a finished policeman who has nothing to lose. With the unexpected aid of a young woman, he will try to stop the band from running away with their loot.",
    "popularity": 452.527,
    "poster_path": "/xG8olkWOmoW78GbozKbS2UxYGEo.jpg",
    "release_date": "2025-01-31",
    "title": "Mikaela",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 37
  },
  {
    "adult": false,
    "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    "genre": "Cartoon",
    "id": 552524,
    "original_language": "en",
    "original_title": "Lilo & Stitch",
    "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    "popularity": 492.6436,
    "poster_path": "/7c5VBuCbjZOk7lSfj9sMpmDIaKX.jpg",
    "release_date": "2025-05-17",
    "title": "Lilo & Stitch",
    "video": false,
    "vote_average": 7.11,
    "vote_count": 583
  },      {
    "adult": false,
    "backdrop_path": "/rU9kRB3rBU5O7AMReZCiuIy7zmE.jpg",
    "genre_ids": [28, 18, 12],
    "id": 1450599,
    "original_language": "fr",
    "original_title": "K.O.",
    "overview": "A former fighter must find the missing son of an opponent he accidentally killed years ago, taking on a brutally violent crime gang in Marseille.",
    "popularity": 398.0414,
    "poster_path": "/qcM2sUiAeP4zXwx4ADSvgc9S58k.jpg",
    "release_date": "2025-06-05",
    "title": "K.O.",
    "video": false,
    "vote_average": 6.885,
    "vote_count": 65
  },
  {
    "adult": false,
    "backdrop_path": "/wvr3Nh8TALWbmATrnlNg5Vhf6d3.jpg",
    "genre_ids": [53, 18],
    "id": 1426776,
    "original_language": "en",
    "original_title": "STRAW",
    "overview": "What will be her last straw? A devastatingly bad day pushes a hardworking single mother to the breaking point — and into a shocking act of desperation.",
    "popularity": 339.5638,
    "poster_path": "/t3cmnXYtxJb9vVL1ThvT2CWSe1n.jpg",
    "release_date": "2025-06-05",
    "title": "STRAW",
    "video": false,
    "vote_average": 8.284,
    "vote_count": 197
  }
])
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-96   "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className={"w-full h-96 border-none rounded-none "}>
        {sliderMovie.map((m, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-96 border-none roudned-none ">
              <Card className={"h-96 border-none rounded-none"}>
                <CardContent className="flex aspect-square items-center justify-center p-6 h-28 border-none rounded-none">
                  <Image src={`/joker.jpg`} width={900} height={100}></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


