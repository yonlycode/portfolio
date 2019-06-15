import React, { Component } from 'react'
import axios from 'axios'
import ErrorAlert from '../../stateless/alerts/ErrorAlert';
import SuccessAlert from '../../stateless/alerts/SuccessAlert';
import ConfirmationModal from '../../modals/Confirmation-Modal/ConfirmationModal';

export default class NewsletterForm extends Component {
    
    /* Constructor */
    constructor(props){
        super(props)
        this.state={
            mail:"",
            errMsg:null,
            successMsg:null,
            isValidationNeeded:false
        }
    }

    /* post data to server*/
    handleSubscrition=()=>{
        /* post data */
        axios.post('/subscribe-to-newsletter',{
            mail:this.state.mail
        })
        /* Catch server response deny */
        .catch((err)=>{
            /* set error message */
            this.setState({
                errMsg:"email déja enregistré"
            })
        })
        /* response  */
        .then((r)=>{
            /* set success message */
            if(r !== undefined){
                this.setState({
                    mail:'',
                    successMsg:r.data
                })
            }
            /* close modal */
            this.handleCloseModal()
        })
    }


    /* handle click on modal close button */
    handleCloseModal=()=>{
        this.setState({
            isValidationNeeded:false
        })
    }


    /* Check mail's validity then open confirmation modal */
    handleCheckForm=()=>{
       /* Email regexp for validation  */
       let emailRgxp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

       /* if mail isn't valide */
       if(this.state.mail.match(emailRgxp)===null){
           this.setState({
               errMsg:"ceci n'est pas une adresse email valide"
           })
       }
       /* if mail is valide */
       else{
            this.setState({
                isValidationNeeded : true
            })
       }
    }

    /* Hide all alert when click on them */
    handleAlertHide=()=>{
        this.setState({
            errMsg:null,
            successMsg:null
        })
    }


  render() {
    const { errMsg , successMsg , mail, isValidationNeeded } = this.state
    const { handleAlertHide , handleSubscrition, handleCheckForm, handleCloseModal } = this
    return (
        <aside className="f_widget news_widget">
            {
                /* 
                    display confirmation modal 
                */
                isValidationNeeded?
                <ConfirmationModal
                    title="Nouvelle souscription"
                    message="Êtes vous sur de vouloir souscrire à cette newsletter?"
                    onConfirm={handleSubscrition}
                    onCancel={handleCloseModal}
                    onClose={handleCloseModal}
                />:<span></span>
            }
            <div className="f_title">
                <h3>Newsletter</h3>
            </div>
            <p>Envie de connaitre mes nouveauté ou d'être informé des dernière découvertes en matière d'optimisation de la croissance?</p>
            {
                /* 
                    diplay error messages
                */
                
                this.state.errMsg!==null?
                <ErrorAlert 
                    msg={errMsg}
                    click={handleAlertHide}
                />:<span></span>
            }    

            {
                /* 
                    display success message
                */
                this.state.successMsg!==null?
                <SuccessAlert 
                    msg={successMsg}
                    click={handleAlertHide} 
                />:<span></span>    
            }   
            <div id="mc_embed_signup">
                <div className="subscribe_form relative">
                    <div className="input-group d-flex flex-row">
                        <input 
                            name="email" 
                            value={mail}
                            onChange={(e)=>this.setState({
                                    mail:e.target.value
                                }
                            )}
                            placeholder="Entrez votre adresse email" 
                            type="email"> 
                        </input>
                        <button onClick={handleCheckForm} className="btn sub-btn">
                            <i className="fas fa-envelope"></i>
                        </button>	
                    </div>				
                    <div className="mt-10 info"></div>
                </div>
            </div>
        </aside>
    )
  }
}
