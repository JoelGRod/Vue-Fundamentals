import { shallowMount, mount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';

describe('Indesicion Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( Indecision );
    });

    test('should match with the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});