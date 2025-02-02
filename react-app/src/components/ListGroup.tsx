import { useState } from "react";

// { items: [], heading: string}
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    
    const message = items.length === 0 ? <p>No item Found</p> : null;

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {message}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
