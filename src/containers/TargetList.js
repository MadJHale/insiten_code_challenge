import { connect } from 'react-redux';
import TargetList from '../components/TargetListTable';
import { Field, reduxForm, formValueSelector } from 'redux-form';

const selector = formValueSelector('acquisitionTarget');

const mapStateToProps = state => ({
  targets: state.targets
});


const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetList)