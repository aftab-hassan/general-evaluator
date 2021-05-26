import React, {useState} from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";

import Lightbox from "react-image-lightbox";

import LifeEvent from './LifeEvent';
import LightBoxWrapper from "./LightBoxWrapper";

import './App.css';

const images = [
  [
    "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/school/orange.jpg?raw=true",
    // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/school/9th.jpeg?raw=true",
    // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/school/10th.jpeg?raw=true",
    "https://raw.githubusercontent.com/aftab-hassan/image-share/master/9th.jpeg",
    "https://raw.githubusercontent.com/aftab-hassan/image-share/master/10th.jpeg",
    "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/school/trophies.jpeg?raw=true",
    "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/school/trophies2.jpeg?raw=true",
    "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/school/headboy.jpeg?raw=true",
  ],// School
  [],// Undergrad - First year
  [],// Undergrad - Following years
  [
    "https://raw.githubusercontent.com/aftab-hassan/image-share/master/67.png"
    // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/67.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/68.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/69.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/70.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/71.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/76.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/77.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/78.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/79.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/80.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/80-2.png?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/100.jpg?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/101.jpg?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/102.jpg?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/103.jpg?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/104.jpg?raw=true",
  // "https://github.com/aftab-hassan/challenge-conversation/blob/main/public/university-of-washington/105.jpg?raw=true"
],// University of Washington
  [],// University of Washington - Tailend
  ["https://github.com/aftab-hassan/challenge-conversation/blob/main/public/microsoft/IMG_0029.jpeg?raw=true"],// Starting at Microsoft
  [],//Azure - IoT
  []//Now
];


const data = {
  labels: ["School", "Undergrad-1st year", "Undergrad-foll years", "UW", "End of UW", "Job offers", "Azure", "Now", "Now 2"],
  datasets: [
    {
      label: "First dataset",
      data: [1, -1, -0.5, 1, 0, 1, -1, 0, 0],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.1,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 5,
      pointRadius: 5,
      pointHitRadius: 150
    }
  ]
};

export default function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [clickedTooltip, setClickedTooltip] = useState(0);

  function setSetShowLightBoxToFalse () {
    setShowLightBox(false);
  }

  function getImagesArray() {
    switch(clickedTooltip) {
      case 0:
        return 
    }
  }

  const lineOptions = {
    animation: {
      duration: 0
    },
    onClick: (e, element) => {
      if (element.length > 0) {
        var ind = element[0]._index;
        // alert("helo" + ind);
        // return (
        //   <Lightbox
        //     mainSrc={"http://placekitten.com/4000/3000"}
        //     onCloseRequest={() => {}}
        //   />
        // );
        setClickedTooltip(ind);
        setShowLightBox(true);
      }
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false,
      displayColors: true
    },
    // pointRadius: 1,
    // pointHitRadius: 10,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            display: false
          }
        },
        // {
        //   scaleLabel: {
        //     display: false,
        //     labelString: 'X text'
        //   }
        // }
      ],
      yAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            // display: false,
          }
        }
      ]
    }
  };
  
  return (
    <>
      <div className="title">
        My Life
      </div>

      <div className="App">
        <Line options={lineOptions} data={data} />
      </div>

      {/* {showLightBox && <Lightbox
        mainSrc={"http://placekitten.com/4000/3000"}
        onCloseRequest={() => {setShowLightBox(false)}}
      />} */}
      
      {showLightBox && <LightBoxWrapper
        images={images[clickedTooltip]}
        setSetShowLightBoxToFalse={setSetShowLightBoxToFalse}
        // onCloseRequest={() => {setShowLightBox(false)}}
        />}

      <div style={{position: "fixed", top: 60, left: 50}}>
        <LifeEvent title="School"/>
      </div>
      <div style={{position: "fixed", top: 895, left: 160}}>
        <LifeEvent title="Undergrad - First year"/>
      </div>
      <div style={{position: "fixed", top: 715, left: 350}}>
        <LifeEvent title="Undergrad - Following years"/>
      </div>
      <div style={{position: "fixed", top: 60, left: 500}}>
        <LifeEvent title="University of Washington"/>
      </div>
      <div style={{position: "fixed", top: 505, left: 700}}>
        <LifeEvent title="University of Washington - Tailend"/>
      </div>
      <div style={{position: "fixed", top: 60, left: 930}}>
        <LifeEvent title="Starting at Microsoft"/>
      </div>
      <div style={{position: "fixed", top: 895, left: 1250}}>
        <LifeEvent title="Azure - IoT"/>
      </div>
      <div style={{position: "fixed", top: 515, left: 1450}}>
        <LifeEvent title="Now"/>
      </div>

      <div className="xAxisTitle">
        {/* <LifeEvent title="Life event"/> */}
        Life event
      </div>

      <div className="yAxisTitle">
        {/* <span style={{marginLeft: 10}}>&#8592;</span> */}
        Comfort level
      </div>
    </>
  );
}

// useState cannot be called at the top level: duh! cuz, it has to inside a function
// import React, {useState} from 'react'
// const [name, setName] = useState('aftab')

// export default function, not export function
// function() not function
// props in a functional component : export default function LightBoxWrapper(props: ILightBoxWrapperProps) {
