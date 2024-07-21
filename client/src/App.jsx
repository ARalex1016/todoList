import { useEffect, useState } from "react";

// Components
import Heading from "./Components/Heading/Heading";
import Input from "./Components/Input/Input";
import ListContainer from "./Components/ListContainer/ListContainer";
import ClearBtn from "./Components/ClearBtn/ClearBtn";

const localStorageKey = "todoLst";

function App() {
  const [todoLst, setTodoLst] = useState(() => {
    const data = JSON.parse(localStorage.getItem(localStorageKey));

    return data || [];
  });

  // Add to Local Storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todoLst));
  }, [todoLst]);

  const addTodo = (content) => {
    // Checking If Input Field is empty or not
    if (!content) return;

    // Checking If Input Field matches previous content or not
    const matchedContent = todoLst.find((item) => item.content === content);

    if (matchedContent) return;

    // Add new content
    setTodoLst((pre) => [
      ...pre,
      {
        id: Date.now(),
        content: content.trim(),
        editMode: false,
      },
    ]);
  };

  const clearAllTodo = () => {
    setTodoLst([]);
  };

  // clearAllTodo();

  return (
    <>
      <Heading />
      <Input addTodo={addTodo} />
      <ListContainer todoLst={todoLst} setTodoLst={setTodoLst} />
      <ClearBtn clearAllTodo={clearAllTodo} />
    </>
  );
}

export default App;
