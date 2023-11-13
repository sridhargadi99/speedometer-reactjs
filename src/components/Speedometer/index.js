// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed + 10}))
    }
  }

  applyBrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="main-heading-style">SPEEDOMETER</h1>
          <img
            className="image-style"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="heading-style">Speed is {speed}mph</h1>
          <p className="paragraph-style">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <button
            className="button-style button-style1"
            type="button"
            onClick={this.accelerateButton}
          >
            Accelerate
          </button>
          <button
            className="button-style button-style2"
            type="button"
            onClick={this.applyBrakeButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
