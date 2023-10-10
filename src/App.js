import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Navbar from './components/Navbar';

function App() {
 return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route path="/add" component={AddTask} />
          <Route path="/edit/:id" component={EditTask} />
        </Switch>
      </div>
    </Router>
 );
}

export default App;