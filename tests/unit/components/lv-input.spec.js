import { shallowMount } from '@vue/test-utils';
import LvInput from '@/components/lv-input.vue';

const directives = {
    validate: jest.fn()
};

describe('LvInput - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(LvInput, {
            directives
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('LvInput - methods', () => {
    it('btnClicked', async () => {
        const wrapper = shallowMount(LvInput, {
            directives
        });

        wrapper.vm.emitValue({
            target: {
                value: 'foo'
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('lv-input-value')).toBeTruthy();
    });
});
