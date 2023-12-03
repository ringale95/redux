// App.js
import React from 'react';
import Bugs from './components/bugs';
import configureStore from './store/configureStore';
import StoreContext from './context/context';

const store = configureStore();

function App() {
    return (
        <StoreContext.Provider value={store}>
            {/* Your other components */}
            <Bugs />
        </StoreContext.Provider>
    );
}

export default App;
