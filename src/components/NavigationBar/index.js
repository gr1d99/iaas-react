import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    destroySession
} from '../../services/sessions';

import NavigationBar from './NavigationBar';

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        destroySession
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBar);
