import Card from '../../Card/card.component';
import CurrentUsersProfilePic from '../../current-user/current-users-profile-pic/current-users-profile-pic.component';
import HoverButton from '../../hoverButton/hover-button.component';
import './create-post-preview.styles.scss';
import { LiveVideoIcon, PhotoVideoIcon, FeelingActivityIcon } from '../../icons/icons'

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
            <LiveVideoIcon className='icon'/>
            <span>Live Video</span>
          </HoverButton>
          <HoverButton>
            <PhotoVideoIcon className='icon'/>
            <span>Photo/Video</span>
          </HoverButton>
          <HoverButton>
            <FeelingActivityIcon className='icon'/>
            <span>Feeling/Activity</span>
          </HoverButton>
        </div>
      </Card>
    </div>
    
  )
}
export default CreatePostPreview;