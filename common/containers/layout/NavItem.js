import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LocationActions from '../../actions/location';

import NavItem from '../../components/layout/NavItem';

function mapStateToProps(state) {
  return {location: state.location}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LocationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
