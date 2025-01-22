import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    //let items = ["New York", "Atlanta", "Chicago", "San Francisco", "Tokyo"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    return (
        <div>
            <Alert>
                <span>Hello World</span>
            </Alert>
            <Button onClick={() => console.log("Clicked")}>MyButton</Button>
        </div>
    );
}

export default App;
