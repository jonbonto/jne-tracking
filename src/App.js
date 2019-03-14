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
    // const details = {
    //   username: process.env.username',
    //   api_key: process.env.key
    // };
    // const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
    // fetch(`http://localhost:8080/jne/${noResi}`, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    //   },
    //   body: formBody
    fetch(`http://localhost:8080/jne/${noResi}`)
    .then(data => data.json())
    .then(result => {
      this.setState({
        result
      })
    })
  }
  render() {
    return (
      <div className="container has-text-centered">
        <h1 className="title">CEK RESI</h1>
        <h2 className="subtitle">Masukkan No Resi yang ingin di cek</h2>
        <Input checkResi={this.checkResi}/>
        <Result result={this.state.result}/>
      </div>
    );
  }
}

export default App;
