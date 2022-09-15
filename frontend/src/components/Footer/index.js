import "./index.css"

const Footer = () =>{

    
    return (
        <div className="footer">
            <hr/>
            <h1>I am footer</h1>
            <div className="top">
                <div className="top-left">
                    {/* 3 unordered lists columns */}
                    <p>I am top left</p>
                </div>
                <div className="top-right">
                    <h2>TOP RIGHT More About Gymshark</h2>
                    <ul>
                        <div>Blog</div>
                        <div>Email SignUp</div>
                        <div>Gymshark Training</div>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-left">
                    <p>I am bottom left</p>
                </div>
                <div className="bottom-right">
                    <p>I am bottom right</p>
                </div>
            </div>
        </div>

    )
}

export default Footer