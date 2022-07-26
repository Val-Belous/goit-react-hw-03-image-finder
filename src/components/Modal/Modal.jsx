import { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      <div onClick={this.handlerBackDrop}>
        <div>
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}
