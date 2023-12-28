import { useEffect } from "react";
import usePostStore from "../Hook/usePostStore";

const ShowPostZustand = () => {
  //Truy cập vào store
  const { posts, fetchPost } = usePostStore();
  useEffect(() => {
    //gọi hàm này để nó cập nhật dữ liệu user
    fetchPost();
  }, []);
  return (
    <div>
      <h1 className="font-bold">Show 100 Post API using Zustand</h1>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return <div>{"ID: " + post.id + " Title: " + post.title}</div>;
        })}
    </div>
  );
};

export default ShowPostZustand;
