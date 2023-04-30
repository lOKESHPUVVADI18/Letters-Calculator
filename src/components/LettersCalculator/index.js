// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lengthOfText: 0}

  onChangeInput = event => {
    this.setState({lengthOfText: event.target.value.length})
  }

  render() {
    const {lengthOfText} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onChangeInput}
                placeholder="Enter the phrase"
                type="text"
              />
            </div>
            <p className="letters-count">No.of letters: {lengthOfText}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
