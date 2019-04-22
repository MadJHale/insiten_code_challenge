import { connect } from 'react-redux';
import TargetList from '../components/TargetListTable';

const mapStateToProps = state => ({
  companies: state.companies
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetList)