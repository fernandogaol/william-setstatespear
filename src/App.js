import React, { Component } from 'react';
import PoemListPage from './PoemListPage';
import './App.css';
import PoemPage from './PoemPage';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Poem List</Link>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          <Route exact path="/" component={PoemListPage} />
          <Route path="/poem/:poemId" component={PoemPage} />
        </main>
        <footer>
          <p>© 2020. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
