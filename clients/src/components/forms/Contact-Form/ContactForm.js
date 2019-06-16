import React, { Component } from 'react'
import ErrorAlert from '../../stateless/alerts/ErrorAlert';
import SuccessAlert from '../../stateless/alerts/SuccessAlert';

export default class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state={
            errMsg:null,
            successMsg:null,
            name:'',
            mail:'',
            subject:'',
            message:''
        }
    }
    /* Handle hiding alert on click*/
    handleAlertHide=()=>{
        this.setState({
            errMsg:null,
            successMsg:null
        })
    }

    /* check form input's before launch handle send  */
    handleCheckForm=()=>{
        /* Email regexp for validation  */
        let emailRgxp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        /* if mail isn't valide */
        if(this.state.mail.match(emailRgxp)===null){
            this.setState({
                errMsg:"ceci n'est pas une adresse email valide"
            })
        }
        else if(this.state.name === ""){
            this.setState({
                errMsg:"vous n'avez pas saisie de nom"
            })
        }
        else if(this.state.subject === ""){
            this.setState({
                errMsg:"vous n'avez pas saisie de sujet"
            })
        }
        else if(this.state.message === ""){
            this.setState({
                errMsg:"vous n'avez pas saisie de message"
            })
        }
        else{
            this.handleSend()
        }

    }

    /*send form data to server */
    handleSend=()=>{

    }

    
  render() {
    const { errMsg, successMsg, name, mail, subject, message } = this.state;
    const { handleAlertHide, handleCheckForm } = this
    return (
        <div className="col-lg-9">
            {/* 
                diplay error messages
            */
            
            errMsg!==null?
                <ErrorAlert 
                    msg={errMsg}
                    click={handleAlertHide}
                />:<span></span>
            }    

            {/* 
                display success message
            */
            successMsg!==null?
                <SuccessAlert 
                    msg={successMsg}
                    click={handleAlertHide} 
                />:<span></span>    
            }  
            <div className="row contact_form" id="contactForm">
                <div className="col-md-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            placeholder="Entrez votre nom"
                            value={name}
                            onChange={(e)=>this.setState({name:e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            name="email" 
                            placeholder="Entrez votre addresse email"
                            value={mail}
                            onChange={(e)=>this.setState({mail:e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            name="subject" 
                            placeholder="Entrez votre sujet" 
                            value={subject}
                            onChange={(e)=>this.setState({subject:e.target.value})}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <textarea 
                            className="form-control" 
                            name="message" 
                            id="message" 
                            rows="1" 
                            placeholder="Entrez votre Message"
                            value={message}
                            onChange={(e)=>this.setState({message:e.target.value})}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <button 
                        type="submit" 
                        value="submit" 
                        className="btn submit_btn"
                        onClick={handleCheckForm}
                    >
                        Envoyer
                    </button>
                </div>
            </div>
        </div>
    )
  }
}
