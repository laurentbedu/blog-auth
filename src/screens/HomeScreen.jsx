import useFetch from "../hooks/useFetch";

function HomeScreen() {

    const {data, loading, error, text} = useFetch("theme");

    if(loading) return <div>Loading ...</div>
    if(error) {
        console.log(error, text);
        return <div>Error ! </div>
    }
    
    return ( <>
        <h1>HomeScreen</h1>
        {data && data.map((item, i) => <div key={i}>{item.title}</div>)}
    </> );
}

export default HomeScreen;