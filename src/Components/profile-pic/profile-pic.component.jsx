import './profile-pic.styles.scss';

const ProfilePic = ({imgUrl, size}) => {
  return (
    <div className='pp-container' style={{height: size, width: size}}>
      {imgUrl ? <img src={imgUrl} height={size} width={size} alt='' /> : null}
    </div>
  )
}

export default ProfilePic;