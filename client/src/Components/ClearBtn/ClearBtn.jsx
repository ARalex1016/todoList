import styles from "./ClearBtn.module.css";

const ClearBtn = ({ clearAllTodo }) => {
  const handleClearBtnClick = () => {
    clearAllTodo();
  };

  return (
    <>
      <div className={styles.clearBtnContainer}>
        <button className={styles.clearBtn} onClick={handleClearBtnClick}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default ClearBtn;
