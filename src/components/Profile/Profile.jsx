import profile from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
	return (
		<div className={profile.profileWindow}>
			<div className={profile.userMain}>
				<img className={profile.avatar} src={image} alt="User avatar" />
				<p className={profile.userName}>{name}</p>
				<p className={profile.userInfo}>@{tag}</p>
				<p className={profile.userInfo}>{location}</p>
			</div>

			<ul className={profile.profileInfoList}>
				<li className={profile.profileInfoItem}>
					<span className={profile.profileInfoTitle}>Followers</span>
					<span className={profile.profileInfoData}>{stats.followers}</span>
				</li>

				<li className={profile.profileInfoItem}>
					<span className={profile.profileInfoTitle}>Views</span>
					<span className={profile.profileInfoData}>{stats.views}</span>
				</li>

				<li className={profile.profileInfoItem}>
					<span className={profile.profileInfoTitle}>Likes</span>
					<span className={profile.profileInfoData}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
}
