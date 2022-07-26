import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { createRequest } from 'api/api';

export class App extends Component {
  state = {
    image: '',
    query: '',
    page: 1,
    gallery: [],
  };

  handlerOpenModal = img => {
    console.log(img);
    this.setState({ image: img });
  };

  handlerCloseModal = () => {
    this.setState({ image: '' });
  };

  handlerSubmit = evt => {
    evt.preventDefault();
    createRequest(this.state.query, this.state.page).then(res =>
      this.setState({ gallery: res.data.hits })
    );
  };

  setQuery = q => {
    this.setState({ query: q });
  };

  render() {
    const { image } = this.state;
    return (
      <>
        <div>
          <Searchbar onSubmit={this.handlerSubmit} setQuery={this.setQuery} />
          <ImageGallery
            handlerOpenModal={this.handlerOpenModal}
            gallery={this.state.gallery}
          />
          {image && <Modal image={image} onClose={this.handlerCloseModal} />}
        </div>
      </>
    );
  }
}
