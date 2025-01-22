import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const TableFooter = (props: Props) => {
    const {
        children
    } = props;

    return <tfoot>
        { children }
    </tfoot>
}

export default TableFooter