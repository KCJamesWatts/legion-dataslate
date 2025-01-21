import { Outlet } from 'react-router';
import css from './AppContainer.module.scss';

const AppContainer = () => {
    return <div className={css.appContainer}>
        <Outlet />
    </div>
}

export default AppContainer;