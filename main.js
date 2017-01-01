import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Test from './Test.jsx';
import Table from './Table.jsx';
import State from './State.jsx';
import Props from './Props.jsx';
import Validate from './Validate.jsx';
import SetState from './SetState.jsx';
import ForceUpdate from './ForceUpdate.jsx';
import DomNode from './DomNode.jsx';
import ComponentLifeCycle from './ComponentLifeCycle.jsx';
import Forms from './Forms.jsx';

ReactDOM.render(<Forms />, document.getElementById('app'));

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);