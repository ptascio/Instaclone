
export function selectAllPosts(state) {
  return Object.values(state.post);
}

export function selectAllComments(state) {
  return Object.values(state.comment);
}

export function selectAllLikes(state) {
  return Object.values(state.like);
}
