// src/App.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
    const [parentState, setParentState] = useState('Hello from Parent!');

    return (
        <div className="App">
            <h1>Sample React App</h1>
            <ChildComponent message={parentState} />
        </div>
    );
}

export default App;

