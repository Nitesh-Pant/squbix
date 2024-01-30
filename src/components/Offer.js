import Values from "./Values"

function Offer() {
    return (
        <>
            <div style={{ textAlign: "left", padding: "0px 50px 0px 80px" }}>
                <h2>What We Offer</h2>
                <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
                    <div>
                        <div className="Offer-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)", transition: "transform 2s", paddingBottom: '20px' }}>
                            <h4 style={{ color: "#00ffc6" }}>Mobile Development</h4>
                            <p style={{ fontSize: "17px" }}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                            <button style={{ border: "2px solid #00ffc6", backgroundColor: "transparent", color: "white", padding: "10px" }}>Learn More</button>
                        </div>



                        <div className="Offer-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)", transition: "transform 2s", paddingBottom: '20px' }}>
                            <h4 style={{ color: "#00ffc6" }}>Web Development</h4>
                            <p style={{ fontSize: "17px" }}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                            <button style={{ border: "2px solid #00ffc6", backgroundColor: "transparent", color: "white", padding: "10px" }}>Learn More</button>

                        </div>

                    </div>

                    <div>

                        <div className="Offer-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)", transition: "transform 2s", paddingBottom: '20px' }}>
                            <h4 style={{ color: "#00ffc6" }}>AWS Development</h4>
                            <p style={{ fontSize: "17px" }}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                            <button style={{ border: "2px solid #00ffc6", backgroundColor: "transparent", color: "white", padding: "10px" }}>Learn More</button>
                        </div>

                        <div className="Offer-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)", transition: "transform 2s", paddingBottom: '20px' }}>
                            <h4 style={{ color: "#00ffc6" }}>Cloud Development</h4>
                            <p style={{ fontSize: "17px" }}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                            <button style={{ border: "2px solid #00ffc6", backgroundColor: "transparent", color: "white", padding: "10px" }}>Learn More</button>
                        </div>
                    </div>

                </div>
            </div>


            <Values />
        </>
    )
}

export default Offer