import Posts from "./posts/posts";
import {PostsContext} from "../../context/post";
import {useEffect, useState} from "react";
import axios from "axios";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PostPage from "./post-page/postPage";

function Blogs() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get("https://karpanazarii.github.io/jsonapi/blogs.json")
        setPosts(data)
    }

    return (
        <PostsContext.Provider value={posts}>
            <Router>
                <Switch>
                    <Route path="/blogerApp/:id">
                        <PostPage />
                    </Route>
                    <Route exact path="/blogerApp/">
                        <div className="posts">
                            <Posts/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </PostsContext.Provider>
    );
}


export default Blogs;