import Welcome from "./Welcome";

function Header() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <img src="https://squbix.com/static/media/logo_textbyside_white.957885beec0bbcc5053bd2c30ce2b396.svg" />
                <ul style={{ listStyleType: "none", display: "flex"}}>
                    <li style={{margin: "0px 8px"}}>About Us</li>
                    <li style={{margin: "0px 8px"}}>BlockChain</li>
                    <li style={{margin: "0px 8px"}}>Services</li>
                    <li style={{margin: "0px 8px"}}>Engagement</li>
                    <li style={{margin: "0px 8px"}}>Blogs</li>
                    <li style={{margin: "0px 8px"}}>Training</li>
                    <li style={{margin: "0px 8px"}}>Webinar</li>
                </ul>

            </div>

            <Welcome />
        </div>
    )
}

export default Header;
