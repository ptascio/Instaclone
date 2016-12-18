<h1>Instaclone</h1>
<hr>

<p><a href="https://instaclonepics.herokuapp.com/#/welcome">Instaclone live</a></p>

<p>
  Instaclone is a full-stack web application inspired by Instagram. It uses Ruby on Rails for the backend, a PostgresSQL database, and React.js/Redux on the front-end.
</p>

<h2>Features and Implementation</h2>

<h3>Posts</h3>
<p>Posts are stored in one table which has columns for ```id```, ```user_id```, ```caption``` (optional), as well as columns for ```created_at``` and ```updated_at```. Instaclone utilizes the Paperclip gem for uploading images and AWS for storage. Paperclip automatically adds the columns ```image_file_name```, ```image_content_type```, ```image_file_size```, and ```image_updated_at``` to the Posts table.</p>

<table>
  <tr>
    <th>column_name</th>
    <th>data_type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary_key</td>
  </tr>
  <tr>
    <td>user_id</td>
    <td>integer</td>
    <td>not null, foreign_key</td>
  </tr>
  <tr>
    <td>caption</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>image_file_name</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>image_content_type</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>image_file_size</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>image_updated_at</td>
    <td>datetime</td>
    <td></td>
  </tr>
</table>

<p>Posts are rendered in the PostIndex component as well as the UserIndex component. When a user logs in, s/he is directed to their user feed where the PostIndex component displays their posts as well as the posts of the users they are following in reverse chronological order. By clicking on the username of one the posts the logged in user is brought to the profile of that username and this is where the UserIndex component renders the posts of that particular user.</p>
![image of user index](wireframes/user_page.png)

<h3>Comments</h3>
<p>Comments are stored in a table with columns for  ```id```, ```user_id```, ```username```,```post_id```, and ```body```. Both the Comment component (to make a comment) and the CommentIndex component (to list all the comments for a particular post) are nested in the PostIndex component. PostIndex passes along the id for each post so that each comment has the correct association. When a comment is created the username for the current logged in user is also passed in.</p>

<h3>Likes</h3>
<p>When a user likes or unlikes a post the aptly named Likes table gets updated. This table consists of a ```user_id``` and ```post_id```. While a user is able to like or unlike a post as many times as s/he wants restrictions on the database side only allow for one user_id/post_id association at a time. This way a post will not receive an inflated or deflated number of likes.</p>

<h3>Relationships</h3>
<p>As with many other social media sites one of the core features of Instagram is the ability to follow or unfollow other users. Instaclone uses a relationship table in the database to keep track of whether a user is following or being followed by another user. This table has a ```follower_id``` and a ```followed_id``` column as well as restrictions to ensure that a user cannot follow or unfollow a user multiple times at once (similar to the likes table). </p>

<h2>Front End</h2>
<p>In an effort to establish independency for each piece of state in this project I made separate components for each feature. By doing this I was able to pass along the information that each component required in a relatively straight forward manner. The most obvious example of this is seen in the PostIndex:<br />

```<section>```<br/>
      ```<LikeContainer postId={post.id}/>```<br/>
      ```<CommentContainer postId={post.id}/>```<br/>
  ```</section>```<br>

  While each comment and like will be associated with a particular post, they are not entwined with the PostIndex at all and can be accessed through the state at anytime independently of PostIndex.</p>

  <h2>Future Features to Implement</h2>
  <h3>Search</h3>
  <p>In the near future I plan to add search functionality so that users can find one another through usernames. I plan on using the pg_seacrh gem to implement this.</p>

  <h3>Location</h3>
  <p>Instagram offers add location to posts functionality and I would like implement that as well.</p>
