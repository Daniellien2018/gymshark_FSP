import React from "react";
import "./index.css"
import valkrae from "../../assets/backgrounds/valkrae.jpg"
import tenYears from "../../assets/backgrounds/tenYears.png"
import apex from "../../assets/backgrounds/apex-mens.jpg"
import adapt from "../../assets/backgrounds/adapt-womens.jpg"
import vital from "../../assets/backgrounds/vital-womens.jpg"
import dual from "../../assets/backgrounds/dual.jpg"
import { NavLink, Redirect, useHistory } from "react-router-dom";

const HomePage = () =>{
    const history = useHistory();
    return (
        <>
            <div className="background-img">
                <img id="valkrae" src={valkrae} alt="shop-valkrae" />
                <div id="valk-buttons-box">
                    <button id="valk-shop" onClick={() => history.push("/products/womens")} >
                        {/* <NavLink id="valk-nav" exact to="/products/womens">Shop Womens</NavLink> */}
                        <p id="valk-nav">Shop Womens</p>
                    </button>
                    <button id="valk-shop2" onClick={() => history.push("/products/mens")}>
                        {/* <NavLink id="valk-nav" exact to="/products/mens">Shop Mens</NavLink> */}
                        <p id="valk-nav">Shop Mens</p>
                    </button>
                </div>

                <img id="apex" src={apex} alt="shop-apex" />
                <div id="apex-buttons-box">
                    <h1 id="apex-title">STEP UP IN APEX</h1>
                    <h2 id="apex-subtitle">The collection that keeps you cool, now with Gymshark ESNCE anti-odour technology fabric</h2>
                    <button id="apex-shop" onClick={() => history.push("/products")}>
                        {/* <NavLink id="apex-nav" exact to="/products">SHOP NOW</NavLink> */}
                        <p id="apex-nav">Shop Now</p>
                    </button>
                </div>

                <img id="adapt" src={adapt} alt="shop-adapt" />
                <div id="adapt-buttons-box">
                    <h1 id="adapt-title">NEW TO THE <br/>ADAPT FAMILY</h1>
                    <h2 id="adapt-subtitle">Brand new Adapt Camo and Adapt Marl patters, shades, and shapes for you to feel good, and perform better.</h2>
                    <button id="adapt-shop" onClick={() => history.push("/products")}>
                        {/* <NavLink id="adapt-nav" exact to="/products">SHOP NOW</NavLink> */}
                        <p id="adapt-nav">Shop Now</p>
                    </button>
                </div>

                <img id="vital" src={vital} alt="shop-vital" />
                <div id="vital-buttons-box">
                    <h1 id="vital-title">DO IT ALL IN VITAL</h1>
                    <h2 id="vital-subtitle">New colours, new styles. <br/> Because you can do it all, and so can Vital</h2>
                    <button id="vital-shop" onClick={() => history.push("/products")}>
                        {/* <NavLink id="vital-nav" exact to="/products">SHOP NOW</NavLink> */}
                        <p id="vital-nav">Shop Now</p>
                    </button>
                </div>

            </div>
        </>
    )
}

export default HomePage