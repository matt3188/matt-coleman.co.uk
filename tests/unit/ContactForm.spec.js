import { mount } from '@vue/test-utils'
import { ContactForm } from '@/components'

describe('ContactForm.vue', () => {
  const factory = propsData => {
    return mount(ContactForm, {
      propsData: {
        formData: {
          submitBtn: {
            send: 'Send',
            submitting: 'Sending...'
          },
          formFields: [
            {
              id: 'name',
              label: 'Your Name',
              type: 'text',
              name: 'name',
              required: true
            }
          ],
          ...propsData
        }
      }
    })
  }

  it('renders props.btnLabel when passed', () => {
    const btnLabel = 'Send'
    const wrapper = factory()
    const button = wrapper.find('.btn__standard')

    expect(button.text()).toMatch(btnLabel)
  })
})
