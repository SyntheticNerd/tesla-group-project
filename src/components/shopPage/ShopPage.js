import React from "react";
import "./ShopPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCarousel from './HeroCarousel';
import VehicleAccessories from './VehicleAccessories';
import modelS from '../../assets/images/modelS.avif'
import model3 from '../../assets/images/model3.avif'
import modelX from '../../assets/images/modelX.avif'
import modelY from '../../assets/images/modelY.avif'
import charging from '../../assets/images/charging.avif'
import lifestyle from '../../assets/images/lifestyle.avif'
import ShopAccessories from './ShopAccessories';


const ShopPage = () => {
  return (
    <div className="shop-page-component">
      <HeroCarousel />
      <div>
        Tesfaye
      </div>
      <VehicleAccessories image={modelS} title={'Model S Accessories'} />
      <VehicleAccessories image={model3} title={'Model 3 Accessories'} color={"black"} />
      <VehicleAccessories image={modelX} title={'Model X Accessories'} />
      <VehicleAccessories image={modelY} title={'Model Y Accessories'} color={"black"} />
      <VehicleAccessories image={charging} title={'Charging'} />
      <ShopAccessories />
      <VehicleAccessories button={true} image={lifestyle} title={'Lifestyle'} color={"black"} />
      {/* <div className="copyright-text">
        <h5> Tesla © 2022 </h5>
        <h5>Privacy {'&'} Legal </h5>
        <h5>Locations</h5>
      </div> */}
    </div>
  );
};

export default ShopPage;
