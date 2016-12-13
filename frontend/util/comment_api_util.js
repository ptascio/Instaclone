export const makeComment = (comment) => {
  debugger
  return $.ajax({
    url: "/api/comments",
    method: "POST",
    data: { comment }
  });
};
