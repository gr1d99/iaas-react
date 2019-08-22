import React from "react";

const withAlertMessage = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            alertOptions: {
                color: "",
                alertMessage: "",
                visible: false
            },
        };

        onDismiss = () => {
            this.setState({
                alertOptions: {
                    color: "",
                    alertMessage: "",
                    visible: false
                },
            });
        };

        showAlertMessage = (options) => {
            const alertOptions = Object.assign(options, { visible: true });
            this.setState({ alertOptions })
        };

        render() {
            return <WrappedComponent { ...this.state } { ...this.props } showAlertMessage={ this.showAlertMessage } onDismissAlert={ this.onDismiss }/>;
        }
    }
};

export default withAlertMessage;
