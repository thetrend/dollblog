import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './components/scss/app.scss';
import Layout from './components/blog/Layout';
import AdminLayout from './components/admin/AdminLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route exact path="/admin">
          <AdminLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
