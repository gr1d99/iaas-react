import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { destroySession } from '../../services/sessions';

import withAuthentication from "../HOCs/withAuthentication";
import NavigationBar from './NavigationBar';

const mapStateToProps = ({ user }) => ({ user: user });

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ destroySession }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(NavigationBar));
