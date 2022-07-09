import React, { Component } from "react";

import MessageView from "./message-view";

class MessageList extends Component {
    state = {
        message: {
            from: 'Martha', 
            content: 'I will be traveling soon.', 
            status: 'read'
        }
    }
    render() {
        return(
            <div className="container">
                <h1>Your Messages</h1>
                <MessageView message={this.state.message} />
            </div>
        )
    }
}

export default MessageList;