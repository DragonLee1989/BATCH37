// import React from 'react';
import "./App.css";
import Button from "./components/Button";
import styles from "./components/Button/button.module.css";
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import { ToDoList } from "./components/ToDoList";
import ListExample from "./components/State/ListExample";
import LikeButton from "./components/Workshops/LikeButton";
import ToggleNavigation from "./components/Workshops/ToggleNavigation";
import { Layer } from "./components/Tailwind/Layer";
import TestForm from "./components/TestForm";
import SchemaValidation from "./components/SchemaValidation";
import CounterZustand from "./components/CounterZustand";
import ShowPostZustand from "./components/ShowPostZustand";

function App() {
  return (
    <div className="container mx-auto px-4 py-2">
      <ShowPostZustand />
      <hr className="py-10" />
      <CounterZustand />
      <hr className="py-10" />
      <SchemaValidation />
      <hr className="py-10" />
      <TestForm />
      <hr className="py-10" />
      <Layer btnCSS={"btn btn-primary"} labelBtn="Primary" />
      <Layer btnCSS={"btn"} labelBtn="Default" />
      <Layer btnCSS={"btn colorText"} labelBtn="Login" />
      <hr />
      <LikeButton />
      <hr />
      <ToggleNavigation />
      <hr />
      <h1 className="text-red-500 text-3xl font-bold underline">
        Hello Install Tailwind CSS with Vite!
      </h1>

      <ListExample />

      <h1>Hello React Components</h1>
      <Button bg_color="#3F5" icon={<FaShoppingCart />} label="Thêm giỏ hàng" />
      <Button bg_color="#2DB8CD" icon={<FaPhone />} label="Gọi Tư Vấn" />
      <button className={styles.btn}> {FaPhone} ABC</button>
      <img src="./public/images/logocmc.png" alt="LOGOCMC" />
      <ToDoList />
    </div>
  );
}

export default App;
