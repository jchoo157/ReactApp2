import React from 'react';

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        { id: 1, name: "Foo", age: 20 },
        { id: 2, name: "Bar", age: 23 },
        { id: 3, name: "Baz", age: 25 }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header />
        <tbody>
          {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
        </tbody>  
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default Table;