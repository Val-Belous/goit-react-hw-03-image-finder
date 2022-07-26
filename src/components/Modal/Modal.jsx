import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onTap);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onTap);
  }

  onTap = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handlerBackDrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.backdrop} onClick={this.handlerBackDrop}>
        <div className={styles.modal}>
          <img className={styles.modal__img} src={this.props.image} alt="img" />
        </div>
      </div>
    );
  }
}
