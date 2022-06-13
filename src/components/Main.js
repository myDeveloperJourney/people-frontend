// react core functionality (hooks)
import { useState, useEffect } from 'react';

// component libraries
import { Route } from 'react-router-dom';

// page components
import Index from '../pages/Index';
import Show from '../pages/Show';

const Main = (props) => {
    
    const [ people, setPeople ] = useState(null);

    const URL = 'http://localhost:4000/people';

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    useEffect(() => {
        getPeople();
    }, []);

    return (
        <main>
            <Route exact path="/">
                <Index />
            </Route>
            <Route path="/people/:id" render={(rp) => (
                <Show {...rp} />
            )} />
        </main>
    );
};

export default Main;
