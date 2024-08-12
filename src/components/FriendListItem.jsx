import style from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
	return (
		<div>
			<img
				className={style.friendAvatar}
				src={avatar}
				alt="Avatar"
				width={48}
			/>
			<p className={style.friendName}>{name}</p>
			<p className={isOnline === "Offline" ? style.offline : style.online}>
				{isOnline}
			</p>
		</div>
	);
}
