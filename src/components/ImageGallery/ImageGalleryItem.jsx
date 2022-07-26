import styles from './ImageGallery.module.css';

const ImageGalleryItem = ({ smallImg, largeImg, handlerOpenModal }) => {
  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src={smallImg}
        alt="lol"
        onClick={() => handlerOpenModal(largeImg)}
      />
    </li>
  );
};

export { ImageGalleryItem };
