import Card from '../../Card/card.component';
import CurrentUsersProfilePic from '../../current-user/current-users-profile-pic/current-users-profile-pic.component';
import HoverButton from '../../hoverButton/hover-button.component';
import './create-post-preview.styles.scss';

const CreatePostPreview = () => {

  return (
    <div className='create-post'>
      <Card >
        <div className='header'>
          <CurrentUsersProfilePic/>
          <HoverButton>
            What's on your mind?
          </HoverButton>
        </div>
        <div className='media'>
          <HoverButton>
            Live Video
          </HoverButton>
          <HoverButton>
            Photo/Video
          </HoverButton>
          <HoverButton>
            Feeling/Activity
          </HoverButton>
        </div>
      </Card>
    </div>
    
  )
}
export default CreatePostPreview;