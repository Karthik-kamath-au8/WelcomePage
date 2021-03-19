import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Ocard from './card';
import './task.css'
 
export default class Task extends Component {
     documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            phoneNumber: '',
            invalid: true,
        }
    }
    redirectToHome = (e) => {
        e.preventDefault()
        const { history } = this.props;
        if(history) history.push('/task2');
        localStorage.setItem('document',JSON.stringify(this.state));
       }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
   
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            phoneNumber: this.documentData.phoneNumber,
    })
} else {
    this.setState({
        phoneNumber:'',
    })
}
}
 
render() {
    return (
        <div className="container">
            <div className="cona">
                <h1>man </h1>
                <div className="matter">
                <h1>matters</h1>
                </div>
                <h3>Congratulations</h3>
           
            <div className="cont">
                <Ocard/>
            </div>
            <div>
                <p>
                    You have WON Paytm Gift <br/>
                    Card of Rs200 for <strong>placing the order on Man Matters</strong> 
                </p>
                <br/>   
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <input type="number" name="phoneNumber" className="form-control" value={this.state.phoneNumber} placeholder="Enter Mobile Number" onChange={this.handleChange} />
                            </div>    
                        <div>
                            <br/>
                        <button type="submit"  disabled={!(this.state.phoneNumber.length === 10 )} className="btn" onClick={this.redirectToHome}>Wow! Get my Paytm Gift Card</button>
                        </div>
                    </form>
                
            </div>
            </div>
        </div>
    )
}
}