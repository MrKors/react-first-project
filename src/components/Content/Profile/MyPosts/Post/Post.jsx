import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={style.post}>
                <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                     alt="No image"/>
                {props.message}
            </div>
            <div>
                likes: {props.likes}
            </div>
        </div>
    );
}

export default Post;