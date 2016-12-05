import React, {propTypes} from 'react';
import ReactDOM from 'react-dom';

 class CalculateMarkup extends React.Component {
  // equivellent var counter = react.creatClass({})
  constructor(props){
    //must pass in props ^^^^
    super(props); // super GIVES US ACCESS TO 'THIS' !! *****
    this.state = {initialinput:0, withJobMarkup:0, people:0, isFood:false, isFoodMarkup:0};
    this.handleInitialCost = this.handleInitialCost.bind(this);
    this.handlePeople = this.handlePeople.bind(this);
    this.checkIfFood = this.checkIfFood.bind(this);


  }
  handleInitialCost(e) {
    this.setState({
      initialinput: e.target.value,
      withJobMarkup: parseFloat(e.target.value) * 0.05 + parseFloat(e.target.value)
     })

  }

  handlePeople(props){
    this.setState({ people: props.target.value});
  }

  checkIfFood(props) {
    // console.log('props food', props);
    // console.log('props.isFood', this.state.isFood);
    if(this.state.isFood === true){
      this.setState({
        isFoodMarkup: 0,
        isFood:!this.state.isFood
      })
    }
    if(this.state.isFood === false){
      this.setState({
        isFoodMarkup: 0.13,
        isFood:!this.state.isFood
      })
    }

  }

  calculateTotal(value){
    var jobMarkup = this.state.withJobMarkup;
    var peopleMarkup = this.state.people * .012 * jobMarkup ;
    var foodMarkupValue = this.state.isFoodMarkup;
    var foodMarkup = foodMarkupValue * jobMarkup;
    var calculateTotal = jobMarkup
                        +peopleMarkup
                        +foodMarkup;

    console.log('people', peopleMarkup);
    console.log('jobMarkup', jobMarkup);
    console.log('foodMarkupValue', foodMarkupValue);
    console.log('foodMarkup', foodMarkup);
    console.log('calculateTotal', calculateTotal);

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
    <h3>With Job Rate: {parseFloat(this.state.initialinput) * 0.05 + parseFloat(this.state.initialinput)}</h3>

    <ul>
      <li># of People <input type="number" onChange={ this.handlePeople } /></li>
      <li><input type="checkbox" id="food" onChange={this.checkIfFood} checked={this.state.isFood}/> Food </li>


    </ul>
    <button onClick={ () => this.calculateTotal(this) }>Calculate</button>

    <h3>Final Cost Estimate: {this.state.total}</h3>
    </div>
  )
}
}

//
//
ReactDOM.render(
  <CalculateMarkup  />,
  document.getElementById('app')
)
