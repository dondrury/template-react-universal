import React, {Component} from 'react';

export default class Header extends Component{
  constructor(){
    super()
    this.state={
      open: false
    }
  }

  render(){
    return (
      <header className="container-fluid">
        header
      </header>
    )
  }
}
