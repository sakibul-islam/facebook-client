import { connect } from "react-redux";
import { useState, useContext } from "react";
import "./create-post-modal.styles.scss";
import { requestToGraphQl } from "../../../graphql/graphql";
import PostsContext from "../../../contexts/posts.context";
import ProfilePic from "../../profile-pic/profile-pic.component";
import { CrossIcon, EarthIcon } from "../../icons/icons";
import Name from "../../name/name.component";

const CreatePostModal = ({ userName, photoURL, displayName, setModal }) => {
	const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState("");
	const { posts, setPosts } = useContext(PostsContext);

	const handleChange = (event) => {
    switch(event.target.name) {
      case "caption":
        setCaption(event.target.value);
        console.log(caption);
        break;
      case 'photo':
        console.log(event.target.files[0]);
        setPhoto(event.target.files[0])
        console.log(photo)
        // const reader = new FileReader();
        // reader.readAsDataURL(event.target.files[0]);
        // reader.onloadend = () => {
        //   console.log(reader.result)
        //   console.log(btoa(reader.result))
        // }
        break;
      default:
        console.log('switch')
    }
		
		
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log({caption, userName})
		const query = {
			query: `mutation($userName: String!, $caption: String!) {
        addPost(userName: $userName, caption: $caption ) {
          id
          user {
            userName
            displayName
            photoURL
          }
          body {
            caption
            photoURL
          }
          time
          reactions {
            like
            haha
            wow
            love
            sad
            care
            angry
          }
          comments {
            id
            user {
              displayName
              photoURL
              userName
            }
            body
          }
        }
      }`,
			variables: `{
        "userName": "${userName}",
        "caption": ${JSON.stringify(caption)}
      }`,
		};
		

		requestToGraphQl(query).then((result) => {
			const post = result.data.addPost;
      console.log(post)
			setPosts([post, ...posts]);
      setCaption("");
			setModal(false);
		}).catch(err => {
      console.log(err)
      setCaption("Opps, something went wrong...")
      setTimeout(() => {
        setCaption("");
        setModal(false);
      }, 1000)
    })


    // const formData = new FormData();
    // formData.append('caption', caption);
    // formData.append('photo', photo);
    // fetch('http://localhost:3001/post/new', {
    //   method: 'POST',
    //   method: method || null,
    //   headers: {
    //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //     'Content-Type': 'multipart/form-data'
    //   },
    //   body: formData
    // })
	};

	const hideModla = (event) => {
		if (event.target.className === "post-modal-container") setModal(false);
	};
	return (
		<div className="post-modal-container" onClick={hideModla}>
			<div className="post-modal">
				<form onSubmit={handleSubmit}>
          <div className="header">
            <h2>Create Post</h2>
            <div className='close-btn' onClick={() => setModal(false)}>
              <CrossIcon/>
            </div>
            <hr/>
          </div>
          <div className="owner">
            <div className='left'>
              <ProfilePic photoURL={photoURL}/>
              <div className='right'>
                <Name displayName={displayName}/>
                <div className='privacy'>
                  <EarthIcon className='icon'/>
                  <span>Public</span>
                </div>
              </div>
            </div>
            
            
          </div>
					<textarea className="caption" name="caption" value={caption} onChange={handleChange} placeholder="What's on your mind?" />
          {/* <input name="photo" type="file" onChange={handleChange}/> */}
					<input className="post-btn" disabled={caption? false: true} type="submit" value="Post" />
          {/* <img src={}/> */}
				</form>
			</div>
		</div>
	);
};

const mapDispatchToProps = ({ user: { userName, displayName, photoURL } }) => ({
	userName, displayName, photoURL
});

export default connect(mapDispatchToProps)(CreatePostModal);
