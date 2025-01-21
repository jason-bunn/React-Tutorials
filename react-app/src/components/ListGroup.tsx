function ListGroup() {
    let items = ["New York", "Atlanta", "Chicago", "San Francisco", "Tokyo"];
    items = [];
    const message = items.length === 0 ? <p>No item Found</p> : null;

    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
