// Display a reader's username and comment text.
function Comment({ username, children }) {
  return (
    <article className="comment">
      <h3>{username}</h3>
      <p>{children}</p>
    </article>
  );
}

export default Comment;