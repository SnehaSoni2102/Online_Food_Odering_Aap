import { useState } from "react";

export const Users = (props) => {
    const[count]=useState(0);
    const[count1]=useState(0);
    return (
      <div className="user-card">
        <h3>count:{count}</h3>
        <h3>count1:{count1}</h3>
        <h3>Name: {props.name}</h3>
        <h3>Location: Uttar Pradesh</h3>
        <h3>City: Rasra</h3>
      </div>
    );
  };