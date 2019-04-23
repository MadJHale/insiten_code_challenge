import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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



class TargetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [],
            targets: []
        };
    }
    // componentDidUpdate(prevProps) {
    //     if(prevProps.form !== this.props.form){
    //         let newData = Object.assign({}, this.props.targets);
    //         newData.push(this.props.form.acquisitionTarget.values)
    //         this.setState({
    //             targets: newData
    //         });
    //     }
    // }

    // handleTargetDelete(targetId) {
    //     debugger;
    //     let index = this.state.targets.indexOf(targetId);
    //     this.state.targets.splice(index, 1);
    //     this.setState(this.state.targets);
    // }
    render() {
        return (
            <div className="TargetList">
                <Table data={this.props.targets}>
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
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.targets.map(target => (
                            <TableRow key={target.id}>
                                <TableCell component="th" scope="row">{target.name}</TableCell>
                                <TableCell>{target.description}</TableCell>
                                <TableCell>{target.location}</TableCell>
                                <TableCell>{target.status}</TableCell>
                                <TableCell>{target.contact}</TableCell>
                                <TableCell>{target.valuation}</TableCell>
                                <TableCell>{target.liquidity}</TableCell>
                                <TableCell>{target.EBITDA}</TableCell>
                                <TableCell><button onClick={this.props.editItem(target.id)}>Edit</button><button onClick={this.props.deleteItem(target.id)}>Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
// const TargetList = ({ targets, editTarget, deleteTarget }) => (
//     <div className="TargetList">
//         <Table data={targets}>
//             <TableHead>
//                 <TableRow>
//                     <TableCell>Company Name</TableCell>
//                     <TableCell>Description</TableCell>
//                     <TableCell>Location</TableCell>
//                     <TableCell>Acquisition Status</TableCell>
//                     <TableCell>Key Contact</TableCell>
//                     <TableCell>Financial Valuation</TableCell>
//                     <TableCell>Company Liquidity</TableCell>
//                     <TableCell>Company EBITDA</TableCell>
//                     <TableCell></TableCell>
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {targets.map(target => (
//                     <TableRow key={target.id}>
//                         <TableCell component="th" scope="row">{target.name}</TableCell>
//                         <TableCell>{target.description}</TableCell>
//                         <TableCell>{target.location}</TableCell>
//                         <TableCell>{target.status}</TableCell>
//                         <TableCell>{target.contact}</TableCell>
//                         <TableCell>{target.valuation}</TableCell>
//                         <TableCell>{target.liquidity}</TableCell>
//                         <TableCell>{target.EBITDA}</TableCell>
//                         <TableCell><button onClick={editTarget}>Edit</button><button onClick={deleteTarget}>Delete</button></TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     </div>
// );

export default withStyles(styles)(TargetList);