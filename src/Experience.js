
import React from "react"
import Form from "./Form"




class Experience extends React.Component{

    constructor(){
        super()
        this.state={
            children:[]
        }
        this.handleClick=this.handleClick.bind(this);
        this.deleteForm = this.deleteForm.bind(this);
    }

    handleClick(){

        this.setState(

            function(prevState){
                let i=prevState.children.length
                return{
                    children:[...prevState.children,{id:i}]
                }
                
            }
        )
    }

    deleteForm(id){
        this.setState(function(prevState){
            return{
                children:prevState.children.filter(function(form){
                    return (form.id!==id);
                })
            }
        })
    }


    render(){

     

        return(
            <div className="experience">
            <h1>Experience</h1>
            {this.state.children.map(form=>{
             return(<Form key={form.id} id={form.id} onDelete={this.deleteForm }/>) 
            })}
            <button onClick={this.handleClick}>Add Experience</button>
            </div>
        )
    }
}


export default Experience