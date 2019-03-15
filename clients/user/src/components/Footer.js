import React, { Component } from 'react'
import axios from 'axios'
import ErrorAlert from './stateless/ErrorAlert';
import SuccessAlert from './stateless/SuccessAlert';
export default class Footer extends Component {
    /* Constructor */
    constructor(props){
        super(props)
        this.state={
            mail:"",
            errMsg:null,
            successMsg:null
        }
    }

    /* check email integrity and post it to server */
    handleSubscrition=()=>{

        /* Email regexp for validation  */
        let emailRgxp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        /* if mail isn't valide */
        if(this.state.mail.match(emailRgxp)===null){
            this.setState({
                errMsg:"ceci n'est pas une adresse email valide"
            })
        }

        /* if mail is valid */
        else{
            /* post data */
            axios.post('/subscribe-to-newsletter',{
                mail:this.state.mail
            })
            /* Catch server response deny */
            .catch((err)=>{
                this.setState({
                    errMsg:"email déja enregistré"
                })
            })
            /* response  */
            .then((r)=>{
                if(r !== undefined){
                    this.setState({
                        mail:'',
                        successMsg:r.data
                    })
                }
            })
        }
    }

    /* Hide all alert on footer */
    handleAlertHide=()=>{
        this.setState({
            errMsg:null,
            successMsg:null
        })
    }

  render() {
    const { errMsg , successMsg , mail } = this.state
    const { handleAlertHide , handleSubscrition } = this
    return (
        <footer className="footer_area p_120">

            <div className="container">

                {/* 
                    diplay error messages
                */
                
                this.state.errMsg!==null?
                    <ErrorAlert 
                        msg={errMsg}
                        click={handleAlertHide}
                    />:<span></span>
                }    

                {/* 
                    display success message
                */
                this.state.successMsg!==null?
                    <SuccessAlert 
                        msg={successMsg}
                        click={handleAlertHide} 
                    />:<span></span>    
                }  

                
                <div className="row footer_inner">
                    <div className="col-lg-5 col-sm-6">
                        <aside className="f_widget ab_widget">
                            <div className="f_title">
                                <h3>L'inspiration</h3>
                            </div>
                            <p>Certaines personnes n’aiment pas le changement, mais il faut adopter le changement si la seule alternative est la catastrophe.<br/>
                            -Elon Musk</p>
                        </aside>
                    </div>
                    <div className="col-lg-5 col-sm-6">
                        <aside className="f_widget news_widget">
                            <div className="f_title">
                                <h3>Newsletter</h3>
                            </div>
                            <p>Envie de connaitre mes nouveauté ou d'être informé des dernière découvertes en matière d'optimisation de la croissance?</p>
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
                                        <button onClick={handleSubscrition} className="btn sub-btn">
                                            <i className="fas fa-envelope"></i>
                                        </button>	
                                    </div>				
                                    <div className="mt-10 info"></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-2">
                        <aside className="f_widget social_widget">
                            <div className="f_title">
                                <h3>Me Suivre</h3>
                            </div>
                            <p>Soyons plus sociale</p>
                            <ul className="list">
                                <li><a target="blank" href="https://www.facebook.com/yoannfortr"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a target="blank" href="https://www.instagram.com/yonna__r/?hl=fr"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/yoann-fort-91b516155/"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </footer>

    )
  }
}
