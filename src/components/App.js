import React from "react";
import './../styles/App.css';
import ItemDetails from "./ItemDetail";
import ItemList from "./ItemList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' }
]

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
          <Router>
            <Routes>
              <Route path="/" element={<ItemList  items={Items} />}></Route>
              <Route path="item/:id" element={<ItemDetails items={Items}/> }></Route>
            </Routes>
          </Router>
    </div>
  )
}

export default App