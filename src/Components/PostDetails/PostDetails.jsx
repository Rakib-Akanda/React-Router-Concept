import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, body, title, userId} = post;
    const navigate = useNavigate();
    const {postId} = useParams();
    const handleGoBackBtn = () =>{
        navigate(-1);
    }
    console.log(parseInt(postId));
    return (
        <div>
            <h3>Post details about: {id} </h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBackBtn}>Go Back</button>
        </div>
    );
};

export default PostDetails;