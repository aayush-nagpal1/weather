import React from 'react';
import Card from './card';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';

describe("Cards and SmallCards Component  ", ()=>{
  
  it('renders Cards and Small Cards component correctly', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

