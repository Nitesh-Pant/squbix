import Offer from "./Offer"
import '../App.css';

function Services() {
    return (
        <>
            <div style={{ textAlign: "left", padding: "0px 50px 0px 80px" }}>

                <h2>Our Services</h2>
                <p>Your one-stop solution for business success in today's dynamic market. Our Services range from idea transformation to product enhancement:</p>

                <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
                    <div className="Services-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)",  transition: "transform 2s", paddingBottom: '20px' }}>
                        <h4 style={{ color: "#00ffc6" }}>Product Development</h4>
                        <p style={{fontSize: "17px"}}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                    </div>

                    <div className="Services-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)",  transition: "transform 2s" , paddingBottom: '20px'}}>
                        <h4 style={{ color: "#00ffc6" }}>Product Development</h4>
                        <p style={{fontSize: "17px"}}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                    </div>

                    <div className="Services-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)",  transition: "transform 2s", paddingBottom: '20px' }}>
                        <h4 style={{ color: "#00ffc6" }}>Product Development</h4>
                        <p style={{fontSize: "17px"}}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                    </div>

                    <div className="Services-Sub" style={{ width: "550px", borderTop: "6px solid #00ffc6", borderRadius: "25px", margin: "15px 10px", backgroundImage: "linear-gradient(to right, #121636, #010630)",  transition: "transform 2s", paddingBottom: '20px' }}>
                        <h4 style={{ color: "#00ffc6" }}>Product Development</h4>
                        <p style={{fontSize: "17px"}}>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                    </div>
                </div>


                <p>At Squbix Digital, we are dedicated to delivering exceptional services that empower businesses to thrive in the ever-evolving digital landscape. Reach out to us today to discuss your unique requirements and discover how our services can take your business to new heights.</p>


            </div >

            <Offer />
        </>
    )
}

export default Services