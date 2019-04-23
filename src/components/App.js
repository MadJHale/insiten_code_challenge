import React from 'react';
import AddNewTarget from '../containers/AddNewTarget';
import TargetList from '../containers/TargetList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';

const handleNewTarget = values => {
  console.log(values);
};

const App = () => (
  <div className="InsitenApp">
    <header>
      <Paper elevation={1}>
        <Typography variant="h3" component="h1">Insiten Potential Acquisition Target Companies</Typography>
      </Paper>
    </header>
    <AddNewTarget onSubmit={handleNewTarget} />
    <TargetList />
  </div>
)

export default App;
