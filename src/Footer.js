function Footer() {
    return (
        <>
            <div style={{ display: "flex", margin: "100px 0px 20px 0px", flexWrap: "wrap", justifyContent: "space-evenly" }} >
                <div style={{ borderRight: "1px solid white"}}>
                    <div>
                        <img src="https://squbix.com/static/media/logo_textbyside_white.957885beec0bbcc5053bd2c30ce2b396.svg" />
                    </div>
                    <div>
                        India | Singapore | Australia
                    </div>
                    <div>
                        <h2>SOCIALS</h2>
                    </div>
                </div>

                <div style={{ borderLeft: "1px solid white" }}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>dApps development</li>
                        <li>DeFi</li>
                        <li>Training</li>
                    </ul>
                </div>
            </div>
            <span>© Copyright 2016 - 2023 Squbix Digital Pvt. Ltd. | All Rights Reserved.</span>
        </>
    )
}

export default Footer