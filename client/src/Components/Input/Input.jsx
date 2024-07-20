import { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ addTodo }) => {
  const [inputTxt, setInputTxt] = useState("");

  const handleInputChange = (e) => {
    setInputTxt(e.target.value);
  };

  const handleBtnClick = (text) => {
    addTodo(text);

    setInputTxt("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleBtnClick(inputTxt);
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Add your task"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          value={inputTxt}
        />
        <button
          className={styles.addBtn}
          onClick={() => handleBtnClick(inputTxt)}
        >
          Add Item
        </button>
      </div>
    </>
  );
};

export default Input;
