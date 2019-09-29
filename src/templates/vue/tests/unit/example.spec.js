import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import Home from '@/pages/Home.vue';
import routes from '@/routes/routesList';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({ routes });

describe('App', () => {
  const wrapper = mount(App, { localVue, router });

  it('renders a root component via routing', () => {
    expect(wrapper.find(Home).exists()).to.equal(true);
  });
  it('renders content of root path component', () => {
    expect(wrapper.text()).to.include('Welcome to Your Vue.js App');
  });
  it('has basic home route', () => {
    expect(wrapper.find('.router-link-active').text()).to.include('Home');
  });
});
