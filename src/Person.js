import React from 'react';

const person = (props) => {
  return (/*<p> I'm a Person of age {Math.floor(Math.random()*30)}  years !! </p>*/
  <div className="comment">
  <a href="/" className="avatar">
    <img alt="avtar" src={props.image}/>
  </a>
  <div className="content">
    <a href="/" className="author">
       {props.name}
    </a>
    <div className="metadata">
<span className="date">Last seen On {props.date}</span>
    </div>
<div className="text">{props.jobTitle}</div>
  </div>
</div>
  );    
};


export default person;
