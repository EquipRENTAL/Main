import React, { Component } from "react";
// import React, { Component } from "react";
import io from "socket.io-client";



// class App extends Component
class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io("localhost:3001");

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        this.socket.on('RECEIVE_MESSAGELOG', (messageLog) => {
            
            this.setState({
                messages: messageLog,
            });
        });

        const addMessage = data => {
            console.log("This is data: " + data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log("This.state.messages = " + this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit("SEND_MESSAGE", {
                author: this.state.username,
                message: this.state.message
            });
            console.log("This is messageLOG", this.state.messages);
            console.log("this is message just sent", this.state.message);
            this.setState({ message: "" })
        }
    }




    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">EquipRent Messenger</div>
                                <hr />
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div key={message.key}>{message.author}: {message.message}
                                            
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>



                            <div className="card-footer">
                                <div className="col-6">
                        
                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                        

                                {/* <br /> */}
                           
                                <textarea type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                           
                                {/* <br /> */}
                                {/* <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button> */}
                                
                                </div>

                                <div className="col-3">
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;