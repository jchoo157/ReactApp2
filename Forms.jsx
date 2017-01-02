import React from 'react';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "INITIAL DATA..."
    }

    this.updateData = this.updateData.bind(this);
  };

  updateData(e) {
    this.setState({data: e.target.value});
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.data} onChange={this.updateData} />
        <h3>{this.state.data}</h3>
      </div>
    );
  }
}

export default Forms;