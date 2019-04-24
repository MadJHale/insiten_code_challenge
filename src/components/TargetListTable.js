import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactDataGrid from 'react-data-grid';
import { Editors } from "react-data-grid-addons";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

  const { DropDownEditor } = Editors;

  const statustypes = [
      {id: "researching", value: "Researching"},
      {id: "pending", value: "Pending Approval"},
      {id: "approved", value: "Approved"},
      {id: "declined", value: "Declined"}
  ]

const StatusTypeEditor = <DropDownEditor options={statustypes} />;

const columns = [
    { key: "id", name: "Id" },
    { key: "name", name: "Company Name", editable: true },
    { key: "description", name: "Description", editable: true },
    { key: "location", name: "Location", editable: true },
    { key: "status", name: "Acquisition Status", editor: StatusTypeEditor },
    { key: "contact", name: "Key Contact", editable: true },
    { key: "valuation", name: "Financial Valuation", editable: true },
    { key: "liquidity", name: "Company Liquidity", editable: true },
    { key: "EBITDA", name: "Company EBITDA", editable: true }
];

const nameCellActions = [
    {
      icon: <span className="glyphicon glyphicon-remove" />,
      callback: () => {
        alert("Deleting");
      }
    }
  ];

const getCellActions = (column, row) => {
    const cellActions = {
        id: nameCellActions
    };
    return cellActions[column.key];
  }

const TargetListTable = ({targets, deleteItem, onGridRowUpdate}) => {
    return (
    <div className="TargetList">
        <Typography variant="h5" component="h2" color="inherit">Potential Target Companies</Typography>
        <Typography variant="subheading" component="h2" color="inherit">This table is for editing</Typography>
        <ReactDataGrid
            columns={columns}
            rowGetter={i => targets[i]}
            rowsCount={targets.length}
            enableCellSelect={true}
            onGridRowsUpdated={onGridRowUpdate}
            getCellActions={getCellActions}
        />
        <Typography variant="subheading" component="h2" color="inherit">This table is for deleting</Typography>
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
                            <TableCell><Button size="small" variant="contained" onClick={deleteItem(target.id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>

    </div>
)}

export default withStyles(styles)(TargetListTable);