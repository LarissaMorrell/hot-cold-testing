import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from '../guess-form';

describe('<GuessForm />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = '63';

        var input = wrapper.instance().input;
        input.value = value;

        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
        //clear input after submit
        expect(input.value).toEqual("");
    });

});
