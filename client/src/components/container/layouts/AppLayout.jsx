
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

function AppLayout( { children, title } ) {
  return (
    <div>
      <div className="btn-toolbar">
        <Helmet title={'Training'} />
        <h1>Training</h1>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
}

export default connect(
  state => ({

  }),
)(AppLayout);
