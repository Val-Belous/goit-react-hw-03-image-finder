import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handlerInput = evt => {
    this.props.setQuery(evt.currentTarget.value);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.props.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handlerInput}
          />
        </form>
      </header>
    );
  }
}
