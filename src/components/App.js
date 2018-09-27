import React from 'react';

import ItemSelectorContainer from '../containers/ItemSelectorContainer';
import RoundsContainer from '../containers/RoundsContainer';

const App = () => (
  <div>
    <div className="hero is-small is-light">
      <div className="hero-body">
        <div className="container is-fluid is-widescreen">
          <h1 className="title is-4">CS:GO Economy Simulator</h1>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container is-fluid is-widescreen">
        <div className="columns">
          <div className="column is-8">
            <ItemSelectorContainer />
          </div>
          <div className="column is-4">
            <RoundsContainer />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
