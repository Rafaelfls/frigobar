import React from 'react';
import Web from './pages/web';

import { isMobile } from 'react-device-detect';


function App() {
  
  if (isMobile) {
    return (
      <div> This content is unavailable on mobile</div>
    );
  } else {  
    return (
        <Web/>        
    );
  }
}

export default App;
