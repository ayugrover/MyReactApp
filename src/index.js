import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import faker from 'faker';
import Person from './Person';
import Approvalcard from './Approvalcard';


import * as serviceWorker from './serviceWorker';

const App = () =>{
  return (
    <div className="ui container comments">
      <h2 > Blog Site </h2>
      <Approvalcard>
           <Person 
              name={faker.name.firstName()} 
              day = {faker.date.weekday()} 
              image ={faker.image.avatar()} 
              jobTitle ={faker.name.title()}/>
      </Approvalcard>
      <Approvalcard>
           <Person 
               name={faker.name.firstName()} 
               day = {faker.date.weekday()} 
               image ={faker.image.avatar()} 
               jobTitle ={faker.name.title()}/>
      </Approvalcard>
      </div>
  )
};
ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
