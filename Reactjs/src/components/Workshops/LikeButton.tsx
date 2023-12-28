import { useState } from "react";

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const handleLikeButton = () => {
    setIsLike(!isLike);
    console.log(isLike);
  };
  if (isLike) {
    return (
      <div>
        <button
          onClick={handleLikeButton}
          className="bg-gray-300 px-3 py-1 mb-5 rounded"
        >
          Like
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={handleLikeButton}
          className="bg-green-200 text-blue-700 px-3 py-1 mb-5 rounded"
        >
          Like
        </button>
      </div>
    );
  }
};

export default LikeButton;
