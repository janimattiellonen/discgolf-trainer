
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

function AppLayout( { children } ) {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
