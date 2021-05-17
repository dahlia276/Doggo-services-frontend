import React from "react"
import {addowner, uploadFile} from "../api"

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
        dogSize: [],
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
        const {name} = event.target;
         this.setState({
             [name]: !this.state[name]
         })
       }

       handleAge = (event) => {
        const {name} = event.target;
         this.setState({
             [name]: !this.state[name]
         })
       }

       handleOther = (event) => {
        const {name} = event.target
        this.setState({
            [name]: !this.state[name]
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
            small,
            medium,
            large,
            puppy,
            adult,
            senior,
            yes,
            no} = this.state;
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

            let size = [];
            if(small){
                size.push("small")
            }
            if(medium){
                size.push("medium")
            }
            if(large){
                size.push("large")
            }

            let age = [];
            if(puppy){
                age.push("puppy")
            }
            if(adult){
                age.push("adult")
            }
            if(senior){
                age.push("senior")
            }

            let other = [];
            if(yes){
                other.push("yes")
            }
            if(no){
                other.push("no")
            }



        const newProfile = {
            services,
            address,
            pickUp,
            dropOff,
            size,
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
                small,
                medium,
                large,
                puppy,
                adult,
                senior,
                yes,
                no } = this.state;

            return(
                firstPage ? (
                <div>
                    <h1>Find the perfect match!</h1>
                    <div>
                    <h2>Choose your service:</h2>
                    <button onClick={this.handleServices} name="dogBoarding" >{dogBoarding ? 'Dog boarding ✅' : 'Dog boarding'}</button>
                    <button onClick={this.handleServices} name="houseSitting">  {houseSitting ? 'House sitting ✅' : 'House sitting'}</button>
                    <button onClick={this.handleServices} name="dropInVisits"> {dropInVisits ? 'Drop-in visits ✅' : 'Drop-in visits'}</button>
                    <button onClick={this.handleServices} name="doggyDaycare"> {doggyDaycare ? 'Doggy day care ✅' : 'Doggy day care'}</button>
                    <button onClick={this.handleServices} name="dogWalking"> {dogWalking ? 'Dog walking ✅' : 'Dog walking'}</button>
                    <button onClick={this.handleServices} name="dogGrooming"> {dogGrooming ? 'Dog grooming ✅' : 'Dog grooming'}</button>
                    </div>
                   <div>
                   <form  >
                       <label>Add your area</label>
                       <input
                       type="text"
                       name="address"
                       onChange={this.handleChange}
                       value={address}
                       />
                        <p>Add your dates</p>
                       <label>Pick up</label>
                       <input type="date" name="pick-up" onChange={this.handleChange} value={pickUp}/>
                       <label>Drop off</label>
                       <input type="date" name="drop-off" onChange={this.handleChange} value={dropOff} />
                   </form>
                   </div>
                   <button onClick={this.nextPage}>Next</button>
                </div>
                  ) :
                  (
                      <div>
                          <h1>Find the perfect match!</h1>
                          <form onSubmit={this.handleFormSubmit}  encType="multipart/form-data">
                          <p>What's your dog's size?</p>
                          <button onClick={this.handleSize} name="small" >{small ? 'Small ✅' : 'Small'}</button>
                          <button onClick={this.handleSize} name="medium">  {medium ? 'Medium ✅' : 'Medium'}</button>
                          <button onClick={this.handleSize} name="large"> {large ? 'Large ✅' : 'Large'}</button>
                          <p>How old is your dog?</p>
                          <button onClick={this.handleAge} name="puppy" >{puppy ? 'Puppy ✅' : 'Puppy'}</button>
                          <button onClick={this.handleAge} name="adult">  {adult ? 'Adult ✅' : 'Adult'}</button>
                          <button onClick={this.handleAge} name="senior"> {senior ? 'Senior ✅' : 'Senior'}</button>
                          <p>Does your dog get along with other dogs?</p>
                          <button onClick={this.handleOther} name="yes">  {yes ? 'Yes ✅' : 'Yes'}</button>
                          <button onClick={this.handleOther} name="no"> {no ? 'No ✅' : 'No'}</button>
                          <label> Special comments:</label>
                          <input type="text" name="specialComments" onChange={this.handleChange} value={specialComments}/>
                          <button>Submit</button>
                          </form>
                          <button onClick={this.nextPage}>Previous</button>
                      </div>
                  )
            )
        }
    
}

export default OwnerProfile