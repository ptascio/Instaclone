# Instaclone

[LIVE](http://www.instaclone.net/#/welcome)

[Project Proposal 12/5/16](https://github.com/ptascio/Instaclone/blob/master/docs/README.md)

Instaclone is a photo sharing website inspired by Instagram. It is built using Ruby on Rails on the back-end with a PostgresSQL database and React/Redux on the front-end.

## Features & Implementation
![instaclone](/docs/demo-pics/home.png)
### Displaying posts
Upon logging in the user is immediately directed to their photo feed which displays their own posts as well as the posts of the people they follow through the `PostIndex` component. Posts are also displayed on the users profile page through the `User` component. All posts are stored in the database in a Posts table and use the `user_id` column to identify to which user the post belongs to. Both the main feed and user feed display posts in reverse chronological order.

![instaclone](/docs/demo-pics/feed.png)

### Liking and Commenting
Users have the option to like and comment on the posts they see on their feed. Both likes and comments have their own tables in the database and user the `post_id` and `user_id` to store the input being received. While a user is free to comment as many times as they wish and index on the likes table ensures that a user may only like a post one time. When a user is logged in they also have an option to delete any comments they have previously made.  

![instclone](/docs/demo-pics/comments_likes.png)

### Following and Unfollowing
A big part of Instagram and many other social media sites today is the ability to follow and unfollow other users. These are aptly stored on the backend in a `relationships` table. Similar to likes, there is an index on the table restricting a user to only be able to follow another user once. As stated earlier, when all of the posts by the users being followed will show up in the user feed. When a user unfollows someone those posts will no longer show up in the main feed.

``` ruby
def follow(other_user)
  active_relationships.create(followed_id: other_user.id)
end

def unfollow(other_user)
  active_relationships.find_by(followed_id: other_user.id).destroy
end

def following?(other_user)
  following.include?(other_user)
end
```

### Posting
Instaclone offers the necessary functionality to post pictures from the users own computer. The user has the option to add a caption to the photo and is redirected to their feed upon posting.

![instclone](/docs/demo-pics/post.png)

### Future Features
In an effort to refine and make Instaclone even more analogous to Instagram I plan to continue working on this project implement the following features.

#### Search
I plan to create user search functionality using the `PG_SEARCH` gem so that users can more easily find one another by searching by `username`.

#### Hash
Hashes enable posts to be grouped together through keywords. I plan to implement this functionality so that users can find posts that are grouped together through these hash keywords.
