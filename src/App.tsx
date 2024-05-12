import "./App.css";
import { Observer } from "./homework/1";
import RequestComponent from "./homework/2";
import { FormComponent } from "./homework/3";
import { ComponentApp } from "./homework/4";

function App() {
	return (
		<div className="App">
			<Observer
				onContentEndVisible={() => console.log("Content end is visible")}
			>
				<p>Observer component content here</p>
			</Observer>
			<RequestComponent />
			<FormComponent />
			<ComponentApp />
		</div>
	);
}

export default App;