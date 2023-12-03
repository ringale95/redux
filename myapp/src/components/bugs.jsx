import React, { useContext, useEffect, useState } from 'react';
import StoreContext from '../context/context';
import { loadBugs } from '../store/bugs';

const Bugs = () => {
    const context = useContext(StoreContext);
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const store = context;

        // Subscribe to changes in the store
        const unsubscribe = store.subscribe(() => {
            const bugsInStore = store.getState().entities.bugs.list;
            setBugs(bugsInStore);
        });

        // Dispatch the action to load bugs
        store.dispatch(loadBugs());

        // Cleanup the subscription when the component unmounts
        return () => {
            unsubscribe();
        };
    }, [context, bugs]);

    return (
        <div>
            {/* Render the bugs from the component state */}
            {bugs.map(bug => (
                <div key={bug.id}>{`${bug.id} - ${bug.description}`}</div>
            ))}
        </div>
    );
}

export default Bugs;
