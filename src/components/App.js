import React from 'react';
import AddNewTarget from '../containers/AddNewTarget';
import TargetList from '../containers/TargetList';
import Typography from '@material-ui/core/Typography';
import './App.css';

const App = () => (
    <div className="InsitenApp">
      <header>
        <Typography variant="h4" component="h2" color="inherit">Insiten Potential Acquisition Target Companies</Typography>
      </header>
      <AddNewTarget />
      <TargetList />
    </div>
)

export default App;
