const ImageGalleryItem = ({ smallImg, largeImg, handlerOpenModal }) => {
  return (
    <li>
      <img src={smallImg} alt="" onClick={() => handlerOpenModal(largeImg)} />
    </li>
  );
};

export { ImageGalleryItem };
