
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



});
