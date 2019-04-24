import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactDataGrid from 'react-data-grid';
import { Editors } from "react-data-grid-addons";

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

const TargetListTable = ({targets, onGridRowUpdate}) => {
    return (
    <div className="TargetList">
        <Typography variant="h5" component="h2" color="inherit">Potential Target Companies</Typography>
        <ReactDataGrid
            columns={columns}
            rowGetter={i => targets[i]}
            rowsCount={targets.length}
            enableCellSelect={true}
            onGridRowsUpdated={onGridRowUpdate}
            getCellActions={getCellActions}
        />

    </div>
)}

export default withStyles(styles)(TargetListTable);