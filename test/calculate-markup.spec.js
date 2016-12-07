
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import  CalculateMarkup  from '../src/index.jsx';



describe('<CalculateMarkup />', () => {
// Does component exist?
  it('should have 1 div with class markup-calculator', () => {
      const wrapper = mount(<CalculateMarkup/>);
      expect(wrapper.find('.markup-calculator').length).to.equal(1);

  });
/* checking existence annd if things are defined within component */

it('should have 9 children', () => {
    const wrapper = mount(<CalculateMarkup/>);
    expect(wrapper.children().length).to.equal(9);

});
it('should have 3 checkboxes', () =>{
  const wrapper = mount(<CalculateMarkup />);
  expect(wrapper.find('input[type="checkbox"]')).to.have.length(3);
});
it('should have 2 number inputs', ()=>{
  const wrapper = mount(<CalculateMarkup />);
  expect(wrapper.find('input[type="number"]')).to.have.length(2);
});
it('should have a button', () => {
  const wrapper = mount(<CalculateMarkup />);
  expect(wrapper.find('button')).to.have.length(1);
});
it('should have three h3 tags', () => {
  const wrapper = mount(<CalculateMarkup/>);
  expect(wrapper.find('h3')).to.have.length(3);
})
it('should have states for inital input, withJobMarkup, noOfPeople', () =>{
  const wrapper = mount(<CalculateMarkup/>);
  expect(wrapper.state().initialinput).to.be.defined;
  expect(wrapper.state().withJobMarkup).to.be.defined;
  expect(wrapper.state().noOfPeople).to.be.defined;

});

/* ###################### STATE AND FUNCTION TESTS ###################### */

// Testing package price fn/state before any markups
it('Test initial input state.. should be 0, on change should be 1299.99', ()=>{

    const wrapper = shallow(<CalculateMarkup  />);

    const initialInputSimulate = wrapper.find('input#initial-cost');
    const changedInput = {target:{value:1299.99}};

    //actually simulate event
    expect(wrapper.state('initialinput')).to.equal(0);
    initialInputSimulate.simulate('change', changedInput);
    expect(wrapper.state('initialinput')).to.equal(1299.99);

});

/* TESTS handleInitialCost  */

it('Should start off as 0, handleInitialCost should update jobmark up based on updated input value ', ()=>{
  //getting all the things
  const wrapper = shallow(<CalculateMarkup  />);

  const handleInitialCost = wrapper.find('input#initial-cost')
  const updatePeople = {target:{value:3}};

  const updateInput = {target:{value:1299.99}};

  //making sure initial input is 0
  expect(wrapper.state('initialinput')).to.equal(0 );
  expect(wrapper.state('withJobMarkup')).to.equal(0);
  // wrapper.instance().calculateTotal(updateTotal);
  wrapper.instance().handleInitialCost(updateInput);
  expect(wrapper.state('initialinput')).to.equal(1299.99);
  expect(wrapper.state('withJobMarkup')).to.equal(1364.9895);

})

//Testing number of people handler update & initial state
it('Test handlePeople state.. should be 0, on change should be 3', ()=>{

    const wrapper = shallow(<CalculateMarkup  />);
    const handlePeople = wrapper.find('input#people');
    const changedInput = {target:{value:3}};

    //actually simulate event
    expect(wrapper.state('people')).to.equal(0);
    handlePeople.simulate('change', changedInput);
    expect(wrapper.state('people')).to.equal(3);
});

/* ####################### CHECKBOX TESTS #######################   */


    it('should be defined for isFood, isPharm, isElectronics', () =>{
        const wrapper = mount(<CalculateMarkup/>);
      expect(wrapper.state().isFood).to.be.defined;
      expect(wrapper.state().isElectronics).to.be.defined;
      expect(wrapper.state().isPharm).to.be.defined;
    })
    it('should have states of false for isFood, isPharm, isElectronics', () =>{
        const wrapper = mount(<CalculateMarkup/>);
      expect(wrapper.state().isFood).to.be.false;
      expect(wrapper.state().isElectronics).to.be.false;
      expect(wrapper.state().isPharm).to.be.false;
      expect(wrapper.find('#food')).to.have.length(1);
    })

/* Checkbox breakdown tests */

/// FOOD BOOLEAN & STATE CHECK
// this test now seems redundant... seeing as the next one uses simulate and this just sets a new state...
// Keep it for reference anyway because it's the only place I use 'let' in these tests

    it('testing food checkbox boolean to be false, and update to be true ... ', () =>{
    const wrapper = mount(<CalculateMarkup />);
    wrapper.setState({ isFood: false });

   let checkbox = wrapper.find({ type: 'checkbox', id:'food' });
   expect(checkbox.props().checked).to.equal(false);
   wrapper.setState({isFood:true});
   expect(checkbox.props().checked).to.equal(true);

});
it('checking check box function & states: isFood:false/isFoodMarkup:0.  When state of isFood===true, isFoodMarkup===.13', ()=>{

    const wrapper = shallow(<CalculateMarkup  />);
    const foodCheck = wrapper.find('input#food');
    const isFoodCheckState = wrapper.state('isFood');
    const isFoodMarkupState = wrapper.state('isFoodMarkup');
    const changeFoodState = true;

    expect(isFoodCheckState).to.equal(false);
    expect(isFoodMarkupState).to.equal(0);

    foodCheck.simulate('change', changeFoodState);

    expect(wrapper.state('isFood')).to.equal(true);
    expect(wrapper.state('isFoodMarkup')).to.equal(.13);

});

/// Moving on to ELECTRONICS
/// ELECTRONICS BOOLEAN & STATE CHECKS
it('testing electronics checkbox boolean is false, and updating state to true... ', () =>{
const wrapper = mount(<CalculateMarkup />);
wrapper.setState({ isElectronics: false });

let checkbox = wrapper.find({ type: 'checkbox', id:'electronic' });

expect(checkbox.props().checked).to.equal(false);

wrapper.setState({isElectronics:true});
expect(checkbox.props().checked).to.equal(true);

});

it('checking check box function & states: isElectronics:false/isElectronicsMarkup:0.  When state of isElectronics===true, isElectronicsMarkup===.02', ()=>{

    const wrapper = shallow(<CalculateMarkup  />);
    const electronicCheck = wrapper.find('input#electronic');
    const isElectronicsCheckState = wrapper.state('isElectronics');
    const isElectronicsMarkupState = wrapper.state('isElectronicsMarkup');
    const changeElectronicState = true;

    expect(isElectronicsCheckState).to.equal(false);
    expect(isElectronicsMarkupState).to.equal(0);

    electronicCheck.simulate('change', changeElectronicState);

    expect(wrapper.state('isElectronics')).to.equal(true);
    expect(wrapper.state('isElectronicsMarkup')).to.equal(.02);

});

/// PHARM BOOLEAN & STATE CHECKS
it('SHOULD BE FALSE testing pharm checkbox boolean initial state ... ', () =>{
const wrapper = mount(<CalculateMarkup />);
wrapper.setState({ isPharm: false });

let checkbox = wrapper.find({ type: 'checkbox', id:'pharm' });

expect(checkbox.props().checked).to.equal(false);

wrapper.setState({isPharm:true});
expect(checkbox.props().checked).to.equal(true);

});

it('checking check box function & states: isPharm:false/isPharmMarkup:0.  When state of isPharm===true, isPharmMarkup===.0.075', ()=>{

    const wrapper = shallow(<CalculateMarkup  />);
    const pharmCheck = wrapper.find('input#pharm');
    const isPharmCheckState = wrapper.state('isPharm');
    const isPharmMarkupState = wrapper.state('isPharmMarkup');
    const changePharmState = true;

    expect(isPharmCheckState).to.equal(false);
    expect(isPharmMarkupState).to.equal(0);

    pharmCheck.simulate('change', changePharmState);

    expect(wrapper.state('isPharm')).to.equal(true);
    expect(wrapper.state('isPharmMarkup')).to.equal(.075);

});
/* CALCULATE TOTAL TESTS (there are 4) */

/* TESTING CALCULATE TOTAL : TEST 1 -> Just package price w/ jobMarkup */


it('USING INITIAL INPUT & JOB MARK UP ... Should get initial states, which are all 0, then update initial state, and job mark up value (based on initial state) ', ()=>{
  //getting all the things
  const wrapper = mount(<CalculateMarkup  />);
  const totalCheck = wrapper.state('total');
  const allStates = wrapper.state();
  const calculateTotal = wrapper.find('calculateTotal');
  const initialInputValue = wrapper.find('input#initial-cost');
  const initialInputUpdate = {target:{value:1299.99}};
  const calculateTotalButton = wrapper.find('button#calculate');
  const updateTotal = wrapper.setState({
    initialinput: 0,
    withJobMarkup:0

  })

  //making sure initial input is 0
  expect(wrapper.state('initialinput')).to.equal(0);
  //making sure witih job mark up is 0, because it's value depends on initial input
  expect(wrapper.state('withJobMarkup')).to.equal(0);
  //update initial input
  initialInputValue.simulate('change', initialInputUpdate);
  expect(wrapper.state('initialinput')).to.equal(1299.99);
  // update total with updated job markup value
  wrapper.instance().calculateTotal(updateTotal);
  // All bool === false & people === 0
  //Therefore total should just be job markup + initial input
  expect(wrapper.state('total')).to.equal(1364.9895);


})

/* TESTING CALCULATE TOTAL: TEST 2 */

it('USING NUMBER OF PEOPLE... Should update total with people markup cost when input is changed ', ()=>{
  //getting all the things
  const wrapper = mount(<CalculateMarkup  />);
  const totalCheck = wrapper.state('total');
  const allStates = wrapper.state();
  const calculateTotal = wrapper.find('calculateTotal');
  const peopleInput = wrapper.find('input#people');
  const handleInitialCost = wrapper.find('input#initial-cost')
  const updatePeople = {target:{value:3}};
  const updateTotal = wrapper.setState({
    initialinput: 0,
  })
  const updateInput = {target:{value:1299.99}};

  //making sure initial input is 0
  expect(wrapper.state('initialinput')).to.equal(0 );
  wrapper.instance().handleInitialCost(updateInput);
  expect(wrapper.state('withJobMarkup')).to.equal(1364.9895);

})
/* TESTING CALCULATE TOTAL TEST: 3 */
it('USING JUST ISFOOD BOOLEAN... Should update total with food markup cost when isFood is true ', ()=>{
  //getting all the things
  const wrapper = mount(<CalculateMarkup  />);
  const totalCheck = wrapper.state('total');
  const allStates = wrapper.state();
  const calculateTotal = wrapper.find('calculateTotal');
  // const testState = wrapper.find('initialinput', 5);
  const updateTotal = wrapper.setState({
    initialinput: 1299.99,
    withJobMarkup:1364.9895,
    people: 3

  })
  const foodCheck = wrapper.find('input#food');
  const isFoodCheckState = wrapper.state('isFood');
  const isFoodMarkupState = wrapper.state('isFoodMarkup');
  const changeFoodState = true;

  //making sure initial input is 0
  expect(wrapper.state('initialinput')).to.equal(1299.99);
  wrapper.instance().calculateTotal(updateTotal);
  expect(wrapper.state('withJobMarkup')).to.equal(1364.9895);
  expect(wrapper.state('total')).to.equal(1414.1291219999998);
  expect(wrapper.state('isFood')).to.equal(false);

  // all state values have been set to what I want now

  foodCheck.simulate('change', changeFoodState);
  expect(wrapper.state('isFood')).to.equal(true);
  wrapper.instance().calculateTotal(updateTotal);
  expect(wrapper.state('total')).to.equal(1591.5777569999998);


})

});
