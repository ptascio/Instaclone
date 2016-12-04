<h1>Schema Information</h1>

<h2>users</h2>
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  <tr>
  <tr>
    <td>username</td>
    <td>string</td>
    <td>not null, indexed, unique</td>
  <tr>
  <tr>
    <td>followers</td>
    <td>integer</td>
    <td>default: 0</td>
  <tr>
  <tr>
    <td>following</td>
    <td>integer</td>
    <td>default: 0</td>
  <tr>
  <tr>
    <td>email</td>
    <td>string</td>
    <td>not null, indexed, unique</td>
  <tr>
  <tr>
    <td>password_digest</td>
    <td>string</td>
    <td>not null</td>
  <tr>
  <tr>
    <td>session_token</td>
    <td>string</td>
    <td>not null, indexed, unique</td>
  <tr>
</table>

<h2>photos</h2>
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  <tr>
  <tr>
    <td>caption</td>
    <td>string</td>
    <td></td>
  <tr>
  <tr>
    <td>user_id</td>
    <td>string</td>
    <td>not null, foreign key</td>
  <tr>
  <tr>
    <td>likes</td>
    <td>integer</td>
    <td>default: 0</td>
  <tr>
</table>

<h2>comments</h2>
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>comment</td>
    <td>string</td>
    <td>not null</td>
  <tr>
  <tr>
    <td>photo_id</td>
    <td>integer</td>
    <td>not null, foreign key</td>
  <tr>
  <tr>
    <td>user_id</td>
    <td>string</td>
    <td>not null, foreign key</td>
  <tr>
</table>
