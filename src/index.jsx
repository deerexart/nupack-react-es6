import React, {propTypes} from 'react';
import ReactDOM from 'react-dom';

 class CalculateMarkup extends React.Component {
  // equivellent var counter = react.creatClass({})
  constructor(props){
    //must pass in props ^^^^
    super(props); // super GIVES US ACCESS TO 'THIS' !! *****
    this.state = {initialinput:0, withJobMarkup:0};
    this.handleInitialCost = this.handleInitialCost.bind(this);


  }
  handleInitialCost(e) {
    console.log('e', e.target.value)
    this.setState({
      initialinput: e.target.value,
      withJobMarkup: parseFloat(e.target.value) * (5/100) + parseFloat(e.target.value)
     })

  }
  calculateTotal(value){
    // console.log('value', value);
    var jobMarkup = this.state.withJobMarkup;
    var foodMarkup = this.state.isFood;

    var calculateTotal = jobMarkup
    this.setState({
      total: calculateTotal
    })
  }
  // in ES6 YOU HAVE TO USE render()  render: function() will not work

//ES6 to create a function () => this.click() .  (parameters) => funciton you want
// use constructor for binding, unless you need to pass a value.
render(){
  return(
    <div className="markup-calculator">
    <label >Initial Cost!! </label>
    <input id="initial-cost" type="number" onChange={ this.handleInitialCost } />
    <h3>With Job Rate: {parseFloat(this.state.initialinput) * (5/100) + parseFloat(this.state.initialinput)}</h3>

    <ul>

    </ul>
    <button onClick={ () => this.calculateTotal(this) }>Calculate</button>

    <h3>Final Cost Estimate: {this.state.total}</h3>
    </div>
  )
}
}
// Counter.defaultProps = { initialInput:0, isFood:0, isPharm:0, isElectronic:0 }
// Counter.defaultProps = { initialInput:0, isFood:false, isPharm:false, isElectronics:false }
// Counter.propTypes = {isFood:React.PropTypes.bool, isPharm:React.PropTypes.bool, isElectronic:React.PropTypes.bool }


// export default  CalculateMarkup;

//
//
ReactDOM.render(
  <CalculateMarkup  />,
  document.getElementById('app')
)
