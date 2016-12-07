
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

});
