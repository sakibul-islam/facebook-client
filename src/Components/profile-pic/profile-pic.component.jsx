import './profile-pic.styles.scss';

const ProfilePic = ({imgUrl, size}) => {
  return (
    <div className='profile-pic' style={{height: size, width: size}}>
      {imgUrl ? <img src={imgUrl} height={size} width={size} alt='' /> : null}
    </div>
  )
}

export default ProfilePic;