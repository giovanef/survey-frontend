import { shallowMount } from '@vue/test-utils';

import Home from '@/views/Home.vue';

describe('HomeView', () => {
  const build = () => {
    const wrapper = shallowMount(Home, {
      stubs: ['router-link'],
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
