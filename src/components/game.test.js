import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  let seedGuesses = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedGuesses.push(`${i}`);
        }
  });
  let correctAnswer = Math.floor(Math.random()*100 + 1);
  let testFeedback = "this is some feedback";


  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  // it('Renders the GuessSection', () => {
  //   const wrapper = shallow(<Game />);
  //   const instance = wrapper.instance();
  //
  // });
  //
  // it('Renders the GuessCount', () => {
  //   const wrapper = shallow(<Game />);
  //
  // });
  //
  // it('Renders the GuessList', () => {
  //   const wrapper = shallow(<Game />);
  //
  // });
  //
  // it('Resets state for new game', () => {
  //
  // });

  //when there is a guess the feedback is updated in state
  // it('Can add a guess', () => {
  //   const wrapper = shallow(<Game />);
  //   const instance = wrapper.instance();
  //   instance.guess(36);
  //   console.log("guess", wrapper.state);
  //   expect(wrapper.state('guesses').length.toEqual(1));
  //   // expect(wrapper.state('guesses').toEqual(testGuesses));
  // });

  //when there is a guess it is added to guess[] in state

  //the guess val is checked if it equals correctAnswer

  //the correct Answer doesn't change after a guess


});
