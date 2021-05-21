import React from "react"
import {addowner, uploadFile} from "../api"
import {RadioGroup, Radio} from 'react-radio-group'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class OwnerProfile extends React.Component {
    state = {
        dogBoarding: false,
        dogBoarding: false,
        houseSitting: false,
        dropInVisits: false,
        doggyDaycare: false,
        dogWalking: false,
        dogGrooming: false,
        small: false,
        medium: false,
        large: false,
        puppy: false,
        adult: false,
        senior: false,
        yes: false,
        no: false,
        address: "",
        pickUp: "",
        dropOff: "",
        dogSize: '',
        dogAge: [],
        otherDogs: "",
        imageUrl: "",
        specialComments: "",
        firstPage: true
    }

    handleFileChange = (event) => {
        this.setState({
          imageUrl: event.target.files[0],
        });
      };
    
      handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };

      handleServices = (event) => {
       const {name} = event.target;
        this.setState({
            [name]: !this.state[name]
        })
      }

      handleSize = (event) => {
      //  let {  selectedValue } = event.target;
        this.setState({
          dogSize: event
        })
      }

      handleAge = (dogAge) => {
       this.setState({
           dogAge: dogAge
       })
      }

      handleOther = (otherDogs) => {
       this.setState({
        otherDogs: otherDogs
       })
      }

      handleChangePickup = (date) => {
        this.setState({
            pickUp: date
        })
       }


      handleChangeDropOff = (date) => {
        this.setState({
            dropOff: date
        })
       }
 

      handleFormSubmit = async (event) => {
        event.preventDefault();
        const {
            address,
            pickUp,
            dropOff,
            dogSize,
            dogAge,
            otherDogs,
            imageUrl,
            specialComments,              
            dogBoarding,
            houseSitting,
            dropInVisits,
            doggyDaycare,
            dogWalking,
            dogGrooming,
            } = this.state;
    /*
        const uploadData = new FormData();
        uploadData.append("file", imageUrl);
        //1. Upload the image to our api
        const response = await uploadFile(uploadData);

        */
        //2. Create the project on our api
            let services = [];
            if(dogBoarding) {
                services.push('dogBoarding')
            }
            if(houseSitting) {
                services.push('houseSitting')
            }
            if(dropInVisits) {
                services.push('dropInVisits')
            }
            if(doggyDaycare) {
                services.push('doggyDaycare')
            }
            if(dogWalking) {
                services.push('dogWalking')
            }
            if(dogGrooming) {
                services.push('dogGrooming')
            }
            console.log(services)

        const newProfile = {
            services,
            address,
            pickUp,
            dropOff,
            dogSize,
            dogAge,
            otherDogs,
            specialComments
        };
        await addowner(newProfile);
        this.props.history.push("/sitter-request");
      };

      nextPage = () => {
          this.setState({
              firstPage: !this.state.firstPage
          })
      }

        render() {
            const {service,
                address,
                pickUp,
                dropOff,
                size,
                dogAge,
                otherDogs,
                imageUrl,
                specialComments,
                dogBoarding,
                houseSitting,
                dropInVisits,
                doggyDaycare,
                dogWalking,
                dogGrooming,
                firstPage,
                } = this.state;

            return(
                firstPage ? (
                <div>
                <img className="img-o" src="/images/matt-nelson-aI3EBLvcyu4-unsplash.jpg"/>
                    <h1 className="o-t-1">Find the perfect match!</h1>
                    <div>
                    <h2 className="sitter-t-1">Choose your service:</h2>
                    <button className="bttn-1" onClick={this.handleServices} name="dogBoarding" >{dogBoarding ? 'Dog boarding ✅' : 'Dog boarding'}</button>
                    <button className="bttn-2" onClick={this.handleServices} name="houseSitting">  {houseSitting ? 'House sitting ✅' : 'House sitting'}</button>
                    <button className="bttn-3" onClick={this.handleServices} name="dropInVisits"> {dropInVisits ? 'Drop-in visits ✅' : 'Drop-in visits'}</button>
                    <button className="bttn-4" onClick={this.handleServices} name="doggyDaycare"> {doggyDaycare ? 'Doggy day care ✅' : 'Doggy day care'}</button>
                    <button className="bttn-5" onClick={this.handleServices} name="dogWalking"> {dogWalking ? 'Dog walking ✅' : 'Dog walking'}</button>
                    <button className="bttn-6" onClick={this.handleServices} name="dogGrooming"> {dogGrooming ? 'Dog grooming ✅' : 'Dog grooming'}</button>
                    </div>
                   <button className="btn-c" onClick={this.nextPage}>Next</button>
                </div>
                  ) :
                  (
                      <div>
                        <img src="/images/matt-nelson-aI3EBLvcyu4-unsplash.jpg"/>
                          <h1 className="o-t-2">Find the perfect match!</h1>
                          <form onSubmit={this.handleFormSubmit}  encType="multipart/form-data">
                       <label className="owner-t-3">Add your area</label>
                       <input className="owner-i-1"
                       type="text"
                       name="address"
                       onChange={this.handleChange}
                       value={address}
                       />
                        <p className="owner-t-4">Add your dates</p>
                       <label className="pickup">Pick up</label>
                       <DatePicker className="pickup-i" onChange={this.handleChangePickup} selected={pickUp} />
                       <label className="dropoff">Drop off</label>
                       <DatePicker className="dropoff-i" onChange={this.handleChangeDropOff} selected={dropOff} />
                          <p className="owner-t-5">What's your dog's size?</p>
                          <RadioGroup className="owner-o-1" name="size" selectedValue={size} onChange={this.handleSize}>
                            <Radio value="small" />Small
                            <Radio value="medium" />Medium
                            <Radio value="large" />Large
                        </RadioGroup>
                          <p className="owner-t-6">How old is your dog?</p>
                          <RadioGroup className="owner-o-2" name="dogAge" selectedValue={dogAge} onChange={this.handleAge}>
                            <Radio value="puppy" />Puppy
                            <Radio value="adult" />Adult
                            <Radio value="senior" />Senior
                        </RadioGroup>
                          <p className="owner-t-7">Does your dog get along with other dogs?</p>
                          <RadioGroup className="owner-o-3" name="otherdogs" selectedValue={otherDogs} onChange={this.handleOther}>
                            <Radio value="yes" />Yes
                            <Radio value="no" />No
                        </RadioGroup>
                          <label className="owner-t-8"> Special comments:</label>
                          <input className="owner-o-4" type="text" name="specialComments" onChange={this.handleChange} value={specialComments}/>
                          <button className="btn-o1">Submit</button>
                          </form>
                          <button className="btn-o2" onClick={this.nextPage}>Previous</button>
                      </div>
                  )
            )
        }
    
}

export default OwnerProfile