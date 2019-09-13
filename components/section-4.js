import React, { Component } from 'react'
import Head from 'next/head'
import OwlCarousel from 'react-owl-carousel2';


class Section4 extends Component {
  render() {
    const options = {
     
      rewind: true,
      autoplay: true,
      nav: true,
      dots:false,
      navText:['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
       responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:4,
                        
        }
    }
  }
    return (
      <div >
        <Head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"  /> 
        <style>
        {`
.owl-theme .owl-nav {
  position: absolute !important;
  top: -33px !important;
  right: -22px !important;
}
        `}
        </style>
        </Head>
        
        <div className="container" style={{marginBottom:30 +'px'  }}>
         <div className='row '>
          <div className='col-md-12 text-center mb-3'>
          <div className="section-title">
          <h2 >Pricing Plan</h2>
          </div>
          
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className="row slider-area">
          <OwlCarousel id="owl-react"  options={options}>
    <div>
      <img className="mx-auto owl-img-s" src="/static/background-1.png" alt=""/>
      <h3>HelLoo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure corporis illo laborum magni amet doloribus consequuntur dolorum commodi deserunt modi necessitatibus suscipit adipisci obcaecati, eveniet doloremque eaque? Deleniti, iste.</p>


    </div>
    <div>
      <img className="mx-auto owl-img-s" src="/static/background-1.png" alt=""/>
      <h3>HelLoo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure corporis illo laborum magni amet doloribus consequuntur dolorum commodi deserunt modi necessitatibus suscipit adipisci obcaecati, eveniet doloremque eaque? Deleniti, iste.</p>


    </div>

    <div>
      <img className="mx-auto owl-img-s" src="/static/background-1.png" alt=""/>
      <h3>HelLoo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure corporis illo laborum magni amet doloribus consequuntur dolorum commodi deserunt modi necessitatibus suscipit adipisci obcaecati, eveniet doloremque eaque? Deleniti, iste.</p>


    </div>


    <div>
      <img className="mx-auto owl-img-s" src="/static/background-1.png" alt=""/>
      <h3>HelLoo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure corporis illo laborum magni amet doloribus consequuntur dolorum commodi deserunt modi necessitatibus suscipit adipisci obcaecati, eveniet doloremque eaque? Deleniti, iste.</p>


    </div>


    <div>
      <img className="mx-auto owl-img-s" src="/static/background-1.png" alt=""/>
      <h3>HelLoo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure corporis illo laborum magni amet doloribus consequuntur dolorum commodi deserunt modi necessitatibus suscipit adipisci obcaecati, eveniet doloremque eaque? Deleniti, iste.</p>


    </div>
    <div>
      <img className="mx-auto owl-img-s" src="/static/background-1.png" alt=""/>
      <h3>HelLoo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure corporis illo laborum magni amet doloribus consequuntur dolorum commodi deserunt modi necessitatibus suscipit adipisci obcaecati, eveniet doloremque eaque? Deleniti, iste.</p>


    </div>
    
</OwlCarousel>
          
          </div>
         </div>
       
        <style jsx>
    
    {`
.owl-img-s{
  width: 188px !important;
  height: 188px !important;
  border-radius: 50% !important;
}
.slider-area {
  border: 1px solid black;
  padding: 25px;
}

              
    `}</style>
       
       
      </div>
    )
  }
}
export default Section4
