import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const TableRow = (props: Props) => {
    const {
        children
    } = props;

    return <tr>
        { children }
    </tr>
}

export default TableRow