import React from 'react';

class Keys extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          component: 'First...',
          id: 1
        },

        {
          component: 'Second...',
          id: 2
        },

        {
          component: 'Third...',
          id: 3
        }
      ]
    }

    this.deleteElement = this.deleteElement.bind(this)
  }

  deleteElement(e) {
    this.setState({data: []});
  };

  render() {
    return (
      <div>
        <div>
          {this.state.data.map((dynamicComponent, i) => <Content key={i} componentData={dynamicComponent} clearData={this.deleteElement}/>)}
        </div>
      </div>
    );
  }
}

function Content(props) {
  return (
    <div>
      <div>{props.componentData.component}</div>
      <div>{props.componentData.id}</div>
      <button onClick={props.clearData}>CLEAR</button>
    </div>
  );
}

export default Keys;