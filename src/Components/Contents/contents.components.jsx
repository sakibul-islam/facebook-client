import CreatePostPreview from '../post/create-post-preview/create-post-preview.component';
import ShowPost from '../post/show-post/show-post.component';
import './contents.styles.scss';
import posts from '../../posts';
import Gun from '../gun/gun.component';
import { connect } from 'react-redux';

const Contents = ({gun}) => {

  return (
    <div className='contents'>
      <CreatePostPreview/>
      {
        posts.map(post => (
          <ShowPost post={post} key={post.id} />
        ))
      }
      {
        posts.map(post => (
          <ShowPost post={post} key={post.id} />
        ))
      }
      {
        posts.map(post => (
          <ShowPost post={post} key={post.id} />
        ))
      }
      {gun.gunMode ? <Gun/> : ''}
    </div>
  )
}

const mapStatetoProps = ({gun}) => ({
  gun
})

export default connect(mapStatetoProps)(Contents);