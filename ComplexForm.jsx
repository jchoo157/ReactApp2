import React from 'react';

class ComplexForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "Initial state..."
    }

    this.updateStateData = this.updateStateData.bind(this);
  };

  updateStateData(e) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
      <div>
        <Content initialData={this.state.data} updateData={this.updateStateData} />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.initialData} onChange={this.props.updateData} />
        <h3>{this.props.initialData}</h3>
      </div>
    );
  }
}

export default ComplexForm;