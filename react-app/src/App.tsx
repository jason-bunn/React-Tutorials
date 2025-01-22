import Alert from "./components/Alert";

function App() {
    //let items = ["New York", "Atlanta", "Chicago", "San Francisco", "Tokyo"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    return (
        <div>
           <Alert />
        </div>
    );
}

export default App;
