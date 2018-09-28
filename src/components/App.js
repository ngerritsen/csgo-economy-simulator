import React from 'react';

import BuyMenuContainer from '../containers/BuyMenuContainer';
import BuyStatusContainer from '../containers/BuyStatusContainer';
import SideSelectorContainer from '../containers/SideSelectorContainer';

const App = () => (
  <div className="section">
    <div className="container is-fluid is-widescreen">
      <h1 className="title is-4">CS:GO Economy Simulator</h1>
      <div className="columns">
        <div className="column is-8">
          <SideSelectorContainer />
          <BuyMenuContainer />
        </div>
        <div className="column is-4">
          <BuyStatusContainer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
