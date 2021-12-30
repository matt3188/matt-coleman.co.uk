import { shallowMount } from '@vue/test-utils'
import { Hero } from '@/components'

describe('Hero.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Matt Coleman'
    const wrapper = shallowMount(Hero, {
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(name)
  })

  it('renders props.btnLabel when passed', () => {
    const btnLabel = 'Contact me'
    const wrapper = shallowMount(Hero, {
      propsData: { btnLabel }
    })
    expect(wrapper.text()).toMatch(btnLabel)
  })

  it('props.typedList receives an array', () => {
    const expected = [
      "I'm a Front-end Developer",
      "I'm a cycling enthusiast",
      "I'm a coffee lover",
      "I'm a collector of LEGO",
      "I'm a motorcylce rider"
  ]
    expect(expect.arrayContaining(expected))
  })
})
