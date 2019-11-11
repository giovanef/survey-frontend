import { shallowMount } from '@vue/test-utils';

import PoolView from '@/views/PoolView.vue';

describe('PoolViewView', () => {
  const $route = {
    params: {
      id: 1,
    },
  };

  const build = () => {
    const wrapper = shallowMount(PoolView, {
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
