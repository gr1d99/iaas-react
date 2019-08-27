import { connect } from 'react-redux';

import { destroySession } from '../../services/sessions';

import withAuthentication from "../HOCs/withAuthentication";
import NavigationBar from './NavigationBar';

const mapStateToProps = ({ user }) => ({ user: user });

export default connect(mapStateToProps, {
    destroySession
})(withAuthentication(NavigationBar));
