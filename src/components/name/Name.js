import { render } from '@testing-library/react';
import React, { Component } from 'react';


class Name extends Component {
  
  
 componentDidMount() {
   console.log(this.props)
 } 
  
  
  render() {
return (
  <div>{this.props.match.params.name}</div>
)
}
}
export default Name