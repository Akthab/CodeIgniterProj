// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/reduxStore';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <Provider store={reduxStore}>
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    </Provider>
);

export default App;
