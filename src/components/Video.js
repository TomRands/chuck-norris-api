import video from "../media/cowboy.mp4";

export default function Video() {
      return (
        <div>
          <video src={video} width="600" height="300" controls="controls" muted='muted' autoplay="true" loop="true"/>
        </div> 
      );
    }