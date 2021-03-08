import { connect } from "react-redux";
import { useState } from "react";
import "./create-post-modal.styles.scss";
import { requestToGraphQl } from "../../../graphql/graphql";

const CreatePostModal = ({user: {email}, setModal}) => {
  const [caption, setCaption] = useState('');
  const handleChange = (event) => {
    setCaption(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({caption, email})
    requestToGraphQl({
      query: `mutation {
        addPost(
          userName: "${email}"
          caption: "${caption}"
          ) {
            body {
              caption
            }
          }
      }
  `
  }).then(console.log)
  }
  const hideModla = (event) => {
    console.log(event.target.className)
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

const mapDispatchToProps = ({user}) => ({
  user
})

export default connect(mapDispatchToProps)(CreatePostModal);
