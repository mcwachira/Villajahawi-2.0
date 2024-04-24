
import Hero from "@/src/components/Hero/Hero"
import Facilities from "@/src/components/Facilities/Facilities"
import Rooms from "@/src/components/Rooms/Rooms"
import Testimonial from "@/src/components/Testimonial/Testimonial"
import { fetchPosts } from "@/src/sanity.query"
import Post from "@/src/schemaTypes/post"
import { FeaturedPosts } from "@/src/components/Posts/FeaturedPosts"

export default async function Home() {
  const posts: [Post] = await fetchPosts();
// const post = posts.map((post) => post)
//
//   console.log(post)
  return (


    <main>

      <Hero/>

      <Facilities/>
      <Rooms/>
      
      <Testimonial />
      {/*<FeaturedPosts posts={posts} />*/}
      {/* <Carousel images={imageData}/> */}
      {/*<Facilities />*/}
      {/*<Card />*/}

      {/*<TestimonialTwo />*/}
      {/* <Gallery images={galleryData}/> */}
      {/*<Posts/>*/}
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