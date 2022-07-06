import React from "react";

class MessageView extends React.Component {
    render() {
        const message = this.props.message;

        return(
            <div className="message">
                <div className="field">
                    <span className="label">From: </span>
                    <span className="value">{message.from}</span>
                </div>
                <div className="field">
                    <span className="label">Status: </span>
                    <span className="value">{message.status}</span>
                </div>
                <div className="field content">
                    <span className="label">Message: </span>
                    <span className="value">{message.content}</span>
                </div>
            </div>
        )
    }
}

export default MessageView;