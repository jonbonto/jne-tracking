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
    this.setState({
      result: {}
    });
    // callAPi
    const details = {
      username: process.env.REACT_APP_jne_username,
      api_key: process.env.REACT_APP_key
    };
    const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
    
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = `http://apiv2.jne.co.id:10101/tracing/api/list/cnote/${noResi}`;
    fetch(proxyUrl + targetUrl, {
      method: 'POST',
      body: formBody
    })
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
