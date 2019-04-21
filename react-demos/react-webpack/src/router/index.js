import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

function Index() {
  return <h2>Home</h2>;
}

function About({ match }) {
  console.log(`TCL: About -> match`, match);
  return <h2>About</h2>;
}

function Users({ match }) {
  console.log(`TCL: Users -> match`, match);
  return <h2>Users</h2>;
}
