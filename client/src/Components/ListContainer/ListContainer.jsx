import styles from "./ListContainer.module.css";

const ListContainer = ({ todoLst }) => {
  return (
    <>
      <div className={styles.listContainer}>
        <ul>
          {todoLst.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                <div>
                  <p className={styles.content}>{item.content}</p>
                </div>

                <button>as</button>
                <button>na</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListContainer;
