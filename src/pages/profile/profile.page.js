import './profile.page.styles.scss'
import { connect } from "react-redux";
import ProfilePic from "../../Components/profile-pic/profile-pic.component";
import Card from '../../Components/Card/card.component';
import CreatePostPreview from '../../Components/post/create-post-preview/create-post-preview.component';
import ShowPost from '../../Components/post/show-post/show-post.component';
import posts from '../../posts';

const ProfilePage = ({ match, user }) => {
  return (
    <div className='profile-page'>
      <div className='profile-header'>
        <div className='header-pic'>
          <div className='cover-pic' 
            style={{backgroundImage: 'url(https://coverfiles.alphacoders.com/128/128297.jpg)'}}
          >
          </div>
          <ProfilePic photoURL={user.photoURL} />
        </div>
        <div className='name-bio'>
          <div className='display-name'>{user.displayName}</div>
          <div className='bio'>Engineer</div>
        </div>
      </div>
      <div className='main'>
        <div className='left-side'>
          <Card>
            <div className='heading'>Intro</div>
            <div>
              Lives in 
              <span className='link'> Dhaka, Bangladesh</span>
            </div>
            <div>
              Followed by 
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

const mapStateToProps = ({user}) => ({
  user
})

export default connect(mapStateToProps)(ProfilePage);