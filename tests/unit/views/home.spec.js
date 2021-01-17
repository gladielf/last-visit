import { createLocalVue, shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import LvButton from '@/components/lv-button.vue';

const localVue = createLocalVue();

localVue.component('lv-button', LvButton);

describe('Home - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Home, {
            localVue
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('Home - methods', () => {
    it('logout', async () => {
        const mockRouter = {
            push: jest.fn()
        };

        const wrapper = shallowMount(Home, {
            localVue,
            mocks: {
                $router: mockRouter
            }
        });

        await wrapper.vm.logout();

        expect(mockRouter.push).toHaveBeenCalledWith('Login');
    });
});
