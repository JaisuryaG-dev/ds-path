import React, { useState } from 'react';
import './LinkedListVisualizer.css';

function LinkedListVisualizer() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addNode = () => {
    if (inputValue.trim() === '') return;
    setList([...list, inputValue]);
    setInputValue('');
  };

  const removeNode = () => {
    const newList = [...list];
    newList.pop();
    setList(newList);
  };

  return (
    <div className="visualizer">
      <input
        type="text"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addNode}>Add Node</button>
      <button onClick={removeNode}>Remove Last Node</button>

      <div className="linked-list">
        {list.map((value, index) => (
          <div key={index} className="node">
            <span>{value}</span>
            {index < list.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkedListVisualizer;
