// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  buttonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome </h1>
        <p className="greet">Thank you! Happy Learning</p>
        <button type="button" className="subButton" onClick={this.onSubscribe}>
          {this.buttonText()}
        </button>
      </div>
    )
  }
}

export default Welcome
