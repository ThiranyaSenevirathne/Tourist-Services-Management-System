import React from 'react';


function navigationbar() {
    return (
        <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/viewblog">   Blog      </a>
    <a class="navbar-brand" href="/viewalltravel"> Travel    </a>
    <a class="navbar-brand" href="/">           Explore   </a>
    <a class="navbar-brand" href="/CustomerHomePage">       Hotel     </a>
    <a class="navbar-brand" href="/userhomepage">   Tour Guide</a>
    <a class="navbar-brand" href="/login">   Log in</a>
  </nav>
</div>
    )
}
export default navigationbar;