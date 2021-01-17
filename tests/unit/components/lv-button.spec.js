import { shallowMount } from '@vue/test-utils';
import LvButton from '@/components/lv-button.vue';

describe('LvButton - Snapshot', () => {
    it('Snapshot', () => {
        const text = 'my button';
        const wrapper = shallowMount(LvButton, {
            propsData: { text }
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('LvButton - methods', () => {
    it('btnClicked', async () => {
        const text = 'my button';
        const wrapper = shallowMount(LvButton, {
            propsData: { text }
        });

        wrapper.vm.btnClicked();

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('lv-button-clicked')).toBeTruthy();
    });
});
