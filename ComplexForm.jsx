import React from 'react';

class ComplexForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "INITIAL MOFUGGIN STATE",
      data2: "SECOND DATAAAAAAA"
    }

    this.updateState = this.updateState.bind(this);
  };

  updateState(e) {
    this.setState({
      data: e.target.value
    });
  }

  updateState2(e) {
    this.setState({
      data: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Content initialData={this.state.data} updateData={this.updateState} />
        <Content2 initialData={this.state.data2} updateData={this.updateState2} />
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

class Content2 extends React.Component {
  render() {
    return (
      <div>
        <input type={this.props.data2} value={this.props.initialData} onChange={this.props.updateData} />
        <h4>{this.props.initialData}</h4>
      </div>
    );
  }
}

export default ComplexForm;