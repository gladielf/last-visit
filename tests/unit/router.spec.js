import router from '@/router';
import VueRouter from 'vue-router';

describe('Router', () => {
    it('Router', () => {
        expect(router).toBeInstanceOf(VueRouter);
    });
});
