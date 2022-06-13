// component libraries
import { Route } from 'react-router-dom';

// page components
import Index from '../pages/Index';
import Show from '../pages/Show';

const Main = (props) => {
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
