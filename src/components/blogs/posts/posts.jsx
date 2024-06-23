import {useState, useContext} from "react";

import {PostsContext} from "../../../context/post";
import {Link} from "react-router-dom"


function Posts() {
    const [value, setValue] = useState('');
    const posts = useContext(PostsContext)

    const filteredPosts = posts.filter(post => {
        return post.titleBlog.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div className="container">
            <div className="posts-filter">
                <h4 className="posts-filter__title">Filter by keywords:</h4>
                <input className="posts-filter__input"  type="text" onChange={(event) => setValue(event.target.value)}/>
                <h3 className="posts-filter__result">Result: {filteredPosts.length}</h3>
            </div>
            <div className="posts-content">
                {filteredPosts.map(post => (
                    <div className="posts-content__block" key={post.id}>
                        <p className="posts-content__block-date"><span><b>Posted:</b> {post.date}</span></p>
                        <h5 className="posts-content__block-title">{post.titleBlog}</h5>
                        <p className="posts-content__block-category"><b>Categoty:</b> {post.category}</p>
                        <p className="posts-content__block-text">{post.text.slice(0, 200)}...</p>
                        <p className="posts-content__block-btn">
                        <Link to={post.id}>
                            Read More
                        </Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;