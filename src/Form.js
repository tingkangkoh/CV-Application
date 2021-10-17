import React from "react"

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state={
            company:"",
            position:"",
            role:"",
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
                <label>Company</label>
                <input type="text" className={inputClass}name="company" value={this.state.company} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.company}</span>
                <br></br>
                <label>Position</label>
                <input type="text" className={inputClass}name="position"value={this.state.position} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.position}</span>
                <br></br>
                <label>Role</label>
                <input type="text" className={inputClass}name="role"value={this.state.role} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.role}</span>
                <br></br>
                <label>End Date</label>
                <input type="date" className={inputClass}name="date"value={this.state.date} onChange={this.handleChange}></input>
                <span className={spanClass}>{this.state.date}</span>
                <br></br>
                <button className={inputClass} onClick={this.handleSubmit}>Submit</button>
                <button className={spanClass} onClick={this.handleEdit}>Edit</button>
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </form>
        )
    }
   
}


export default Form