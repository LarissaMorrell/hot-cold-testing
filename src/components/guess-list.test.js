import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {

  it('Renders guess box without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Renders the guess box initially', () => {
    const wrapper = shallow(<GuessList guesses={[]} />);
    expect(wrapper.hasClass('guessBox')).toEqual(true);
  });

  it('Renders the guess box with guesses', () => {
    const guesses = [23];
    const wrapper = shallow(<GuessList guesses={guesses} />);

    // expect(wrapper.contains(<ul><li>{guesses[0]}</li></ul>)).toEqual(true);
  });
});
