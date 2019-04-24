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

const TargetListTable = ({targets, editItem, deleteItem}) => {
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
                        <TableCell>Financial Valuation</TableCell>
                        <TableCell>Company Liquidity</TableCell>
                        <TableCell>Company EBITDA</TableCell>
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
                            <TableCell>{target.valuation}</TableCell>
                            <TableCell>{target.liquidity}</TableCell>
                            <TableCell>{target.EBITDA}</TableCell>
                            <TableCell><Button size="small" variant="contained" onClick={editItem(target)}>Edit</Button><Button size="small" variant="contained" onClick={deleteItem(target.id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    </div>
)}

export default withStyles(styles)(TargetListTable);