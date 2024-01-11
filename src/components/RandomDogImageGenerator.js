import { useState} from "react"
import './ChuckNorrisRandomFact.css';

const RandomDogImageGenerator = () => {
const [image, setImage] = useState();
const [error, setError] = useState();

const fetchImage = () =>{    
fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {fetch(data.url)
    .then((img)=> img.blob())
    .then((imgBlob) => URL.createObjectURL(imgBlob)) 
    .then((imageObjectURL) => setImage(imageObjectURL))
})
    .catch((error)=>{setError(error)});
    //todo print out error to website
};

return (
<div>
    <h1>Here's your dog image...</h1>
    <div>
    <img src={image} alt="icons" />
    </div>
    <button onClick={fetchImage}>Click here to get a dog!</button>
    <p>{error}</p>
</div>
    );

}
export default RandomDogImageGenerator;