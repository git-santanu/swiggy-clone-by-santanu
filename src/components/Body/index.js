import React from "react";
import BodyCards from "../BodyCards";

const index = () => {
  const cardItems = [
    {
      id: 1,
      name: "Kwality",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p3ljttzcivirj1u5vfpm",
    },
    {
      id: 2,
      name: "Wow! Momo",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/04e992420a5a298e0e036b0e63a44eb5",
    },
    {
      id: 3,
      name: "The Devils Kitchen",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/870397d40571825e84fdd4a60d418c11",
    },
    {
      id: 4,
      name: "Mio Amore-The Cake Shop",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/90ac3da2963978f866177263fba805a7",
    },
    {
      id: 5,
      name: "Brojonath",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dt991fss5f2qu39krmlb",
    },
    {
      id: 6,
      name: "Raasta Cafe",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ab979bffbd658e74de650a15ca0092a3",
    },
    {
      id: 7,
      name: "New Punjabi Khalsa Hotel",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j9g8lfestnpxg4n8sqsb",
    },
    {
      id: 8,
      name: "Oven Story Pizza",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o7grj4i8nzckaqjabmke",
    },
  ];
  return (
    <>
      <div className="body">
        {/* <div className="search">Search</div> */}
        <div className="card-container">
          {cardItems.map((card, id) => {
            return (
                <BodyCards key={card.id} cardName={card.name} image={card.image}/>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default index;
