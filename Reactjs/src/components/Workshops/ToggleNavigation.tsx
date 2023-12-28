import { useState } from "react";

const ToggleNavigation = () => {
  const [isShow, setIsShow] = useState(false);
  const handleToggleNavigation = () => {
    setIsShow(!isShow);
    console.log(isShow);
  };
  if (isShow) {
    return (
      <div className="mb-5">
        <button
          onClick={handleToggleNavigation}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Toggle Navigation
        </button>
      </div>
    );
  } else {
    return (
      <div className="mb-5">
        <button
          onClick={handleToggleNavigation}
          className="bg-green-200 text-blue-700 px-3 py-1 rounded"
        >
          Toggle Navigation
        </button>
        <div>
          <ul>
            <li>Reactjs</li>
            <li>Nodejs</li>
            <li>SqlServer</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default ToggleNavigation;
