import React from "react";
import "./index.css"
import valkrae from "../../assets/backgrounds/valkrae.jpg"
import tenYears from "../../assets/backgrounds/tenYears.png"
import apex from "../../assets/backgrounds/apex-mens.jpg"
import adapt from "../../assets/backgrounds/adapt-womens.jpg"
import vital from "../../assets/backgrounds/vital-womens.jpg"
import dual from "../../assets/backgrounds/dual.jpg"
import { NavLink } from "react-router-dom";

const HomePage = () =>{
    return (
        <>
            <div className="background-img">
                <img id="valkrae" src={valkrae} alt="shop-valkrae" />
                <div id="valk-buttons-box">
                    <button id="valk-shop">
                        <NavLink id="valk-nav" exact to="/products">Shop Womens</NavLink>
                    </button>
                    <button id="valk-shop2">
                        <NavLink id="valk-nav" exact to="/products">Shop Mens</NavLink>
                    </button>
                </div>
                
                
                {/* <img id="tenYears" src={tenYears} alt="shop-years" /> */}
                <img id="apex" src={apex} alt="shop-apex" />
                <img id="adapt" src={adapt} alt="shop-adapt" />
                <img id="vital" src={vital} alt="shop-vital" />
                <img id="dual" src={dual} alt="shop-dual" />
            </div>
        </>
    )
}

export default HomePage