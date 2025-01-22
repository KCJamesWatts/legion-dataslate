import { Children, isValidElement, ReactNode } from "react"

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

import css from './Table.module.scss'

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

    const body = Children.toArray(children).find(
        (child) => isValidElement(child) && child.type === TableBody
    );

    const footer = Children.toArray(children).find(
        (child) => isValidElement(child) && child.type === TableFooter
    );

    return <table>
        { header }
        
        { body }

        { footer }
    </table>
}

export default Table