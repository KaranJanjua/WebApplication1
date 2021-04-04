import React from "react";
import CardItems from "./CardItems";
import { Links } from "react-router-dom";
import "./Card.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Lookouts!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="./Images/Star_gazing.jpg"
              text="Explore the universe from one of South Australia’s most popular coastal destinations."
              label="Star Gazing"
              path="/services"
            />
            <CardItems
              src="./Images/Beache.jpg"
              text="Some of the most beautiful beaches in Australia can be found on Yorke Peninsula. 
              Whether you are searching for a quiet secluded cove with wide sandy beaches, 
              or like to base yourself  in a bustling beachside town, there is something for everyone"
              label="Beach"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="./Images/Light_house.jpg"
              text="Coastal landscapes with rugged cliffs and sandy beaches provide the backdrop of Dhilba Guuranda-Innes National Park"
              label="History"
              path="/services"
            />
            <CardItems
              src="./Images/Sunset.jpg"
              text="Yorke Peninsula not only gives you the option of seeing the sunrise over water every
               morning but because it averages a mere 40 kilometres from one side to the other,
               it’s also possible to watch the sun sink into the water every evening."
              label="Sunset"
              path="/services"
            />
            <CardItems
              src="./Images/Wonder.jpg"
              text="With an array of attractions ranging from fishing and swimming to farmers’ markets and distilleries,
              the Yorke Peninsula is the holiday destination that keeps on giving."
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
