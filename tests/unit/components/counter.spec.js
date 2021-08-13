import { shallowMount, mount } from '@vue/test-utils';
import Counter from '@/components/Counter';

// Test suite
describe('Counter Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    // Test I - Snapshot: save exact image of the component / test subject
    // test('It must match the snapshot', () => {
    //     // Arrange
    //     const wrapper = shallowMount( Counter );
    //     // Act
    //     // Assert
    //     expect( wrapper.html() ).toMatchSnapshot();
    //
    // })

    // Test II - Check an HTML element value
    test('h2 by default is Counter', () => {

        // Arrange
        // const wrapper = shallowMount(Counter);
        // Act
        expect(wrapper.find('h2').exists()).toBeTruthy();
        const h2Value = wrapper.find('h2').text();
        // Assert
        expect(h2Value).toBe('Counter');

    })

    // Test III - Check an Html especific element 
    // value from multiple ones using Data Attributes
    test('p counter default value must be 1', () => {

        // Arrange
        // const wrapper = shallowMount(Counter);
        // Act
        // const pValues = wrapper.findAll('p')
        //     .map(( pElement => pElement.text() ));
        const value = wrapper.find('[test-id="counter"]').text();
        // Assert
        // expect(pValues[1]).toBe("1");
        expect(value).toBe("1");

    })

    // Test IV - Check an Html especific element 
    // HTML Content from multiple ones using Data Attributes
    test('p expression must have the correct HTML', () => {

        // Arrange
        // const wrapper = shallowMount(Counter);
        // Act
        const pExpHtml = wrapper.find('[test-id="expressionCounter"]').html();
        // Assert
        expect(pExpHtml).toBe("<p test-id=\"expressionCounter\">1 <sup>2</sup> = 1</p>");

    })

    // Test V - Simulate Events
    test('should increase and decrease by one or by two the counter value', async () => {

        // Arrange
        // const wrapper = shallowMount(Counter);
        // Act
        const increaseBtn = wrapper.find('[test-id="increaseBtn"]');
        await increaseBtn.trigger('click');
        let counterValue = wrapper
            .find('[test-id="counter"]')
            .text();
        // Assert
        expect(counterValue).toBe('2');

        // Act
        const decreaseBtn = wrapper.find('[test-id="decreaseBtn"]');
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        counterValue = wrapper
            .find('[test-id="counter"]')
            .text();
        // Assert
        expect(counterValue).toBe('0');

    });

    // Test VI - Simulate Events Refactorized
    test('should increase 3 times and decrease 2 times the counter value', async () => {

        // Arrange
        // const wrapper = shallowMount(Counter);
        // Act
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button');
        
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const counterValue = wrapper
            .find('[test-id="counter"]')
            .text();
        // Assert
        expect(counterValue).toBe('2');

    });

})