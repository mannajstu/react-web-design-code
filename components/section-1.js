import React, { Component } from 'react'
import Nav from './nav'

import GlobalHeader from './globalheader';

class Section1 extends Component {
  render() {
    return (
      <div>
        
        <div className="container" style={{marginBottom:30 +'px'  }}>
         <div className='row '>
          <div className='col-md-12 text-center'>
          <div className="section-title">
          <h2 >Latesr News</h2>
          </div>
          
          <p >---------------</p>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className="row">
           <div className="col-md-4"><div className="single-blog-box">
           <div className="blog-box-bg blog-box-bg-1"></div>
            <div className="blog-box-content">
              <p className="blog-meta">
            <a href="#"><i className="fa fa-user" aria-hidden="true"></i>Fahmid hossian</a>
            <i className="fa fa-calendar" aria-hidden="true"></i>22 DEC,2019
              </p>
              <h3 >Lorem, ipsum dolor sit amet consectetur adipisicing elit.            </h3>
              <div className="blog-content">
                <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iste itaque dignissimos unde, quia fugiat quae aliquam voluptate magni mollitia hic magnam at repudiandae reiciendis consequatur ipsum. Modi, iure mollitia?</p>
                <a href="#" className="blog-read-more">Read more</a>
                
              </div>
            </div>
             </div></div>
             <div className="col-md-4"><div className="single-blog-box">
           <div className="blog-box-bg blog-box-bg-1"></div>
            <div className="blog-box-content">
              <p className="blog-meta">
            <a href="#"><i className="fa fa-user" aria-hidden="true"></i>Fahmid hossian</a>
            <i className="fa fa-calendar" aria-hidden="true"></i>22 DEC,2019
              </p>
              <h3 >Lorem, ipsum dolor sit amet consectetur adipisicing elit.            </h3>
              <div className="blog-content">
                <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iste itaque dignissimos unde, quia fugiat quae aliquam voluptate magni mollitia hic magnam at repudiandae reiciendis consequatur ipsum. Modi, iure mollitia?</p>
                <a href="#" className="blog-read-more">Read more</a>
                
              </div>
            </div>
             </div></div>
             <div className="col-md-4"><div className="single-blog-box">
           <div className="blog-box-bg blog-box-bg-1"></div>
            <div className="blog-box-content">
              <p className="blog-meta">
            <a href="#"><i className="fa fa-user" aria-hidden="true"></i>Fahmid hossian</a>
            <i className="fa fa-calendar" aria-hidden="true"></i>22 DEC,2019
              </p>
              <h3 >Lorem, ipsum dolor sit amet consectetur adipisicing elit.            </h3>
              <div className="blog-content">
                <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iste itaque dignissimos unde, quia fugiat quae aliquam voluptate magni mollitia hic magnam at repudiandae reiciendis consequatur ipsum. Modi, iure mollitia?</p>
                <a href="#" className="blog-read-more">Read more</a>
                
              </div>
            </div>
             </div></div>
          </div>
        </div>
       
        <style jsx>
    
    {`
    .single-blog-box {
      padding:10px;
   }
    .single-blog-box:hover {
      border:.2px solid red;
   }
    
      .blog-box-bg-1 {
        
        background-image: url("/static/background-1.png");
        background-repeat: no-repeat;
        padding:10px;
        
       
      }
      .blog-box-bg{
        height: 200px;
        width: 100%;
        
        margin-bottom:15px;
        background-position: center center;
        background-size: contain;
      }
      .blog-meta i{
        color:red;        
          padding: 10px;
      
      }
      .blog-box-content h3{
        font-size:18px;
      }
      .blog-read-more {
        color: white;
        background-color: red;
        padding: 10px 20px;
        display: inline-block;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 12px;
        margin-bottom:20px;
    }
    .blog-read-more:hover {
      
      background-color: black;
       }
      
    `}</style>
       
       
      </div>
    )
  }
}
export default Section1
