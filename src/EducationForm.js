import React from "react"

class EducationForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            school:"",
            title:"",
            country:"",
            date:"",
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
            <form>
                <label>School</label>
                <input type="text" className={inputClass}name="school" value={this.state.school} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.school}</span>
                <br></br>
                <label>Title</label>
                <input type="text" className={inputClass}name="title"value={this.state.title} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.title}</span>
                <br></br>
                <label>Country</label>
                <input type="text" className={inputClass}name="country"value={this.state.country} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.country}</span>
                <br></br>
                <label>Date</label>
                <input type="text" className={inputClass}name="date"value={this.state.date} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.date}</span>
                <br></br>
                <button className={inputClass} onClick={this.handleSubmit}>Submit</button>
                <button className={spanClass} onClick={this.handleEdit}>Edit</button>
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </form>
        )
    }
   
}


export default EducationForm