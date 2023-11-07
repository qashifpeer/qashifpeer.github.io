import { BsBook } from "react-icons/bs";
import { blogText } from "../../constants/blogsText";

const BlogCard = () => {
  return (
    <>
      {blogText.map((blog) => (
        <div key={blog.id} className="p-4 bg-white shadow-md rounded-lg">
          <a href={blog.blogLink} target="#">
            <img
              src={blog.thumbnail}
              alt=""
              className="w-full h-48 object-cover object-center"
            />
            <p className="text-center mt-2 font-semibold">{blog.title}</p>
            <p className="flex gap-2 justify-start items-center text-sm text-gray">
              <BsBook className="w-4" />
              {blog.readTime} min read
            </p>
          </a>
          
        </div>
      ))}
    </>
  );
};

export default BlogCard;
