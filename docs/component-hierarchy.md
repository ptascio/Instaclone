<h1>Component Hierarchy</h1>

<strong>AuthFormContainer</strong>
  <ul>
    <li>
      AuthForm
    </li>
  </ul>

<strong>HomeContainer</strong>
<ul>
  <li>
    UserFeed
  </li>
  <li>
    NavBar
  </li>
</ul>

<strong>UserContainer</strong>
<ul>
  <li>
    User Pics
  </li>
  <li>
    User info
  </li>
</ul>

<strong>PhotoContainer</strong>
<ul>
  <li>
    Image
  </li>
  <li>
    Photo info
  </li>
</ul>

<strong>PicPopUp</strong>
<ul>
  <li>
    Image
  </li>
  <li>
    Photo info
  </li>
</ul>

<strong>Upload Photo Container</strong>
<ul>
  <li>
    User info
  </li>
  <li>
    Photo
  </li>
</ul>


<h2>Routes<h2>
<table>
  <tr>
    <th>Path</th>
    <th>Component</th>
  </tr>
  <tr>
    <td>/sign-up</td>
    <td>AuthFormContainer</td>
  </tr>
  <tr>
    <td>/log-in</td>
    <td>AuthFormContainer</td>
  </tr>
  <tr>
    <td>/home</td>
    <td>HomeContainer</td>
  </tr>
  <tr>
    <td>/user/id</td>
    <td>UserContainer</td>
  </tr>
  <tr>
    <td>/photo/id</td>
    <td>PhotoContainer</td>
  </tr>
  <tr>
    <td>/new-photo</td>
    <td>UploadPhotoContainer</td>
  </tr>
</table>
