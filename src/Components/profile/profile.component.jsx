import Card from '../../Components/Card/card.component';
import CreatePostPreview from '../../Components/post/create-post-preview/create-post-preview.component';
import ShowPost from '../../Components/post/show-post/show-post.component';
import posts from '../../posts';
import './profile.styles.scss';
import homeIcon from './home.png'
import followIcon from './follow.png';

import { connect } from "react-redux";

import profiles from '../../profilesObj';

const Profile = ({profile}) =>  {
  const { displayName, nickName, photoURL, coverURL, bio } = profile;
  return (
    <div className='profile-page'>
      <div className='profile-header'>
        <div className='header-pic'>
          <div className='cover-pic' 
            style={{backgroundImage: `url(${coverURL || 'https://coverfiles.alphacoders.com/128/128297.jpg'})`}}
          >
          </div>
          <div className='profile-pic' style={{backgroundImage: `url(${photoURL})`}}>
          </div>
        </div>
        <div className='name-bio'>
          <div className='names'>
            <span className='display-name'>{displayName}</span>
            {
              nickName ? (<span> ({nickName})</span>) : null
            }
          </div>
          <div className='bio'>{bio}</div>
        </div>
      </div>
      <div className='main'>
        <div className='left-side'>
          <Card>
            <div className='heading'>Intro</div>
            <div className='lives-in'>
              <span className='icon'>
                <img src={homeIcon} alt='' />
              </span>
              <span> Lives in </span>
              <span className='link'>Earth</span>
            </div>
            <div className='followed-by'>
              <span className='icon'>
                <img src={followIcon} alt='' />
              </span>
              <span> Followed by </span>
              <span className='link'> 5000 people</span>
            </div>
          </Card>
        </div>
        <div className='right-side'>
          <CreatePostPreview/>
          {
            posts.map(post => (
              <ShowPost post={post} key={post.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({user}, {match: {params: {userName}}}) => ({
  currentUser: user,
  profile: userName ? profiles[userName] : user
})


export default connect(mapStateToProps)(Profile);