import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <Post message="First post" likes="2"/>
            <Post message="Second post" likes="3"/>
        </div>
    );
}

export default MyPosts;