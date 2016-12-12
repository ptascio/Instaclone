export const follow = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/relationships",
    data: { user }
  });
};

export const unfollow = (user) => {
  return $.ajax({
    method: "DELETE",
    url: `api/relationships/${user.id}`
  });
};

export const fetchFollowers = (currentUser) => {
  return $.ajax({
    url: `/api/users/${currentUser.username}/followers`,
    method: "GET"
  });
};

export const fetchFollowing = (currentUser) => {
  return $.ajax({
    url: `api/users/${currentUser.username}/following`,
    method: "GET"
  });
};
