import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Repos from '../components/Repos';
import * as ReposActions from '../actions/repos';

function mapStateToProps(state) {
  return {
    repos: state.repos,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReposActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Repos);
