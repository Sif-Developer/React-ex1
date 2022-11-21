import React,{Component} from 'react'

(()=> {
const Person = (props) => {
    console.log(props)
  return (
    <span className='person'>
        <h3>Name: {props.Name} ,Surname:{props.Surname} ,Age:{props.Age}  </h3>
    </span>
  )
}
})()

// import React, { Component } from 'react'

export class Person extends Component {
  render() {
    return (
        <span className='person'>
        <h3>Name: {this.props.Name} ,Surname:{this.props.Surname} ,Age:{this.props.Age}  </h3>
        </span>
    )
  }
}

// export default Person
export default Person; 