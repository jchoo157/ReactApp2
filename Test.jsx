import React from 'react';

class Test extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {

    var h1Style = {
      fontSize: 50,
      color: 'green'
    }

    return (
      <div>
        <h1 style={h1Style}>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>This is the content</h3>
      </div>
    );
  }
}

export default Test;