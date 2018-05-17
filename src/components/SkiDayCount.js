import React, {Component} from 'react'
var createReactClass = require('create-react-class');
import '../stylesheets/ui.scss'


export class Nakul extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isHide: true};

        this.show = this.show.bind(this);
    }

    show() {
        this.setState(prevState => ({
            isHide: !prevState.isHide
          }));
    }

    render() {
        return (
            <button onClick = {this.show}>
                {this.state.isHide ? 'Hide' : 'Show'}
            </button>
        );
    }
}

export class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }


export const SkiDayCount = createReactClass({
    render() {
        return (
            <div className="ski-day-count">
                <div class="total-days">
                    <span> {this.props.totalDays} </span>
                </div>
                <div class="powder-days">
                    <span> {this.props.powderDays} </span>
                </div>
                <div class="backcountry-days">
                    <span> {this.props.backcountryDays} </span>
                </div>
            </div>
        )
    }
})