import { Children, isValidElement, ReactNode } from "react"

import TableHeader from "./TableHeader";

interface Props {
    children: ReactNode
}

const Table = (props: Props) => {
    const {
        children
    } = props;

    const header = Children.toArray(children).find(
        (child) => isValidElement(child) && child.type === TableHeader
    );

    return <table>
        {header}
        
        { children }
    </table>
}

export default Table