import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const TableBody = (props: Props) => {
    const {
        children
    } = props;

    return <tbody>
        { children }
    </tbody>
}

export default TableBody