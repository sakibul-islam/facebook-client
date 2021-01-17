import CreatePostPreview from '../post/create-post-preview/create-post-preview.component';
import ShowPost from '../post/show-post/show-post.component';
import './contents.styles.scss';

const Contents = () => {

  return (
    <div className='contents'>
      <CreatePostPreview/>
      <ShowPost/>
      <ShowPost/>
    </div>
  )
}

export default Contents;