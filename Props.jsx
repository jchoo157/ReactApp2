import React from 'react';

class Props extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'This is the Header',
      content: 'This is the CONTENT'
    }
  }

  render() {
    return (
      <div>
        <Header headerProp={this.state.header} />
        <Content contentProp={this.state.content} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.contentProp}</h3>
      </div>
    );
  }
}

export default Props;