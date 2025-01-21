import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const TableHeader = (props: Props) => {
    const {
        children
    } = props;

    return <thead>
        { children }
    </thead>
}

export default TableHeader