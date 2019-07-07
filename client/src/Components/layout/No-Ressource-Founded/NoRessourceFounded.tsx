import React from 'react'
import { Spinner } from 'reactstrap';


const NoRessourceFounded = () =>{
    
    let content = <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"300px",flexDirection:"column"}}>
        <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />{' '}
        <br></br>
        <h2> <strong>Désolé, nous n'avons pas trouvées les ressources demandées sur le serveur </strong> </h2>
    </div>;

    return content;
}
export default NoRessourceFounded;

