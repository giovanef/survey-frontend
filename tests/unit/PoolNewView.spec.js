import { shallowMount } from '@vue/test-utils';

import PoolNew from '@/views/PoolNew.vue';

describe('PoolNewView', () => {
  const build = () => {
    const wrapper = shallowMount(PoolNew);

    return {
      wrapper,
    };
  };

  beforeEach(() => {});

  it('renderiza o componente', () => {
    const { wrapper } = build();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
