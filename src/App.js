import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [items, setItems] = useState([
    { position: 1, name: 'Item1', score: 0 },
    { position: 2, name: 'Item2', score: 0 },
    { position: 3, name: 'Item3', score: 0 },
    { position: 4, name: 'Item4', score: 0 },
    { position: 5, name: 'Item5', score: 0 },
    { position: 6, name: 'Item6', score: 0 },
  ]);

  const [firstIndex, setFirstIndex] = useState(0)
  const [secondIndex, setSecondIndex] = useState(1)

  const [firstValue, setFirstValue] = useState("")
  const [secondValue, setSecondValue] = useState("")
  const [disabled, setDisabled] = useState(false)

  const handleFirstInputChange = (e) => {
    setFirstValue(e.target.value)
  }

  const handleSecondInputChange = (e) => {
    setSecondValue(e.target.value)
  }

  const handleSubmit = () => {
    let itemsCopy = JSON.parse(JSON.stringify(items));
    
    if (firstValue > secondValue) {
      itemsCopy[firstIndex].score++;
    } else {
      itemsCopy[secondIndex].score++;
    }

    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    setItems(itemsCopy)

    setFirstValue("");
    setSecondValue("");

    let firstIndexCopy = firstIndex;
    let secondIndexCopy = secondIndex;

    if (firstIndex === 4 && secondIndex === 5) {
      setDisabled(true)
      return;
    }

    setSecondIndex(secondIndexCopy + 1);
    if (secondIndexCopy === 5) {
      setFirstIndex(firstIndexCopy + 1)
      setSecondIndex(firstIndexCopy + 2)
    }
  }

  return (
    <div>
    <h1><span class="blue">&lt;</span><span class="blue">&gt;</span> <span class="yellow">Responsive</span></h1>
    
    <table class="container">
      <thead>
        <tr>
          <th><h1>Position</h1></th>
          <th><h1>Name</h1></th>
          <th><h1>Score</h1></th>
        </tr>
      </thead>
      <tbody>
      {
            items.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
              </tr>
            ))
          }
      </tbody>

    </table>
    </div>
    
  );
}

export default App;