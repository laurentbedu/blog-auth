import useFetch from "../hooks/useFetch";

function LoggedScreen() { 
    
    const {data, loading, error, text} = useFetch("comment");

    if(loading) return <div>Loading ...</div>
    if(error) {
        console.log(error, text);
        return <div>Error ! </div>
    }

    return ( <>
        <h1>LoggedScreen</h1>
        {data && data.map((item, i) => <div key={i}>{item.title}</div>)}
    </> );
}

export default LoggedScreen;