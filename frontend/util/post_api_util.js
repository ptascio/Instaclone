export const makePost = (formData) => {
  return $.ajax({
    url: "/api/posts",
    method: "POST",
    contentType: false,
    processData: false,
    data: formData
  });
};

export const fetchPosts = () => {
  return $.ajax({
    url: "/api/posts",
    method: "GET",
  });
};

export const deletePost = (id) => {
  return $.ajax({
    url: `/api/posts/${id}`,
    method: "DELETE"
  });
};
