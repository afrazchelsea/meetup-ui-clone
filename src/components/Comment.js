import Avatar from "./Avatar";

function Comment(props) {
  const { data } = props;

  if (!data) {
    return null;
  }

  return (
    <div className="flex space-x-4">
      <Avatar />
      <div>
        <div>
          <h6>{data.name}</h6>
          <p>{data.comment}</p>
        </div>
        {(data.replies || []).map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
