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
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Home, {
            localVue
        });
    });

    it('updateLastVisit', () => {
        const stub = jest.fn();
        wrapper.vm.dbRef = {
            set: stub
        };

        wrapper.vm.updateLastVisit();

        expect(stub).toHaveBeenCalled();
    });

    it('calculateTimeSpend', () => {
        const spy = jest.spyOn(global, 'String');
        wrapper.vm.lastLogin = 1611085228420;

        wrapper.vm.calculateTimeSpend();

        expect(spy).toHaveBeenCalledTimes(4);
    });

    it('configInterval', () => {
        const stub = jest.fn();
        wrapper.vm.lastLogin = 1611085228420;
        wrapper.vm.calculateTimeSpend = stub;

        jest.useFakeTimers();

        wrapper.vm.configInterval(1611085228420);

        expect(wrapper.vm.lastLogin).toBe(1611085228420);
        expect(setInterval).toHaveBeenCalled();
    });
});
