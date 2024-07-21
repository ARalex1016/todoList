import { useEffect, useState } from "react";

// Components
import Heading from "./Components/Heading/Heading";
import Input from "./Components/Input/Input";
import ListContainer from "./Components/ListContainer/ListContainer";
import ClearBtn from "./Components/ClearBtn/ClearBtn";

const localStorageKey = "todoLst";

function App() {
  const [todoLst, setTodoLst] = useState(() => {
    const data = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    return data.map((item) => ({
      ...item,
      editMode: false,
    }));
  });

  // Update local storage when todoLst changes
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

  const deleteItem = (id) => {
    setTodoLst((pre) => {
      return pre.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const updateContent = (id, content) => {
    setTodoLst((pre) => {
      return pre.map((item) => {
        return item.id === id ? { ...item, content: content } : item;
      });
    });
  };

  const clearAllTodo = () => {
    setTodoLst([]);
  };

  const toggleEditMode = (id) => {
    setTodoLst((pre) => {
      return pre.map((item) => ({
        ...item,
        editMode: item.id === id ? !item.editMode : false,
      }));
    });
  };

  return (
    <>
      <Heading />
      <Input addTodo={addTodo} />
      <ListContainer
        todoLst={todoLst}
        deleteItem={deleteItem}
        updateContent={updateContent}
        toggleEditMode={toggleEditMode}
      />
      <ClearBtn clearAllTodo={clearAllTodo} />
    </>
  );
}

export default App;
