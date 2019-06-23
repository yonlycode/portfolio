import React from "react";
import ReactDOM from 'react-dom';
import Welcome from "./Welcome";


it('render presentation component without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
    ReactDOM.unmountComponentAtNode(div);
});



 