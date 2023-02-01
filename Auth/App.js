import React from 'react';
import {AuthProvider} from './Navigation/AuthContext';
import AppNav from './Navigation';

const App = () => {
  return <AuthProvider><AppNav /></AuthProvider>;
};

export default App;
