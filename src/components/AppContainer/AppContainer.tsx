import { Outlet } from 'react-router';
import css from './AppContainer.module.scss';

const AppContainer = () => {
    return <div className={css.appContainer}>
        <div>AppContainer</div>

        <Outlet />
    </div>
}

export default AppContainer;