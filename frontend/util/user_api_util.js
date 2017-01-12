export const fetchUser = (username) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${username}`
  });
};

export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: "api/users"
  });
};

export const searchUsers = (query) => {
  return $.ajax({
    method: "GET",
    url: "api/users/search",
    data: { query }
  });
};
