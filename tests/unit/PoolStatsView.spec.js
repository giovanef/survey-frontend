import { shallowMount } from '@vue/test-utils';

import PoolStats from '@/views/PoolStats.vue';

describe('PoolStatsView', () => {
  const $route = {
    params: {
      id: 1,
    },
  };

  const build = () => {
    const wrapper = shallowMount(PoolStats, {
      mocks: {
        $route,
      },
    });

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
