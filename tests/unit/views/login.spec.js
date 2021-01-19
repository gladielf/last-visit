import { createLocalVue, shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import LvButton from '@/components/lv-button.vue';
import LvInput from '@/components/lv-input.vue';

const localVue = createLocalVue();

localVue.component('lv-button', LvButton);
localVue.component('lv-input', LvInput);

describe('Login - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Login, {
            localVue
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('Login - computed', () => {
    it('disableButton ', () => {
        const wrapper = shallowMount(Login, {
            localVue
        });

        wrapper.vm.email = '123456';
        wrapper.vm.password = '123456';
        wrapper.vm.errors = {
            items: []
        };

        expect(wrapper.vm.disableButton).toBeFalsy();
    });
});

describe('Login - methods', () => {
    it.skip('login', async () => {
        const mockRouter = {
            push: jest.fn()
        };

        const wrapper = shallowMount(Login, {
            localVue,
            mocks: {
                $router: mockRouter
            },
            global: {
                firebase: {}
            }
        });

        await wrapper.vm.login();

        expect(mockRouter.push).toHaveBeenCalledWith('Home');
    });

    it('setValue', () => {
        const wrapper = shallowMount(Login, {
            localVue
        });

        wrapper.vm.setValue('foo@mail.com', 'email');

        expect(wrapper.vm.email).toBe('foo@mail.com');
    });
});
