import React, { Component } from 'react';
import Products from "./products/products";

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <header>
            <h1>React Stripe <br/> Elements </h1>
            <p>Powered By React And Stripe Elements</p>
          </header>  
          <main>
            <Products />
          </main>
          <footer>
            <p>React Stripe Elements by &copy; aldocaava</p>
          </footer>

      </div>
    );
  }
}

export default App;
