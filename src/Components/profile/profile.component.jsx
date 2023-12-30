// import Card from '../../Components/Card/card.component';
// import CreatePostPreview from '../../Components/post/create-post-preview/create-post-preview.component';
import ShowPost from '../../Components/post/show-post/show-post.component';
import posts from '../../posts';
import profiles from '../../profilesObj';

import './profile.styles.scss';
import homeIcon from './home.png';
import followIcon from './follow.png';
import studyIcon from './study.png';

import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import { requestToGraphQl } from '../../graphql/graphql';
import { formatDate } from '../../modules/time';

const Profile = ({ userName }) => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    requestToGraphQl({
      query: `{
        user (userName: "${userName}") {
        displayName
        photoURL
        photos
        userName
        followers
        nickName
        bio
        born
      }}`
    }).then(result => {
      setProfile(result.data.user);
    }).catch(err => {
      setProfile(profiles[userName]);
    });
  }, [userName]);

  const { displayName, nickName, photoURL, photos, coverURL, bio, birthday, followers, studiesAt } = profile;
  return (
    <div className='profile-page'>
      <div className='profile-header'>
        <div className='header-pic'>
          <div className='cover-pic'
            style={{ backgroundImage: `url(${coverURL || 'https://coverfiles.alphacoders.com/128/128297.jpg'})` }}
          >
          </div>
          <div className='profile-pic' style={{ backgroundImage: `url(${photoURL})` }}>
          </div>
        </div>
        <div className='name-bio'>
          <div className='names'>
            <span className='display-name'>{displayName}</span>
            {
              nickName ? (<span> ({nickName})</span>) : null
            }
          </div>
          <div className='bio'>{bio}</div>
        </div>
      </div>
      <div className='main'>
        <div className="left-side">
          <div className='intro'>
            <div className='heading'>Intro</div>
            {studiesAt ? (
              <div className='section studies-at'>
                <span className='icon'>
                  <img src={studyIcon} alt='' />
                </span>
                <span className='text'>
                  <span> Studies at </span>
                  <span className='link'> {studiesAt}</span>
                </span>
              </div>
            ) : null}
            <div className='section lives-in'>
              <span className='icon'>
                <img src={homeIcon} alt='' />
              </span>
              <span className='text'>
                <span> Lives in </span>
                <span className='link'> Earth</span>
              </span>
            </div>
            {
              birthday ? (
                <div className='section birthday'>
                  <span className='icon'>
                    <img src={homeIcon} alt='' />
                  </span>
                  <span className='text'>
                    <span>Date of birthday</span>
                    <span className='link'> {birthday ? formatDate(new Date(birthday)) : ""}</span>
                  </span>
                </div>
              ) : null
            }
            {
              followers ? (
                <div className='section followed-by'>
                  <span className='icon'>
                    <img src={followIcon} alt='' />
                  </span>
                  <span> Followed by </span>
                  <span className='link'>{followers}</span>
                </div>
              ) : null
            }
          </div>

          {
            photos ? (
              photos.length ? (
                <div className='photos'>
                  {
                    photos.map((photoUrl, index) => <div key={index} className='photo' style={{ backgroundImage: `url(${photoUrl})` }}></div>)
                  }
                </div>
              ) : null
            ) : null
          }
        </div>

        <div className="right-side">
          <section className="posts-section">
            {/* <h2>Posts</h2> */}
            <div className="posts">
              {posts.filter(post => post.user.userName === userName).map(post => (
                <ShowPost post={post} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }, { match: { params: { userName } } }) => ({
  userName
});


export default connect(mapStateToProps)(Profile);