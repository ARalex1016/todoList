import { useState } from "react";

// Components
import Heading from "./Components/Heading/Heading";
import Input from "./Components/Input/Input";
import ListContainer from "./Components/ListContainer/ListContainer";

const localStorageKey = "todoLst";

function App() {
  const [todoLst, setTodoLst] = useState(() => {
    const storageLst = JSON.parse(localStorage.getItem(localStorageKey));

    return storageLst || [];
  });

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
        content: content,
        checked: false,
      },
    ]);

    // Add to Local Storage
    localStorage.setItem(localStorageKey, JSON.stringify(todoLst));
  };

  return (
    <>
      <Heading />
      <Input addTodo={addTodo} />
      <ListContainer todoLst={todoLst} />
    </>
  );
}

export default App;
