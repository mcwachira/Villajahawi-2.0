import Blog from '@/components/Blog/Blog'
import Carousel from '@/components/Carousel/Carousel'
import Facilities from '@/components/Facilities/Facilities'
import Gallery from '@/components/Gallery/Gallery'
import Hero from '@/components/Hero/Hero'
import ModalVideo from '@/components/ModalVideo/ModalVideo'
import Rooms from '@/components/Rooms/Rooms'
import Testimonial from '@/components/Testimonial/Testimonial'
import { galleryData } from '@/data/galleryImages'
import VideoThumb from '@/public/assets/images/modal-video-thumb.jpg'
import { imageData } from '@/data/images'
import HeroTwo from '@/components/Hero/HeroTwo'
import RoomsTwo from '@/components/Rooms/RoomsTwo'
import TestimonialTwo from '@/components/Testimonial/TestimonialTwo'
import Card from '@/components/Rooms/Card'




export default function Home() {
  return (


    <main>

      <HeroTwo/>

      {/* <Carousel images={imageData}/> */}
      <Facilities/>
      <Card/>

      <TestimonialTwo/>
      {/* <Gallery images={galleryData}/> */}
      {/*<Blog/>*/}
      {/* 


                <ModalVideo
  thumb={VideoThumb}
  thumbWidth={768}
  thumbHeight={432}
  thumbAlt="Modal video thumbnail"
  video="/assets/images/video.mp4"
  videoWidth={1920}
  videoHeight={1080} /> */}


    </main>
  )
}