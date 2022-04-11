import '../styles/profile.css';
import {BsFillChatRightQuoteFill, BsFillJournalBookmarkFill} from 'react-icons/bs'
import {GoDeviceCameraVideo} from 'react-icons/go'
import {FaBook} from 'react-icons/fa'

export interface IProfileProps {}

const Profile = () => {
	return (
		<div className="profile-page">
      <div className="quote-save-container">
        <h2>My Favourite quotes</h2>
        <ul className='quote-list'>
          <li><span><BsFillChatRightQuoteFill/></span>Life is a circle of happiness, sadness, hard times, and good times. If you are going through hard times, have faith that good times are on the way.</li>
          <li><span><BsFillChatRightQuoteFill/></span>The more powerful and original a mind, the more it will incline towards the religion of solitude.</li>
        </ul>
      </div>
			<div className="read-container">
        <h2>Articles to read later</h2>
        <ul className='article-save-list'>
          <li>
            <a href="/"><span><FaBook/></span>Four Ways Sadness May Be Good for You</a>
          </li>
          <li><a href="/"><span><FaBook/></span>Loneliness: Causes and Health Consequences</a></li>
        </ul>
      </div>
			<div className="see-container">
      <h2>Videos to watch later</h2>
        <ul className='video-save-list'>
          <li><a href="/"><span><GoDeviceCameraVideo/></span>6 Differences Between Sadness and Depression</a></li>
          <li><a href="/"><span><GoDeviceCameraVideo/></span>How to cope with anxiety | Olivia Remes | TEDxUHasselt</a></li>
        </ul>
      </div>
      <div className="diary-save-container">
        <h2>My Diaries</h2>
        <ul className='diary-list'>
          <li>
            <p><span><BsFillJournalBookmarkFill/></span>readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </li>
          <li>
            <p><span><BsFillJournalBookmarkFill/></span>0s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p>
          </li>
        </ul>
      </div>
			
		</div>
	);
};

export default Profile;
