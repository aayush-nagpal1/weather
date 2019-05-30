import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

describe("App Component", ()=>{
  it('Application renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
