import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
	return (
		<ul className={style.friendList}>
			{friends.map((friend) => (
				<li className={style.friendItem} key={friend.id}>
					<FriendListItem
						avatar={friend.avatar}
						name={friend.name}
						isOnline={friend.isOnline ? "Online" : "Offline"}
					/>
				</li>
			))}
		</ul>
	);
}
