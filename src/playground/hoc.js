// higher order component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>Thie info is: {props.info}</p>
  </div>
);

const requireAuthentication = WrappedComponent => props => {
  if (!props.isAuthenticated) {
    return <div>You are not authenticated</div>
  }
  return <WrappedComponent {...props} />;
}

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));
