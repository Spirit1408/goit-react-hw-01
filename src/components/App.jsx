import "./App.css";
import Profile from "./Profile/Profile";
import user from "../json/userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../json/friendsData.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../json/transactionData.json";

function App() {
	return (
		<>
			<Profile
				name={user.username}
				tag={user.tag}
				image={user.avatar}
				location={user.location}
				stats={user.stats}
			/>

			<FriendList friends={friends} />

			<TransactionHistory items={transactions} />
		</>
	);
}

export default App;
