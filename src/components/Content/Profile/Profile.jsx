import MyPosts from "./MyPosts/MyPosts";
import NewPost from "./NewPost/NewPost";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://geekon.media/wp-content/uploads/2019/08/1.jpg" alt="No image"/>
            </div>
            <div>
                Ava + description
            </div>
            <NewPost/>
            <MyPosts/>

        </div>
    );
}

export default Profile;