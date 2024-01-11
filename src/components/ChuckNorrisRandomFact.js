import { useState} from "react"
import './ChuckNorrisRandomFact.css';

const ChuckNorrisRandomFact = () => {
const [fact, setFact] = useState();
const [error, setError] = useState();

const fetchFact = () =>{    
fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {setFact(data.value);
    console.log(data);
    })
    .catch((error)=>{setError(error)});
    //todo print out error to website
};

return (
<>
    <h1>Your Chuck Norris fact of the day is...</h1>
    <button onClick={fetchFact}>Click here to get a fact!</button>
    <p>{fact}</p>
    <p>{error}</p>
</>
    );

}
export default ChuckNorrisRandomFact;