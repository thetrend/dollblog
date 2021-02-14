import { Fragment, useEffect } from 'react';

const AdminLayout = () => {
  useEffect(() => {
    document.body.classList.add('admin-ui');

    return (
      document.body.classList.remove('admin-ui')
    )
  }, []);
  return (
    <Fragment>
      <h1>This will be the Admin UI</h1>
    </Fragment>
  )
};

export default AdminLayout;