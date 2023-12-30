import ShowPost from "../post/show-post/show-post.component";
import "./contents.styles.scss";
import postArr from "../../posts";
import Gun from "../gun/gun.component";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { requestToGraphQl } from "../../graphql/graphql";
import CreatePost from "../post/create-post/create-post";
import PostsContext from '../../contexts/posts.context';

const Contents = ({ gun }) => {
  const [posts, setPosts] = useState(postArr);

  useEffect(() => {
    // requestToGraphQl({
    //   query: `{
    //     posts {
    //       id
    //       user {
    //         userName
    //         displayName
    //         photoURL
    //       }
    //       body {
    //         caption
    //         photoURL
    //         videoURL
    //       }
    //       time
    //       reactions {
    //         like
    //         haha
    //         wow
    //         love
    //         sad
    //         care
    //         angry
    //       }
    //       comments {
    //         id
    //         user {
    //           displayName
    //           photoURL
    //           userName
    //         }
    //         body
    //       }
    //     }
    //   }`,
    // })
    // 	.then((result) => {
    //     console.log(result.data.posts);
    //     setPosts(result.data.posts)
    //   });
  }, []);


  return (
    <div className="contents">
      <PostsContext.Provider value={{ posts, setPosts }}>
        <CreatePost />
      </PostsContext.Provider>
      {posts.map((post) => (
        <ShowPost post={post} key={post.id} />
      ))}
      {gun.gunMode ? <Gun /> : ""}
    </div>
  );
};

const mapStatetoProps = ({ gun }) => ({
  gun,
});

export default connect(mapStatetoProps)(Contents);
