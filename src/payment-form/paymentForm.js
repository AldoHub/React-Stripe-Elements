import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class PaymentForm extends Component {

  constructor(props){
    super(props);
  }

  state = {
    stripeToken: "",
    name: "",
    email: "",
    productData: {
      price: this.props.price,
      description: this.props.description
      }  
  }  

  changeHandler = (e) =>{
      this.setState({[e.target.name] : e.target.value});
  }


  getStripeToken = async(e) => {
      e.preventDefault();
      let token = await this.props.stripe.createToken({name: this.state.name});
     
      console.log(token);
      console.log(this.state.productData.price);
      console.log(this.state.productData.description);

      //make the call to the NodeJs Striper Server to create the charge
      
      let response = await fetch("http://localhost:8000/charge", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body:  JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            description: this.state.productData.description,
            amount: this.state.productData.price,
            token: token.id
          })
      });
    
      if (response.ok){
          console.log("Charge Added");
      }
      
  }


  render() {
    return (
      
        <form onSubmit={this.getStripeToken} className="paymentForm">
            <input type="text" name="name" onChange={this.changeHandler} placeholder="Your Name"/>
            <input type="email" name="email" onChange={this.changeHandler} placeholder="Your Email"/>
            <CardElement />
            <input type="submit" value="Pay" />
        </form>
      
    );
  }
}

export default injectStripe(PaymentForm);
