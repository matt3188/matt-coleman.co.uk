import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import About from '@/views/About.vue';
import router from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('renders a child component via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
    });

    router.push('/about');
    await wrapper.vm.$nextTick();

    expect(wrapper.find(About).exists()).toBe(true);
  });
});
