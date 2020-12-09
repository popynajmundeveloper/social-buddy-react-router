

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './PostsDetails/PostDetails';



function App() {
  
  return (
    <Router >
      
      <Switch>
      <Route path="/home">
      <Home/>
      </Route>
      <Route path="/post/:postId">
      <PostDetails></PostDetails>
      </Route>

      
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="*">
      <NoMatch/>
      </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
