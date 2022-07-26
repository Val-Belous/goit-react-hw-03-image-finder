import { Component } from 'react';
import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handlerInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = evt => {
    const { query } = this.state;
    evt.preventDefault();
    this.props.onSubmit(query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handlerSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.ButtonLabel}>Search</span>
          </button>
          <input
            name="query"
            value={query}
            onChange={this.handlerInput}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
