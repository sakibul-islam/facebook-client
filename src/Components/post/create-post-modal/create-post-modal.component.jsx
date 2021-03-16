import { connect } from "react-redux";
import { useState, useContext } from "react";
import "./create-post-modal.styles.scss";
import { requestToGraphQl } from "../../../graphql/graphql";
import PostsContext from "../../../contexts/posts.context";

const CreatePostModal = ({ userName, setModal }) => {
	const [caption, setCaption] = useState("");
	const { posts, setPosts } = useContext(PostsContext);

	const handleChange = (event) => {
		setCaption(event.target.value);
		console.log(caption);
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
		setCaption("");

		requestToGraphQl(query).then((result) => {
			const post = result.data.addPost;
      console.log(post)
			setPosts([post, ...posts]);
			setModal(false);
		});
	};
	const hideModla = (event) => {
		if (event.target.className === "post-modal-container") setModal(false);
	};
	return (
		<div className="post-modal-container" onClick={hideModla}>
			<div className="post-modal">
				<form onSubmit={handleSubmit}>
					<h2>What's on your mind?</h2>
					<textarea name="caption" value={caption} onChange={handleChange} />
					<input type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
};

const mapDispatchToProps = ({ user: { userName } }) => ({
	userName,
});

export default connect(mapDispatchToProps)(CreatePostModal);
