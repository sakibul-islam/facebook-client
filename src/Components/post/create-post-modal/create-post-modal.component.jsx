import { connect } from "react-redux";
import { useState } from "react";
import "./create-post-modal.styles.scss";
import { requestToGraphQl } from "../../../graphql/graphql";

const CreatePostModal = ({userName, setModal}) => {
  const [caption, setCaption] = useState('');

  const handleChange = (event) => {
    setCaption(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log({caption, userName})
    const query = {
      query: `mutation($userName: String!, $caption: String!) {
        addPost(userName: $userName, caption: $caption ) {
            body {
              caption
            }
          }
      }`,
      variables: `{
        "userName": "${userName}",
        "caption": "${caption}"
      }`
    }
    setCaption('');

    requestToGraphQl(query).then(() => {
      setModal(false);
    })
  }
  const hideModla = (event) => {
    if (event.target.className === "post-modal-container") setModal(false)
  }
	return (
    <div className="post-modal-container" onClick={hideModla}>
      <div className="post-modal">
        <form onSubmit={handleSubmit}>
          <h2>What's on your mind?</h2>
          <textarea name='caption' value={caption} onChange={handleChange} />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
	);
};

const mapDispatchToProps = ({user: {userName}}) => ({
  userName
})

export default connect(mapDispatchToProps)(CreatePostModal);
