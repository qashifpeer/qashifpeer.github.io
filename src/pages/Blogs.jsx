import BlogCard from "../components/Blogs/BlogCard";


const Blogs = () => {
  return (
    <div className='min-h-screen w-full bg-deep-blue mt-[70px]'>
     
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-2 md:px-6 py-4'>
          <BlogCard />
         

        </div>
      
    </div>
  )
}

export default Blogs