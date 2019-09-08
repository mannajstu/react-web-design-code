import React, { Component } from 'react'

class Section1 extends Component {
  render() {
    return (
      <div>
        
        <div className="container" style={{marginBottom:30 +'px'  }}>
         <div className='row '>
          <div className='col-md-12 text-center mb-3'>
          <div className="section-title">
          <h2 >Pricing Plan</h2>
          </div>
          
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="price-section">

            
            <h3>Personal</h3>
<div className="price-icon">
<i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
</div>
<div className="price-service-list">
  <ul>
    <li> <i className="fa fa-check" aria-hidden="true"></i>2 GB Web Space</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Free Domain Register</li>
    <li className="disable"> <i className="fa fa-check" aria-hidden="true"></i>Special Offer</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Service Uptime</li>
  </ul>
</div>
<div className="price text-center"><h5>$15/Mo</h5>
<button type="submit">Order Now</button>
</div>
</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="price-section">

            
            <h3>Personal</h3>
<div className="price-icon">
<i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
</div>
<div className="price-service-list">
  <ul>
    <li> <i className="fa fa-check" aria-hidden="true"></i>2 GB Web Space</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Free Domain Register</li>
    <li className="disable"> <i className="fa fa-check" aria-hidden="true"></i>Special Offer</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Service Uptime</li>
  </ul>
</div>
<div className="price text-center"><h5>$15/Mo</h5>
<button type="submit">Order Now</button>
</div>
</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="price-section">

            
            <h3>Personal</h3>
<div className="price-icon">
<i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
</div>
<div className="price-service-list">
  <ul>
    <li> <i className="fa fa-check" aria-hidden="true"></i>2 GB Web Space</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Free Domain Register</li>
    <li className="disable"> <i className="fa fa-check" aria-hidden="true"></i>Special Offer</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Service Uptime</li>
  </ul>
</div>
<div className="price text-center"><h5>$15/Mo</h5>
<button type="submit">Order Now</button>
</div>
</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="price-section">

            
            <h3>Personal</h3>
<div className="price-icon">
<i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
</div>
<div className="price-service-list d-flex justify-content-center">
  <ul>
    <li> <i className="fa fa-check" aria-hidden="true"></i>2 GB Web Space</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Free Domain Register</li>
    <li className="disable"> <i className="fa fa-check" aria-hidden="true"></i>Special Offer</li>
    <li> <i className="fa fa-times" aria-hidden="true"></i>Service Uptime</li>
  </ul>
</div>
<div className="price text-center"><h5>$15/Mo</h5>
<button type="submit">Order Now</button>
</div>
</div>
          </div>
          
          
        </div>
        
         </div>
       
        <style jsx>
    
    {`

.price-section {
  border:1px solid #000;
  padding:6px;
  
}
.price-section:hover {
  
  box-shadow: 0px 1px 1px 1px green inset;
  transition-duration: .5s;
}
    .price-section h3 {
      text-align:center;
      
   }
    .price-icon {
      text-align:center;
      padding-top:10px;
      padding-bottom:20px;
   }
    
   
      .price-service-list ul{
        list-style: none;
      }
      .price-service-list ul li i{
        
        padding-right:12px;
        font-size:16px;
      }
      .disable>i{
        color:red;

      }
              .price button{
                background-color: white;
                border: 1px solid #000;
                padding: 15px;
                border-radius: 23px;
                margin-top: 16px;
                margin-bottom: 16px;
              }
              .price button:hover{
                background-color: #000;
                
                color:white;
                transition-duration: .5s;

              }
    `}</style>
       
       
      </div>
    )
  }
}
export default Section1
