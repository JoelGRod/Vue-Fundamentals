import { shallowMount, mount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';

describe('Indesicion Component', () => {

    let wrapper; // Wrapper
    let clgSpy; // Spy
    // Mock - IMPORTANT EXAMPLE!
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image:  'https://yesno.wtf/assets/yes/2.gif'
        })
    }));
    // LifeCycle
    beforeEach(() => {

        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');

        jest.clearAllMocks(); // Restart everything

    });

    // SnapShot
    test('should match with the snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot();

    });

    // Spy & Mocks
    test('write something in the input without ? character shouldn\'t show anything (console.log)', async () => {

        // Arrange -> wrapper
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer'); // Spy
        // Act
        const input = wrapper.find('input');
        await input.setValue('Hello World');
        // Assert
        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(0);

    });

    // Spy & Mocks - We need a fetch mock here
    test('write ? shold run getAnswer', async () => {

        // Arrange
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer'); // Spy
        // Act
        const input = wrapper.find('input');
        await input.setValue('Hello Word?');
        // Assert
        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(1);

    });

    // Fetch Mock, simulates api response
    test('test on getAnswer', async () => {

        // Arrange - Wrapper, Fetch Mock
        // Act
        await wrapper.vm.getAnswer();
        const img = wrapper.find('img');
        // Assert
        expect( img.exists() ).toBeTruthy();
        expect( wrapper.vm.answer ).toBe('Si');
        expect( wrapper.vm.image ).toBe('https://yesno.wtf/assets/yes/2.gif');

    });

    test('test on getAnswer - API fails', () => {

    });
});