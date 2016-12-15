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
