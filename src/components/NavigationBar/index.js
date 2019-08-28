import { connect } from 'react-redux';

import { destroySession } from '../../services/sessions';

import NavigationBar from './NavigationBar';

const mapStateToProps = ({ user }) => ({ user: user });

export default connect(mapStateToProps, {
    destroySession
})(NavigationBar);
