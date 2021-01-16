import Card from '../../Card/card.component';
import ProfilePic from '../../profile-pic/profile-pic.component';
import TextInput from '../../text-input/text-input.component';
import './create-post-preview.styles.scss';

const CreatePostPreview = () => {

  return (
    <div className='create-post'>
      <Card >
        <div className='header'>
          <ProfilePic size='40px'/>
          <TextInput/>
        </div>
      </Card>
    </div>
    
  )
}
export default CreatePostPreview;