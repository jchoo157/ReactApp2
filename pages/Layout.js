import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        {this.props.children}
      </div>
    );
  }
}