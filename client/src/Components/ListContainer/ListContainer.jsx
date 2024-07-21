// Styles
import styles from "./ListContainer.module.css";

// Icons
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useState } from "react";

const ListContainer = ({
  todoLst,
  deleteItem,
  updateContent,
  toggleEditMode,
}) => {
  const [inputItem, setInputItem] = useState("");

  const handleInputChange = (e) => {
    setInputItem(e.target.value);
  };

  const handelKeyPress = (e, id) => {
    if (e.key === "Enter") {
      handleUpdateClick(id);
    }
  };

  const handleEditClick = (id, content) => {
    toggleEditMode(id);

    setInputItem(content);
  };

  const handleUpdateClick = (id) => {
    updateContent(id, inputItem);

    toggleEditMode(id);
  };

  return (
    <>
      <div className={styles.listContainer}>
        <ul>
          {todoLst.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                {item.editMode ? (
                  <input
                    type="text"
                    value={inputItem}
                    className={styles.contentInput}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handelKeyPress(e, item.id)}
                  />
                ) : (
                  <p className={styles.contentPara}>{item.content}</p>
                )}

                {item.editMode ? (
                  <GrUpdate
                    className={styles.updateIcon}
                    onClick={() => handleUpdateClick(item.id)}
                  />
                ) : (
                  <FaEdit
                    className={styles.editIcon}
                    onClick={() => handleEditClick(item.id, item.content)}
                  />
                )}

                <AiFillDelete
                  className={styles.deleteIcon}
                  onClick={() => deleteItem(item.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListContainer;
