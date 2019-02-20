import React, { Component } from 'react';

import Product from "./Product";
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import img from './assets/add-bar.jpg';


export default class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
            <div className="container-fluid">
              <BannerContainer></BannerContainer>
              <div className="row">
                <ProductConsumer>
                  {(val) => {
                     return val.products.map(product => { //callback function
                       return <Product key={product.id} product={product}/> //product prop 
                     }) 
                  }}
                </ProductConsumer>
              </div>
            </div>
      </React.Fragment>
    )
  }
}

const BannerContainer = styled.div`
    background: white;
    background-image: url(${img});
    background-repeat: repeat 0 0;
    height: 60px;
    padding: 0 auto;
    animation: slide 20s linear infinite;
    @keyframes slide {
      from { background-position: 0 0; }
      to { background-position: -400px 0; }

`;