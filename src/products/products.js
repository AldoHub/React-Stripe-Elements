import React, { Component } from 'react';
import {Elements} from 'react-stripe-elements';
import PaymentForm from "../payment-form/paymentForm";


class Products extends Component {

  state = {
    products: [],
  }


  componentDidMount = () =>{
    console.log("products component mounted");
    fetch("http://localhost:8000/")
    .then(response => {
        return response.json();
    })
    .then(blob => {
        this.setState({products: blob.data});
        console.log(this.state.products);
    })
    .catch(err => {
      console.log(err);
    })

  }  

  render() {
    return (
      <div className="products">
        <h2>Products.</h2>
        <div className="productsContainer">
          {this.state.products.map(product => {
            return(
              <div key={product._id} className="product">
                  <img src={product.image} alt={product.image} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="price"> &#x24; {product.amount}</p>
                  </div>
                  <Elements>
                    <PaymentForm price={product.amount} description={product.description} productName = {product.name} />
                  </Elements>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default Products;
