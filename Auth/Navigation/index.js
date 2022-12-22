import React from 'react';
import Route from './Route';
import {useState, useEffect} from 'react';
import {WithSplashScreen} from '../Screens/SplashScreen';

const Providers = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <Route />
    </WithSplashScreen>
  );
};
export default Providers;
