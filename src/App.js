import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
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
    
    {/* If the first value is higher then second add a point to the first value, if second is higher add point to second value */}
    if (firstValue > secondValue) {
      itemsCopy[firstIndex].score++;
    } else {
      itemsCopy[secondIndex].score++;
    }

    {/* If the points are equals for both items add a point to both values */}
    if (firstValue == secondValue) {
      itemsCopy[firstIndex].score++;
    }

    {/* Adding Sorting to the Table */}
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
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <h1><span className="blue">&lt;</span><span className="blue">&gt;</span> <span className="yellow"> Table Score </span></h1>
    
    <table className="container">
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

    {/* Bootstrap modal for openening the score inputs */}
    <div className="position-relative" >
      <br />
      <br />
    <Button className="position-absolute bottom-0 start-50 translate-middle-x" variant="secondary" onClick={handleShow} > Submit a score </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Enter Score </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" >
              <input type="text" disabled value={items[firstIndex].name} />
              <input type="number" value={firstValue} onChange={handleFirstInputChange} /> 
              <input type="text" disabled value={items[secondIndex].name} />
              <input type="number" value={secondValue} onChange={handleSecondInputChange} />
            </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={firstValue === "" || secondValue === "" || disabled} > Submit </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  </div>
  );
}

export default App;