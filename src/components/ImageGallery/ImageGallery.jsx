import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  error: 'error',
  success: 'success',
};

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className="gallery">
          {this.props.gallery.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                largeImg={largeImageURL}
                handlerOpenModal={this.props.handlerOpenModal}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
