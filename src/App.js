import React, { Component } from 'react';

import { Input } from './components/Input';
import Result from './components/Result';

import 'bulma/css/bulma.css';
import './index.css';

class App extends Component {
  state = {
    result: {}
  };
  checkResi = (noResi) => {
    // callAPi
    fetch(`http://localhost:5000/jne/${noResi}`)
    .then(data => data.json())
    .then(result => {
      this.setState({
        result
      })
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="title has-text-centered">CEK RESI</h1>
        <h2 className="subtitle has-text-centered">Masukkan No Resi yang ingin di cek</h2>
        <Input checkResi={this.checkResi}/>
        <Result result={this.state.result}/>
      </div>
    );
  }
}

export default App;
