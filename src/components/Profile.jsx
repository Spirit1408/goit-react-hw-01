export default function Profile({ name, tag, location, image, stats }) {
	return (
		<div className="profile-window">
			<div className="user-main">
				<img className="avatar" src={image} alt="User avatar" />
				<p className="user-name">{name}</p>
				<p className="user-info">@{tag}</p>
				<p className="user-info">{location}</p>
			</div>

			<ul className="profile-info-list">
				<li className="profile-info-item">
					<span className="profile-info-title">Followers</span>
					<span className="profile-info-data">{stats.followers}</span>
				</li>

				<li className="profile-info-item">
					<span className="profile-info-title">Views</span>
					<span className="profile-info-data">{stats.views}</span>
				</li>

				<li className="profile-info-item">
					<span className="profile-info-title">Likes</span>
					<span className="profile-info-data">{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
}
