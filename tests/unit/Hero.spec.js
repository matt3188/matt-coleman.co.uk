import { shallowMount } from '@vue/test-utils';
import Hero from '@/components/Hero.vue';

describe('Hero.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Matt Coleman';
    const wrapper = shallowMount(Hero, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });

  it('renders props.btnLabel when passed', () => {
    const btnLabel = 'Hire me';
    const wrapper = shallowMount(Hero, {
      propsData: { btnLabel },
    });
    expect(wrapper.text()).toMatch(btnLabel);
  });

  it('props.typedList receives an array', () => {
    const expected = [
      "I'm a Front-end Developer",
      "I'm a Cyling enthusiast",
      "I'm a Coffee lover",
      "I'm a collector of LEGO",
    ];
    expect(expect.arrayContaining(expected));
  });
});
