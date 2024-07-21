import { useState } from "react";

// Styles
import styles from "./ListContainer.module.css";

// Icons
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const ListContainer = ({ todoLst, setTodoLst }) => {
  const deleteItem = (id) => {
    setTodoLst((pre) => {
      return pre.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <>
      <div className={styles.listContainer}>
        <ul>
          {todoLst.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                <p className={styles.content}>{item.content}</p>

                <FaEdit className={styles.editIcon} />
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
