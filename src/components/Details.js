import React, { Component } from 'react';

import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { ButtonWrapper} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">

              {/*product info*/}
              <div className="row">
                {/*product image*/}
                <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} alt="product" className="img-fluid"/>
                </div>
             
              {/*product image*/}
              <div className="row">
                <div className="col-10 mx-auto col-md6 my-3 text-capitalize">
                  <h1>model : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-green">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    info about product:
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  {/*buttons*/}
                  <div>
                    <Link to="/">
                      <ButtonWrapper>back to products</ButtonWrapper>
                      <ButtonWrapper
                      cart
                      disabled={ inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}>
                        {inCart ? "inCart" : "add to Cart"}
                      </ButtonWrapper>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
