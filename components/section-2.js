import React, { Component } from 'react'
import Nav from './nav'

import GlobalHeader from './globalheader';

class Section2 extends Component {
  render() {
    return (
      <div>
        
      
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-8 mx-auto ">
          <div className="quote-form">
            <h3>Get A Quote</h3>
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className="col-md-6">
                  <input type="text" name="email" placeholder="Email"/>
                </div>
                </div>
                <p><textarea name="messege" cols="30" rows="10"></textarea></p>
                <div className="form-submit text-center">
                  <button type="submit">Sumbit</button>
                </div>
              
            </form>
          </div>
          </div>

        </div>
      </div>
        <style jsx>
    
    {`
    .quote-form{
      background-color:#15A4F7;
      padding-left:50px;
      padding-right:50px;
      max-width: 770px;
      
    }
    .quote-form h3 {
      color: #fff;
      position: relative;
      font-size: 22px;
      text-align: center;
      
      padding-top: 29px;
    padding-bottom: 16px;
     
     }  
     .quote-form h3:before {
      position: absolute;
      left: 50%;
      margin-left: -65px;
      width: 130px;
      content: "";
      background-color: #ffff;
      height: 1px;
      bottom: 0;
  }
  .quote-form h3:after {
    position: absolute;
    height: 13px;
    width: 13px;
    border: 2px solid #fff;
    border-radius: 50%;
    left: 50%;
    margin-left: -6.5px;
    content: "";
    bottom: -6.5px;
}

.quote-form input, .quote-form textarea {
  border: none;
  background: none;
  width: 100%;
  border-bottom: 1px solid lightgray;
  color:#fff;
  padding:10px 0;
}
.quote-form textarea {
  height:100px;
}
.form-submit{
  padding-bottom:20px;
}
.form-submit button{
  background-color:#fff;
  border:none;
}
    `}</style>
       
       
       
      </div>
    )
  }
}
export default Section2
