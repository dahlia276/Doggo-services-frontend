import { render } from "@testing-library/react"
import React from "react"



class BecomeSitter extends React.Component {
   
    render() {
        return(
            <div>
            <img className="img-b" src="/images/tamas-pap-cCVs8eo7vH4-unsplash.jpg"/>
                <h1 className="header-b"> Get paid to do what you </h1>
                <h1 className="header-b1">LOVE!</h1>
                <h3 className="title-center">How it works</h3>
            <div>
            <div className="circleBase circle1"></div>
                <p className="one-b">1</p>
                <p className="w-b1">Create your profile</p>
            <div className="circleBase circle2"></div>
                <p className="two-b">2</p>
                <p className="w-b2">Accept requests</p>
                <div className="circleBase circle3"></div>
                <p className="three-b">3</p>
                <p className="w-b3">Get paid</p>
            </div>
            <h3 className="title2">Be in control</h3>
            <div>
                <img className="img1" src="/images/jamie-street-Zqy-x7K5Qcg-unsplash.jpg" />
                <p className="s1-b">Set your own schedule & prices</p>
                <img className="img2" src="/images/autri-taheri-TTGSZSElkOI-unsplash.jpg" />
                <p className="s2-b">Offer any combination of pet care services</p>
                <img className="img3" src="/images/karsten-winegeart-qy0BHykaq0E-unsplash.jpg" />
                <p className="s3-b">Set size, age, and other specifications</p>
            </div>
                <button className="button is-light btn-b" onClick={() => this.props.history.push("/sitter-profile")}>Create account</button>
            </div>
        )
    }
    
}

export default BecomeSitter