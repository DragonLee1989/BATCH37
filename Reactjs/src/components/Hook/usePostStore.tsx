import { create } from "zustand";
import axios from "axios";

interface IPost {
  id: number;
  title: string;
  body: string;
}

type PostStoreType = {
  posts: IPost[];
  fetchPost: () => void;
};

const usePostStore = create<PostStoreType>((set) => ({
  posts: [],

  fetchPost: async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    set({ posts: response.data });
  },
}));

export default usePostStore;
