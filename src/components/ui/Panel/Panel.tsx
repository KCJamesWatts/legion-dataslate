import React from 'react';
import { PanelDepth } from './PanelDepth.ts';
import css from './Panel.module.scss';

type Props = {
    children?: React.ReactNode;
    panelDepth?: PanelDepth;
}

const Panel = (props: Props) => {
    const {
        children = [],
        panelDepth = PanelDepth.depth16
    } = props;

    return <div className={[css.panel, css[panelDepth.toString()]].join(' ')}>
        {children}
    </div>
}

export default Panel;