import React from 'react'

class Form extends React.Component{
   constructor(props){
    super(props)


    this.state = {
        name: '',
        email: ''

    }

    this.funcName = this.funcName.bind(this)
    this.funcEmail = this.funcEmail.bind(this)
   }
   funcName(e){
    this.setState({
        name: e.target.value
    })
   }


   funcEmail(e){
    this.setState({
        email: e.target.value
    })
   }


    render(){
        return(
           
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>Email: {this.state.email}</h2>
                <form action=''>
                    <input type='name' value={this.state.name} onChange={this.funcName}/>
                    <input type='email' value={this.state.email} onChange={this.funcEmail}/>
                </form>
            </div>
        )
    }
}
export default Form