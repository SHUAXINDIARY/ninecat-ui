import nSidenav from '../../packages/nSidenav';
import { mount } from '@vue/test-utils';

describe('nSidenav', () => {
  it('name should return nSidenav', () => {
    const wrapper = mount(nSidenav);
    expect(wrapper.name()).toBe('NSidenav');
  });
});
