import { ReactNode } from "react"

interface Props {
    children?: ReactNode,
    colSpan?: number,
    isHeader?: boolean,
    rowSpan?: number
}

const TableCell = (props: Props) => {
    const {
        children,
        colSpan,
        isHeader = false,
        rowSpan
    } = props;

    let attributes = {};
    if (colSpan) { attributes = { colSpan: colSpan, ...attributes } }
    if (rowSpan) { attributes = { rowSpan: rowSpan, ...attributes } }

    const cell = isHeader
        ? <th {...attributes}>{children}</th>
        : <td {...attributes}>{children}</td>

    return cell
}

export default TableCell