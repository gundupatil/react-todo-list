import React, { Component } from 'react'

class TextDisplay extends Component {
    handleClick(){
        console.log(this);
        this.props.deleteLetter()

    }

  render() {
    return (
    <div>
        <div>I'm displaying text from my parent: {this.props.hi}</div>
        <button onClick={this.handleClick.bind(this)}> delete one letter</button>
    </div>
    ) 
  }
}
export default TextDisplay