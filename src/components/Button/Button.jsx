import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export { Button };
