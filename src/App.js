import React from "react";
import "bulma/css/bulma.css"; // Import Bulma CSS first you need to install it 'npm install bulma'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

//Parent component
const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageSrc={AlexaImage}
                description="Alexa is a professional digital assistant that helps you learn about your digital skills and is made by Amazon."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana032"
                imageSrc={CortanaImage}
                description="Cortana is a professional digital assistant that is made by Microsoft" 
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" imageSrc={SiriImage} description="Siri is made by Apple and is being phased out" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
