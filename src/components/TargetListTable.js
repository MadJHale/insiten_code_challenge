import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

  const columns = [
    { title: 'Company Name', field: 'name' },
    { title: 'Description', field: 'description' },
    { title: 'Location', field: 'location' },
    { title: 'Acquisition Status', field: 'status' },
    { title: 'Key Contact', field: 'contact' },
    { title: 'Financial Valuation', field: 'valuation', type: 'numeric' },
    { title: 'Company Liquidity', field: 'liquidity', type: 'numeric' },
    { title: 'Company EBITDA', field: 'EBITDA', type: 'numeric' },
];
const TargetListTable = ({targets, editItem, deleteItem, updateItem, delTarget}) => {
    debugger;
    return (
    <div className="TargetList">
        <Typography variant="h5" component="h2" color="inherit">Potential Target Companies</Typography>
        <Paper elevation={10}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Acquisition Status</TableCell>
                        <TableCell>Key Contact</TableCell>
                        <TableCell align="right">Financial Valuation</TableCell>
                        <TableCell align="right">Company Liquidity</TableCell>
                        <TableCell align="right">Company EBITDA</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {targets.filter(target => target.editData !== true).map(target => (
                        <TableRow key={target.id}>
                            <TableCell component="th" scope="row">{target.name}</TableCell>
                            <TableCell>{target.description}</TableCell>
                            <TableCell>{target.location}</TableCell>
                            <TableCell>{target.status}</TableCell>
                            <TableCell>{target.contact}</TableCell>
                            <TableCell align="right">{target.valuation}</TableCell>
                            <TableCell align="right">{target.liquidity}</TableCell>
                            <TableCell align="right">{target.EBITDA}</TableCell>
                            <TableCell><Button size="small" variant="contained" onClick={editItem(target)}>Edit</Button><Button size="small" variant="contained" onClick={deleteItem(target.id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    
    <MaterialTable
        title="Basic Sorting Preview"
        columns={columns}
        data={targets.filter(target => target.editData !== true)}
        editable={{
            // onRowAdd: newData =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       {
            //         debugger;
            //         const data = targets;
            //         data.push(newData);
            //         this.setState({ data }, () => resolve());
            //       }
            //       resolve()
            //     }, 1000)
            //   }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                      debugger;
                    //   updateItem(newData, oldData);
                    const data = targets;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve()
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    debugger;
                    // let data = targets;
                    // const index = data.indexOf(oldData);
                    // data.splice(index, 1);
                    // this.setState({ data }, () => resolve());
                    delTarget(oldData, () => resolve());
                  }
                  resolve()
                }, 1000)
              }),
            }}
        options={{
            sorting: true
        }}
        actions={[
            // {
            //   tooltip: 'Remove All Selected Users',
            //   icon: 'delete',
            //   onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
            // }
          ]}
    /></div>
)}

export default withStyles(styles)(TargetListTable);