import '../styles/profile.css';

export interface IProfileProps {}

const Profile = () => {
	return (
		<div className="profile-page">
      <div className="quote-save-container">
        <h2>My Favourite quotes</h2>
        <ul>
          <li>fdffgfgd</li>
          <li>sfdgdfgf</li>
        </ul>
      </div>
			<div className="read-container">
        <h2>Articles to read</h2>
        <ul>
          <li>dfdfdgd</li>
          <li>dfdgfd</li>
        </ul>
      </div>
			<div className="see-container">
      <h2>Videos to watch</h2>
        <ul>
          <li>dfdfdgd</li>
          <li>dfdgfd</li>
        </ul>
      </div>
      <div className="diary-save-container">
        <h2>My Diaries</h2>
        <ul>
          <li>
            <p>dfdfgfgg</p>
          </li>
          <li>
            <p>dfdgdfgf</p>
          </li>
        </ul>
      </div>
			
		</div>
	);
};

export default Profile;
