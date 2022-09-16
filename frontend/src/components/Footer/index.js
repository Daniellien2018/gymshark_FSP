import "./index.css"
import github from "../../assets/logos/github-logo.png"
import linkedin from "../../assets/logos/linkedin-logo.png"
import gymshark from "../../assets/logos/gymshark_logo.png"

const Footer = () =>{

    
    return (
        <div className="footer">
            <hr/>
            <div className="top">
                <div className="top-left">
                    <p>Inspired by GymShark, created by Daniel </p>
                </div>
                <div className="top-right">
                    <span id="img-title">More About GymWhale</span>
                    <div className="footer-link-box">
                        <a href="https://github.com/Daniellien2018">
                            <div className="footer-links">
                                <img src={github} alt="github-logo" />
                                <p>Github</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-lien-7a7b6262/">
                            <div className="footer-links">
                                <img src={linkedin} alt="linkedin-logo"/>
                                <p>Linkedin</p>
                            </div>
                        </a>
                        <a href="https://www.gymshark.com/">
                            <div className="footer-links">
                                <img src={gymshark} alt="gymshark-logo" />
                                <p>Gymshark</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer