import {shallowMount, mount} from '@vue/test-utils';
import Counter from '@/components/Counter';

const wrapper = shallowMount( Counter );
// Test suite
describe('Counter Component', () => {
    // Test I - Snapshot: save exact image of the component / test subject
    // test('It must match the snapshot', () => {
    //     // Arrange
    //     const wrapper = shallowMount( Counter );
    //     // Act
    //     // Assert
    //     expect( wrapper.html() ).toMatchSnapshot();
    // })

    // Test II - Check an HTML element value
    test('h2 by default is Counter', () => {
        // Arrange
        const wrapper = shallowMount( Counter );
        expect(wrapper.find('h2').exists()).toBeTruthy();
        const h2Value = wrapper.find('h2').text();
        // Act
        // Assert
        expect( h2Value ).toBe('Counter');
    })

    // Test III - Check an Html especific element 
    // value from multiple ones using Data Attributes
    test('p counter default value must be 1', () => {
        // Arrange
        const wrapper = shallowMount( Counter );
        // Act
        // const pValues = wrapper.findAll('p')
        //     .map(( pElement => pElement.text() ));
        const value = wrapper.find('[data-test-id="counter"]').text();
        // Assert
        // expect(pValues[1]).toBe("1");
        expect(value).toBe("1");
    })

    // Test IV - Check an Html especific element 
    // HTML Content from multiple ones using Data Attributes
    test('p expression must have the correct HTML', () => {
        // Arrange
        // Act
        const pExpHtml = wrapper.find('[data-test-id="expressionCounter"]').html();
        // Assert
        expect(pExpHtml).toBe("<p data-test-id=\"expressionCounter\">1 <sup>2</sup> = 1</p>");
    })

})