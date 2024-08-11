import "./App.css";
import Profile from "./Profile";
import "./Profile.css";
import * as data from "./userData.json";

function App() {
	return (
		<>
			<Profile
				name={data.username}
				tag={data.tag}
				image={data.avatar}
				location={data.location}
				stats={data.stats}
			/>
		</>
	);
}

export default App;
