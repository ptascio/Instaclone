export const makeComment = (comment) => {
  return $.ajax({
    url: "/api/comments",
    method: "POST",
    data: { comment }
  });
};

export const destroyComment = (comment) => {
  return $.ajax({
    url: `api/comments/${comment.id}`,
    method: "DELETE"
  });
};

export const fetchComments = () => {
  return $.ajax({
    url: "api/comments",
    method: "GET"
  });
};
