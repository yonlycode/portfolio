import React from "react";
import ReactDOM from 'react-dom';
import TestRenderer from "react-test-renderer";
import Footer from "./Footer";

/* const component = TestRenderer.create(<Welcome />);  
const testInstance = TestRenderer.root; */


it('render Footer without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('render contain social media list', () => {
    const component = TestRenderer.create(<Footer/>)
    component.root.findByProps({className: "f_widget social_widget"})
    component.root.findByProps({className: "f_widget social_widget"})
    
});



 