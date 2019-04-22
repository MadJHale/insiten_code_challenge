import React from 'react';
import AddNewTarget from '../containers/AddNewTarget';
import TargetList from '../containers/TargetList';
// import './App.css';

const handleNewTarget = values => {
  console.log(values);
};

const App = () => (
  <div className="InsitenApp">
    <AddNewTarget onSubmit={handleNewTarget} />
    <TargetList />
  </div>
)

export default App;
