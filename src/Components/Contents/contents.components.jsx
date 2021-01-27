import CreatePostPreview from '../post/create-post-preview/create-post-preview.component';
import ShowPost from '../post/show-post/show-post.component';
import './contents.styles.scss';
import posts from '../../posts';
import Gun from '../gun/gun.component';

const Contents = () => {

  return (
    <div className='contents'>
      <CreatePostPreview/>
      {
        posts.map(post => (
          <ShowPost post={post} key={post.id} />
        ))
      }
      <Gun />
    </div>
  )
}

export default Contents;