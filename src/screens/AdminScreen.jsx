import useFetch from "../hooks/useFetch";

function AdminScreen() {

    const {data, loading, error, text} = useFetch("appUser");

    if(loading) return <div>Loading ...</div>
    if(error) {
        console.log(error, text);
        return <div>Error ! </div>
    }

    return ( <>
        <h1>AdminScreen</h1>
        {data && data.map((item, i) => <div key={i}>{item.pseudo}</div>)}
    </> );
}

export default AdminScreen;