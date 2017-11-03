import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = configureStore();

browserHistory.listen(location => {
    // Use setTimeout to make sure this runs after React Router's own listener
    setTimeout(() => {
        if (location.action === 'POP') {
            return;
        }
        window.scrollTo(0, 0);
    });
});

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
