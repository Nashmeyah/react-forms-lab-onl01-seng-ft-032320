import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: 0,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length,
    });
  };

  render() {
    let remaining = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <p>{remaining} characters remaining</p>
        <input
          type="text"
          name="message"
          id="message"
          maxLength={280}
          value={this.state.message}
          onChange={(e) => this.handleInput(e)}
        />
      </div>
    );
  }
}

export default TwitterMessage;
