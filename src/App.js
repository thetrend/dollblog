import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import './components/scss/app.scss';
import Layout from './components/blog/Layout';
import AdminLayout from './components/admin/AdminLayout';

let App =() => {
  let path = window.location.pathname;
  if (path.includes('/admin')) {
    document.body.classList.remove('blog-ui');
    document.body.classList.add('admin-ui');
  } else {
    document.body.classList.remove('admin-ui');
    document.body.classList.add('blog-ui');
  }
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
