import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Home from '../pages/Home'

function RouterTest() {
  return (
    <Router>
      <AppBar position="static">
          <Typography variant="h6">
            My App
          </Typography>
          <nav>
            <ul>
              <li>
                <Link to="/" element={<Home/>} >Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
      </AppBar>
      <Container>
        {/* <Routes>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact Page</h1>
          </Route>
        </Routes> */}
      </Container>
    </Router>
  );
}

export default RouterTest;
