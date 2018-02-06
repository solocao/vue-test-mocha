import {
  mount
} from 'vue-test-utils';
import Counter from '../src/components/Counter.js';
import expect from 'expect';
describe('Counter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Counter);
  });

  it('defaults to a count of 0', () => {
    let wrapper = mount(Counter);
    expect(wrapper.vm.count).toBe(0);
  })
  it('increment the count when the button is clicked', () => {
    let wrapper = mount(Counter);
    expect(wrapper.vm.count).toBe(0);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.count).toBe(1);
  })
  it('presents the current count', () => {
    let wrapper = mount(Counter);
    expect(wrapper.find('.count').html()).toContain(0);
  })


});