import "./App.css";
import Profile from "./Profile";
import user from "./userData.json";
import FriendList from "./FriendList";
import friends from "./friendsData.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "./transactionData.json";

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
