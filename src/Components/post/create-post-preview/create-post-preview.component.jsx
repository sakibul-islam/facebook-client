import Card from '../../Card/card.component';
import HoverButton from '../../hoverButton/hover-button.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
import TextInput from '../../text-input/text-input.component';
import './create-post-preview.styles.scss';

const CreatePostPreview = () => {

  return (
    <div className='create-post'>
      <Card >
        <div className='header'>
          <ProfilePic size='40px'/>
          <TextInput placeHolder="What's on your mind?"/>
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