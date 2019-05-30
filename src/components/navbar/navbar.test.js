import React from 'react';
import Navbar from './navbar';
import renderer from 'react-test-renderer';

describe("Navbar Component", ()=>{
  
  
  it('navbar renders correctly', () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
