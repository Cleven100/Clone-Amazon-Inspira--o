import React from "react";
import "./Home.css";
import Product from '../Product/Product'


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
         <img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png" alt="Painel" className="home__image"></img>
        
        

        <div className="home__row">
          <Product
          
          image="https://m.media-amazon.com/images/I/61H1d-81qZL._AC_SY400_.jpg"
          title="Apple iPhone 11 BLUE"
          price={700}
          />
          <Product 
          image="https://m.media-amazon.com/images/I/41kBmL3zaZL._AC_SY400_.jpg"
          title="Apple iPhone 11 BLACK"
          price={700}
          />
          <Product 
          image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SY400_.jpg"
          title="Apple iPhone 11 RED"
          price={700}
          />
        </div>
        <div className="home__row">
          <Product 
           image="https://m.media-amazon.com/images/I/318anM9ARTL._AC_SY400_.jpg"
           title="Ofertas do Dia"
          price={200}
          />
          <Product 
          image="https://m.media-amazon.com/images/I/217Q5PEubRS._AC_SY400_.jpg"
          
           title="Carregador Original iPhone 12 Turbo Usb-c 20w iphone 11 ipad 100% original"
          price={15}
          />
          
        </div>
        <div className="home__row">
          <Product
          image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/ConsumerWeek/AmazonDevices/br-cw_backup-quad_card_d-cr_blk-372x232._SY232_CB626293562_.jpg" 
          title="Echo dot"
          price={49.50}
          />
          <Product
          image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/ConsumerWeek/AmazonDevices/br-deskcard-quad_card_d-shpp-372x232._SY232_CB626293681_.jpg"
          title="Fire TV Stick"
          price={49.50}
          />
          <Product
          image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/ConsumerWeek/AmazonDevices/br-deskcard-quad_card_d-jg_blk-372x232._SY232_CB626293681_.jpg" 
          title="Kindle 10ª Geração"
          price={60}
          />
          <Product
          image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2022/ConsumerWeek/AmazonDevices/br-deskcard-quad_card_d-cw_blk_comms-186x116._SY232_CB626263629_.jpg"
          title="Echo Show 8 1ª geração" 
          price={110}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
