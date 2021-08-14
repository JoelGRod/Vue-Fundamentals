import { shallowMount, mount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';

describe('Indesicion Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( Indecision );
    });

    test('should match with the snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot();
    });

    test('write something in the input shouldn\'t show anything (console.log)', () => {
        
    });

    test('write ? shold run fetch request', () => {
        
    });

    test('test on getAnswer', () => {
        
    });

    test('test on getAnswer - API fails', () => {
        
    });
});