function Comment({ username, children }) {
  return (
    <article className="comment">
      <h3>{username}</h3>
      <p>{children}</p>
    </article>
  );
}

export default Comment;