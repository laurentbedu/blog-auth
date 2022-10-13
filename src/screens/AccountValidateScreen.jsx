import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


function AccountValidateScreen() {

    const token = useParams('token');
    console.log(token);
    
    const {data, loading} = useFetch("auth/validate", {
        method:"POST",
        body:JSON.stringify(token)
    })

    if(loading){
        return "Veuillez patienter ..."
    }
    if(!data.result){
        return "Votre inscription n'a pas pu être validée, envoyez une nouvelle demande";
    }

    return (<>
        {data.result && 
            <div>
                <div>login : {data.login}</div> 
                <div>pseudo : {data.pseudo}</div>
                
            </div>
         }
    </>)
}

export default AccountValidateScreen;