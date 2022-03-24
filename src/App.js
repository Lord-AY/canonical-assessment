import { useEffect, useState } from "react";
import "./App.scss";
import BlogCard from "./components/BlogCard";

function App() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setBlogs(data));
    }
    fetchData();
  }, []);

  return (
    <div style={{ height: "100vh" }} className="u-vertically-center">
      <div className="row u-equal-height">
        {blogs &&
          blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
      </div>
    </div>
  );
}

export default App;
