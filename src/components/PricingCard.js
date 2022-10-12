import "./PricingCardStyles.css";
import React from 'react'
// import { Link } from "react-router-dom";
// import CV from "../assets/My_CV.pdf"
// import Tenth from "../assets/KISHAN_TENTH.pdf"
// import Twelfth from "../assets/KISHAN_TWELFTH.pdf"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                {/* <h3>-Matriculation-</h3> */}
                {/* <a href={Tenth} target="_blank" rel="noreferrer"  className="btn">Matriculation</a> */}
                <button className="btn">Matriculation</button>
                {/* <span className="bar"></span> */}
                <p className="btc">78.8%</p>
                <p>- 2017 passed -</p>
                <p>- Bihar School Examination Board -</p>
                <p>-From Siwan-</p>
                <p>- Bihar -</p>
                {/* <Link to="/contact" className="btn">See 10TH Marksheet</Link> */}
                

            </div>
            <div className="card">
                <button className="btn">Higher Secondary</button>
                {/* <span className="bar"></span> */}
                <p className="btc">86.6%</p>
                <p>- 2019 passed -</p>
                <p>- Bihar School Examination Board -</p>
                <p>-From Siwan-</p>
                <p>- Bihar -</p>
                {/* <Link to="/contact" className="btn">See 12TH Marksheet</Link> */}
                {/* <a href={Twelfth} target="_blank" rel="noreferrer"  className="btn">See 12TH Marksheet</a> */}

            </div>
            <div className="card">
                <button className="btn">B.E. CSE</button>
                {/* <span className="bar"></span> */}
                <p className="btc">79.1%</p>
                <p>- 2023 passing -</p>
                <p>- SLIET University,longowal -</p>
                <p>-From Sangrur-</p>
                <p>- Punjab -</p>
                {/* <Link to="/contact" className="btn">Download CV</Link> */}
                {/* <a href={CV} target="_blank" rel="noreferrer"  className="btn">Download CV</a> */}

            </div>
        </div>
    </div>
  )
}

export default PricingCard