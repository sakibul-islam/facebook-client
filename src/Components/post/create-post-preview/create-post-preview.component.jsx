import Card from '../../Card/card.component';
import HoverButton from '../../hoverButton/hover-button.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
import './create-post-preview.styles.scss';

const CreatePostPreview = () => {

  return (
    <div className='create-post'>
      <Card >
        <div className='header'>
          <ProfilePic size='40px'/>
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