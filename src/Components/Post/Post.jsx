import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, userId, title, body } = post;
  const navigate = useNavigate();
  const postStyle = {
    border: "2px solid purple",
    padding: "5px",
    borderRadius: "10px",
    marginTop: "10px",
  };
  const handleShowDetail = () =>{
    navigate(`/post/${id}`)
  }

  return (
    <div style={postStyle}>
      <h4>Post of id: {id}</h4>
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleShowDetail}>Click to see details</button>
    </div>
  );
};

export default Post;
