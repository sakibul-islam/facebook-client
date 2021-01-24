import Card from '../../Components/Card/card.component';
import CreatePostPreview from '../../Components/post/create-post-preview/create-post-preview.component';
import ShowPost from '../../Components/post/show-post/show-post.component';
import posts from '../../posts';
import './profile.styles.scss';
import homeIcon from './home.png'
import followIcon from './follow.png';

const Profile = ({profile}) =>  {
  const { displayName, nickName, photoURL, bio } = profile;
  return (
    <div className='profile-page'>
      <div className='profile-header'>
        <div className='header-pic'>
          <div className='cover-pic' 
            style={{backgroundImage: 'url(https://coverfiles.alphacoders.com/128/128297.jpg)'}}
          >
          </div>
          <div className='profile-pic'>
            <img src={photoURL} alt='' />
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
              <span className='link'>Dhaka, Bangladesh</span>
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



export default Profile;