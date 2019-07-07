import React, { useState  } from 'react'
import axios from 'axios'
import ErrorAlert from '../../stateless/alerts/ErrorAlert';
import SuccessAlert from '../../stateless/alerts/SuccessAlert';
import ConfirmationModal from '../../modals/Confirmation-Modal/ConfirmationModal';
import { isValidMail } from '../../../utils/isValidMail';
import { useHttpPost } from '../../../Hooks/useHttp';
import { Spinner } from 'reactstrap';

const Newsletter = ():React.FunctionComponentElement<{}>  =>{

    const [mail , setMail]= useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg , setSuccessMsg] = useState("")
    const [isValidationNeeded, setIsValidationNeeded] = useState(false)


    const [ isSending, sendRequest, response, error] = useHttpPost('/subscribe-to-newsletter', {mail:mail},[mail],)
    /* post data to server*/

    const handleSubscrition=()=>{
        try{
            sendRequest()
            .then(()=>{
                setMail("");
                setSuccessMsg(response.value);
            })
        }catch(e){
            setErrorMsg(error);
        }
        handleCloseModal();
    }


    /* handle click on modal close button */
    const handleCloseModal=()=>{
        setIsValidationNeeded(false)
    }

    /* Check mail's validity then open confirmation modal */
    const handleCheckForm=()=>{
        isValidMail(mail)?setIsValidationNeeded(true):setErrorMsg("ceci n'est pas une adresse email valide")
    }

    /* Hide all alert when click on them */
    const handleAlertHide=()=>{
        setErrorMsg("");
        setSuccessMsg("");
    }

    let content = <>
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
                
                errorMsg!==""?
                <ErrorAlert 
                    msg={errorMsg}
                    click={handleAlertHide}
                />:<span></span>
            }    

            {
                /* 
                    display success message
                */
                successMsg!==""?
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
                            onChange={(e)=>setMail(e.target.value)}
                            placeholder="Entrez votre adresse email" 
                            type="email"> 
                        </input>
                        <button onClick={handleCheckForm} className="btn sub-btn">
                            {isSending?<Spinner/>:<i className="fas fa-envelope"></i>}
                        </button>	
                    </div>				
                    <div className="mt-10 info"></div>
                </div>
            </div>
        </aside>
    </>

    return content

}


export default  Newsletter








