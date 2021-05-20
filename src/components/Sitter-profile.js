import React from "react"
import {addsitter, uploadFile} from "../api"
import {RadioGroup, Radio} from 'react-radio-group'

class SitterProfile extends React.Component {
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
        space: "",
        dogSize: [],
        dogAge: "",
        pottyTrained: false,
        imageUrl: "",
        space: "",
        about:"",
        area: "",
        rate:0,
        name:"",
        email: "",
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

      handleSize = (size) => {
         this.setState({
             size: size
         })
       }

       handleAge = (dogAge) => {
        this.setState({
            dogAge: dogAge
        })
       }

       handlePotty = (pottyTrained) => {
        this.setState({
            pottyTrained: pottyTrained
        })
       }

      handleFormSubmit = async (event) => {
        event.preventDefault();
        const {
            dogSize,
            email,
            dogAge,
            imageUrl,              
            dogBoarding,
            houseSitting,
            dropInVisits,
            doggyDaycare,
            dogWalking,
            dogGrooming,
            rate,
            space,
            about,
            area,
            size,
            name,
            pottyTrained} = this.state;
    
        const uploadData = new FormData();
        uploadData.append("file", imageUrl);
        const response = await uploadFile(uploadData);

    
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
            dogAge,
            pottyTrained,
            rate,
            services,
            size,
            imageUrl: response.data.fileUrl,
            space,
            about,
            area,
            email,
            name
        };
        await addsitter(newProfile);
        this.props.history.push("/sitter-request");
        
        
  
      };
      nextPage = () => {
        this.setState({
            firstPage: !this.state.firstPage
        })
    }
        render() {
            const {service,
                size,
                dogAge,
                imageUrl,
                dogBoarding,
                houseSitting,
                dropInVisits,
                doggyDaycare,
                dogWalking,
                dogGrooming,
                firstPage,
                about,
                area,
                space,
                rate,
                email,
                pottyTrained,
                name} = this.state;

            return(   firstPage ? (
                <div>
                    <img className="img-2" src="/images/chewy-EV9_vVMZTcg-unsplash.jpg"/>
                    <h1 className="sitter-h">Earn money on your </h1>
                    <h1 className="sitter-h-2">free time!</h1>
                    <h2 className="sitter-h-3">Create your account</h2>
                    <h2 className="sitter-h-4">TODAY</h2>
                    <div>
                        <h2 className="sitter-t-1">Choose your service(s):</h2>
                        <button className="bttn-1" onClick={this.handleServices} name="dogBoarding" >{dogBoarding ? 'Dog boarding ✅' : 'Dog boarding'}</button>
                        <button className="bttn-2" onClick={this.handleServices} name="houseSitting">  {houseSitting ? 'House sitting ✅' : 'House sitting'}</button>
                        <button className="bttn-3" onClick={this.handleServices} name="dropInVisits"> {dropInVisits ? 'Drop-in visits ✅' : 'Drop-in visits'}</button>
                        <button className="bttn-4" onClick={this.handleServices} name="doggyDaycare"> {doggyDaycare ? 'Doggy day care ✅' : 'Doggy day care'}</button>
                        <button className="bttn-5" onClick={this.handleServices} name="dogWalking"> {dogWalking ? 'Dog walking ✅' : 'Dog walking'}</button>
                        <button className="bttn-6" onClick={this.handleServices} name="dogGrooming"> {dogGrooming ? 'Dog grooming ✅' : 'Dog grooming'}</button>
                    </div>
                    <div>
                        <p className="sitter-t-2">Dog specifications</p>
                        <p className="size">Size</p>
                        <RadioGroup className="size-o" name="size" selectedValue={size} onChange={this.handleSize}>
                            <Radio value="small" />Small
                            <Radio value="medium" />Medium
                            <Radio value="large" />Large
                        </RadioGroup>
                
                        <p className="age">Age</p>
                        <RadioGroup className="age-o" name="dogAge" selectedValue={dogAge} onChange={this.handleAge}>
                            <Radio value="puppy" />Puppy
                            <Radio value="adult" />Adult
                            <Radio value="senior" />Senior
                        </RadioGroup>
                        <p className="potty">Potty trained (Boarding)</p>
                        <RadioGroup className="potty-o" name="pottyTrained" selectedValue={pottyTrained} onChange={this.handlePotty}>
                            <Radio value="yes" />Yes
                            <Radio value="no" />No
                        </RadioGroup>
                        <button className="btn-s" onClick={this.nextPage}>Next</button>
                    </div>
                </div>

                ) :
                (
                <div>
                 <img className="img-2" src="/images/chewy-EV9_vVMZTcg-unsplash.jpg"/>
                    <h1 className="sitter-h">Earn money on your </h1>
                    <h1 className="sitter-h-2">free time!</h1>
                    <h2 className="sitter-h-3">Create your account</h2>
                    <h2 className="sitter-h-4">TODAY</h2>
                    <form onSubmit={this.handleFormSubmit}  encType="multipart/form-data">
                    
                        <label className="sitter-t-3">Name:</label>
                        <input className="sitter-i-1"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={name}
                            />
                            <label className="sitter-t-e" >Email:</label>
                          <input className="sitter-t-e-i"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={email}
                            />      
                        <label className="sitter-t-4">About you:</label>
                        <input className="sitter-i-2"
                            type="text"
                            name="about"
                            cols="30"
                            onChange={this.handleChange}
                            value={about}
                            />
                        <label className="sitter-t-5">Your space:</label>
                        <input className="sitter-i-3"
                            type="text"
                            name="space"
                            onChange={this.handleChange}
                            value={space}
                            />
                        <label className="sitter-t-6"> Hourly rate:</label>
                        <input className="sitter-i-4" type="number" name="rate" onChange={this.handleChange} value={rate}/>
                        <label className="sitter-t-7"> Your area:</label>
                        <input className="sitter-i-5" type="text" name="area" onChange={this.handleChange} value={area}/>
                        <label className="sitter-t-8">Image</label>
                        <input className="sitter-i-6" type="file" onChange={this.handleFileChange} />
                        <button className="btn-p">Create</button>
                    </form>
                    <button className="btn-c" onClick={this.nextPage}>Previous</button>
                </div>
                        
                    
            )
        )
    }
    
}

export default SitterProfile