import CreatePostPreview from '../post/create-post-preview/create-post-preview.component';
import ShowPost from '../post/show-post/show-post.component';
import './contents.styles.scss';
import posts from '../../posts';

const Contents = () => {

  return (
    <div className='contents'>
      <CreatePostPreview/>
      {
        posts.map(post => (
          <ShowPost post={post} key={post.id} />
        ))
      }
    </div>
  )
}

export default Contents;