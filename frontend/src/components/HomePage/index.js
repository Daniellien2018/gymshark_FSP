import React from "react";
import "./index.css"
import valkrae from "../../assets/backgrounds/valkrae.jpg"
import tenYears from "../../assets/backgrounds/tenYears.png"
import apex from "../../assets/backgrounds/apex-mens.jpg"
import adapt from "../../assets/backgrounds/adapt-womens.jpg"
import vital from "../../assets/backgrounds/vital-womens.jpg"
import dual from "../../assets/backgrounds/dual.jpg"

const HomePage = () =>{
    return (
        <>
            <div className="background-img">
                <img id="valkrae" src={valkrae} alt="shop-valkrae" />
                <img id="tenYears" src={tenYears} alt="shop-years" />
                <img id="apex" src={apex} alt="shop-apex" />
                <img id="adapt" src={adapt} alt="shop-adapt" />
                <img id="vital" src={vital} alt="shop-vital" />
                <img id="dual" src={dual} alt="shop-dual" />
            </div>
        </>
    )
}

export default HomePage