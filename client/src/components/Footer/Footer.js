import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  return (
    <body>
			<footer>
						<div>
							<p style={{margin:"0px"}}>Made by <Link to={'https://github.com/rnogales16'}>Raul Nogales.</Link><br></br>
							At <Link to={'https://www.ironhack.com/es/barcelona'}> 	Ironhack Barcelona</Link></p>
						</div>
					</footer>
		</body>
  )
}

export default Footer;