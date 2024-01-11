import ChuckNorrisRandomFact from '../components/ChuckNorrisRandomFact';
import Video from '../components/Video';
import logo from '../chuckNorris.jpg';

export default function ChuckNorrisFactGenerator(){

return(
<div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Video/>
    <ChuckNorrisRandomFact></ChuckNorrisRandomFact>
    </header>
</div>
);
}