export const createLike = (post) => {
  return $.ajax({
    url: 'api/likes',
    method: "POST",
    data: { post }
  });
};

export const destroyLike = (post) => {
  return $.ajax({
    url: `api/likes/${post.id}`,
    method: "DELETE"
  });
};

export const fetchLikes = () => {
  return $.ajax({
    url: 'api/likes',
    method: "GET"
  });
};
