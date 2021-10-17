import React from "react"

class GeneralInformation extends React.Component{

    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            phone:"",
            address:"",
            mode:"edit"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
    }

    

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

   handleSubmit(event){
    event.preventDefault();
    this.setState({
        mode:"save"
    })
       console.log(this.state);
      
      
   }

   handleEdit(event){
        event.preventDefault(); 
       this.setState({
           mode:"edit"
       })
   }

    
    render(){

        let inputClass="";
        let spanClass=""

        

        if (this.state.mode==="save"){
            inputClass+="input-notactive"
            spanClass+="span-active"
        }
        else if(this.state.mode==="edit"){
            inputClass+="input-active"
            spanClass+="span-notactive"
        }
        return(
            <div>
                <h1>General Information</h1>
                <form>
                    
                    <label>Name</label>
                    
                    <input type="text" className={inputClass}name="name" value={this.state.name} onChange={this.handleChange}></input>
                    <span className={spanClass}>{this.state.name}</span>
                    <br></br>
                    <label>Email</label>
                    <input type="text" className={inputClass}name="email"value={this.state.email} onChange={this.handleChange}></input>
                    <span className={spanClass}>{this.state.email}</span>
                    <br></br>
                    <label>Phone</label>
                    <input type="text" className={inputClass}name="phone"value={this.state.phone} onChange={this.handleChange}></input>
                    <span className={spanClass}>{this.state.phone}</span>
                    <br></br>
                    <label>Address</label>
                    <input type="text" className={inputClass}name="address"value={this.state.address} onChange={this.handleChange}></input>
                    <span className={spanClass}>{this.state.address}</span>
                    <br></br>
                    {/* <input className={inputClass} value="Submit" type="submit"></input> */}
                    <button className={inputClass} onClick={this.handleSubmit}>Submit</button>
                    <button className={spanClass} onClick={this.handleEdit}>Edit</button>
                </form>
            </div>
            
        )
    }
   
}


export default GeneralInformation