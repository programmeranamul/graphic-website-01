import { useContext, useEffect } from "react";
import { MenuContext } from "./_app";
import style from "./../styles/Blog.module.css";
import BlogCard from "./../components/blog/blogCard";
import BlogBanner from "../components/blog/blogBanner";

function Blog() {
  //hide menu when render new page
  const { showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  return (
    <section className={` ${style.blog_wrapper}`}>
      <BlogBanner />
      <div className="container">
        <div className="row py-5">
          <BlogCard description="Ditching the Darkroom: Old Editing Techniques and What We Do Now Instead" />
          <BlogCard description="Add dimension and personality to your images with blocks, boxes, cubes, and other photography props. Add dimension and personality to your images with blocks, boxes, cubes, and other photography props." />
          <BlogCard description="Ditching the Darkroom: Old Editing Techniques and What We Do Now Instead" />
          <div className="text-center mt-4">
            <button className="secondary-btn">Load More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
