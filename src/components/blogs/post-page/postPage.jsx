import {useContext} from "react";
import {PostsContext} from "../../../context/post";
import {Link, useParams} from "react-router-dom"

function PostPage() {
    const {id} = useParams()
    const post = useContext(PostsContext).find(e => e.id === id)
    return(
        <div className="post-page">
            <div className="container">
                <div className="post-page__content">
                    <h1 className="post-page__content-title">{post?.titleBlog}</h1>
                    <p className="post-page__content-text">{post?.text}</p>
                </div>
                <div className="post-page__btn">
                    <Link to="/blogerApp/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
}

export default PostPage;