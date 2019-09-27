import { connect } from 'react-redux';

import NavigationBar from './NavigationBar';

import { destroySession } from '../../services/sessions';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { destroySession })(NavigationBar);
