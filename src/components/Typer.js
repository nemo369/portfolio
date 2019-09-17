import React from "react"

class Typer extends React.Component {
  _isMounted = true;
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 200,
      mounted: true,    };
  }


  componentDidMount() {
    this.handleType();
    this._isMounted = true;
    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleType = () => {
    const { dataText } = this.props
    const { isDeleting, loopNum, text, typingSpeed } = this.state
    const i = loopNum % dataText.length
    const fullText = dataText[i]

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 200,
    })

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 1000)
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      })
    }
    if (this._isMounted) {
      setTimeout(this.handleType, typingSpeed)
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.text}</span>
        <span className="blink">|</span>
      </div>
    )
  }
}

export default Typer
