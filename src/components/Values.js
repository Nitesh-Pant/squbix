import Footer from "../Footer"

function Values() {
    return (
        <>
            <div style={{ textAlign: "left", padding: "0px 50px 0px 80px" }}>
                <h2>Our Core Values</h2>
                <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "space-evenly" }}>
                    <div style={{ width: "350px", border: "0px solid", borderRadius: "25px", backgroundImage: "linear-gradient(to right, #121636, #010630)", transition: "transform 2s", paddingBottom: '20px' }}>
                        <img src="	https://squbix.com/static/media/Quality.524e53bd938440dd5afaae68ce9a4390.svg" />
                        <h4>Mobile Development</h4>
                        <p>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                    </div>


                    <div style={{ width: "350px", border: "0px solid", borderRadius: "25px", backgroundImage: "linear-gradient(to right, #121636, #010630)", transition: "transform 2s", paddingBottom: '20px' }}>
                        <img src="	https://squbix.com/static/media/technology.727a59fa2a9d621679ae549f813b49ae.svg" />
                        <h4>Web Development</h4>
                        <p>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                    </div>


                    <div style={{ width: "350px", border: "0px solid", borderRadius: "25px", backgroundImage: "linear-gradient(to right, #121636, #010630)", transition: "transform 2s", paddingBottom: '20px' }}>
                        <img src="https://squbix.com/static/media/Research.fe17951b61e0a8469e31873d17942633.svg"
                        />                    <h4>AWS Development</h4>
                        <p>We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology.</p>
                    </div>


                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Values