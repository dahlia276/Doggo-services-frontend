import React from "react"
import {getAllSitters, requestBookingEmail, deleteSitter} from "../api"
import SitterProfile from "./Sitter-profile"

class AvailableSitters extends React.Component {
    state = {
        sitters: [],
        requestText: ""
    }

    async componentDidMount(){
        const response = await getAllSitters()
        this.setState({
            sitters: response.data
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
      };

  sendRequest = async (event, email) => {
    event.preventDefault();
    await requestBookingEmail(email, this.state.requestText)
    this.props.history.push("/");
  }

  handleDeleteSitter = async (id) => {
    await deleteSitter(id)
    this.props.history.push("/") //redirecting the user to home page
}

  render(){
      const {name, area, rate, about, imageUrl, services, space, pottyTrained, requestText,_id } = this.state
      return(
          <div>
            <img className="img-l" src="/images/michael-oxendine-t7wwffh6x8E-unsplash.jpg"/>
              <h1 className="available-t-1"> Find the perfect match</h1>
              <h4 className="available-t-2">Available sitters</h4>
              <div>
                    {this.state.sitters.map((sitter, index) => {
                        return (
                        <div className="div-sitter">
                        <p className="available-i-1">Name: {sitter.name}</p>
                        <p className="available-i-2">Area: {sitter.area}</p>
                        <p className="available-i-3">Services: {sitter.services}</p>
                        <p className="available-i-4"> About {sitter.name}: {sitter.about}</p>
                        <p className="available-i-5">Hourly rate: {sitter.rate}</p>
                        <p className="available-i-6">About the space: {sitter.space}</p>
                        <p className="available-i-7">Potty trained: {sitter.pottyTrained ? "Yes" : "No"}</p>
                        <img className="available-i-8" src={sitter.imageUrl}/>
                        
                        {sitter.email &&  
                        <>
                        <form onSubmit={(event) => this.sendRequest(event, sitter.email)}> 
                            <textarea className="available-i-t" name="requestText" onChange={this.handleChange} value={requestText}></textarea>
                            <button className="available-btn" type="submit">Request Booking</button>
                        </form>
                        
                        </>
                        
                        
                        }
                       
                        </div>
                        )
                    })}
              </div>
          </div>
      )
  }
}

export default AvailableSitters