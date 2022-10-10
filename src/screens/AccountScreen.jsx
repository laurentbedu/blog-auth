import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { AuthContext } from '../contexts/AuthContext';

function AccountScreen() {

    const { auth } = useContext(AuthContext);
    const {data, loading, error, text} = useFetch("appUser/" + auth.id);
   
    if(loading) return <div>Loading ...</div>
    if(error) {
        console.log(error, text);
        return <div>Error ! </div>
    }

    return ( <>
        <h1>AccountScreen</h1>
        {data && data.pseudo}
    </> );
}

export default AccountScreen;