export const makeComment = (comment) => {
  return $.ajax({
    url: "/api/comments",
    method: "POST",
    data: comment
  });
};
