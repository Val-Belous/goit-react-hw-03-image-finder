import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from './ImageGalleryItem';
import { createRequest } from 'api/api';
import styles from './ImageGallery.module.css';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  error: 'error',
  success: 'success',
};

export class ImageGallery extends Component {
  state = {
    gallery: [],
    totalHits: null,
    page: 1,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      createRequest(this.props.query).then(res => {
        const { data } = res;
        this.setState(prevState => ({
          gallery: [...data.hits],
          page: 2,
          totalHits: data.totalHits,
        }));
      });
    }
  }

  loadMore = () => {
    createRequest(this.props.query, this.state.page)
      .then(res => {
        const { hits } = res.data;
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        this.setState({ status: STATUS.error, error });
      });
  };

  render() {
    const { gallery, totalHits, page } = this.state;
    return (
      <>
        <ul className={styles.gallery}>
          {gallery.map(({ id, webformatURL, largeImageURL }) => {
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

        {totalHits >= 12 * page && <Button onClick={this.loadMore} />}
      </>
    );
  }
}
