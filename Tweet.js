class Tweet extends React.Component {

    render() {
      const tweetStyle = {
        backgroundColor: this.props.bgColor,
      }
      return (
        <div style={tweetStyle}>
          <p>
          Username:{this.props.username} 
          <br />
          Name:{this.props.name} 
          <br />
          Date:{this.props.date}
          <br /> 
          Message:{this.props.message}
          </p>
        </div>
      );
    }
  }