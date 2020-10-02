import React from 'react';
import Web from './pages/web';
import Mobile from './pages/mobile';

import { isMobile } from 'react-device-detect';


function App() {

  if (isMobile) {
    return (
      <Mobile />
    );
  } else {
    return (
      // <Web />
      <Mobile />
    );
  }
}

export default App;
