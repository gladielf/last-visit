import { shallowMount } from '@vue/test-utils';
import LvCounter from '@/components/lv-counter.vue';

describe('LvCounter - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(LvCounter);
        expect(wrapper.element).toMatchSnapshot();
    });
});
