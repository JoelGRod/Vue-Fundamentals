import {shallowMount, mount} from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {
    test('It must match the snapshot', () => {

        // Arrange
        const wrapper = shallowMount( Counter );

        // Act

        // Assert
        expect( wrapper.html() ).toMatchSnapshot();
    })
})