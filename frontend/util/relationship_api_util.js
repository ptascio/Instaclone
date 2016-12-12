export const follow = (username) => {
  return $.ajax({
    method: "POST",
    url: "api/relationships",
    data: { username }
  });
};

export const unfollow = (user) => {
  return $.ajax({
    method: "DELETE",
    url: `api/relationships/${user}`
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
