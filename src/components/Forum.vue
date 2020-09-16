<template>
       <div class="col-large push-top">

          <h1>Wasabi vs horseraddish?</h1>

          <p>
              By <a href="#" class="link-unstyled">Robin</a>, 2 hours ago.
              <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
          </p>

          <div class="post-list">

              <div class="post">

                  <div class="user-info">
                      <a href="profile.html#profile-details" class="user-name">Robin</a>

                      <a href="profile.html#profile-details">
                          <img class="avatar-large" src="static/assets/img/robin.png" alt="">
                      </a>

                      <p class="desktop-only text-small">107 posts</p>

                      <p class="desktop-only text-small">23 threads</p>

                      <span class="online desktop-only">online</span>

                  </div>

                  <div class="post-content">
                      <div>
                        <p>
                          Is horseradish and Wasabi the same thing? I've heard so many different things.<br><br>
                          I want to know once and for all.
                        </p>
                      </div>
                      <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
                  </div>



                  <div class="post-date text-faded">
                      6 hours ago
                  </div>

                  <div class="reactions">
                      <ul>
                          <li>💡</li>
                          <li>❤️</li>
                          <li>👎</li>
                          <li>👍</li>
                          <li>👌</li>
                      </ul>
                      <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
                      <button class="btn-xsmall active-reaction"><span class="emoji">👌️</span>️ 1</button>
                      <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
                  </div>

              </div>

              <div class="post">

                  <div class="user-info">
                      <a href="profile.html#profile-details" class="user-name">Joseph Kerr</a>

                      <a href="profile.html#profile-details">
                          <img class="avatar-large" src="https://www.sideshowtoy.com/photo_9030371_thumb.jpg" alt="">
                      </a>

                      <p class="desktop-only text-small">116 posts</p>

                      <p class="desktop-only text-small">73 threads</p>

                      <span class="online desktop-only">online</span>

                  </div>

                  <div class="post-content">
                    <div>
                      <blockquote class="small">
                          <div class="author">
                              <a href="/user/robin" class=""> robin</a>
                              <span class="time">a month ago</span>
                              <i class="fa fa-caret-down"></i>
                          </div>

                          <div class="quote">
                              <p>Is horseradish and Wasabi the same thing? I've heard so many different things.</p>
                          </div>
                      </blockquote>
                      <p>They're not the same!</p>
                    </div>
                    <a class="edit-post link-unstyled"><i class="fa fa-pencil"></i></a>
                  </div>



                  <div class="post-date text-faded">
                      6 hours ago
                  </div>

                  <div class="reactions">
                      <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
                  </div>

              </div>

              <div class="post">

                  <div class="user-info">
                      <a href="profile.html#profile-details" class="user-name">Ray-Nathan James</a>

                      <a href="profile.html#profile-details">
                          <img class="avatar-large" src="static/assets/img/ray-nathan.jpg" alt="">
                      </a>

                      <p class="desktop-only text-small">10 posts</p>

                      <p class="desktop-only text-small">4 threads</p>

                      <span class="offline desktop-only">offline</span>

                  </div>

                  <div class="post-content">
                      <div>
                        <p>
                            <a href="/user/Joker" class="">@Joker</a> is right, they're not the same.
                        </p>
                        <p>
                          They are different plants from the same family (mustard/cabbage).
                        </p>
                      </div>
                  </div>



                  <div class="post-date text-faded">
                      6 hours ago
                  </div>

                  <div class="reactions">
                      <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
                  </div>

              </div>
          </div>
      </div>
</template>

<script>
import data from '../data.json'

export default {
  name: 'Forum',
  data () {
    return {
      threads: data.threads,
      posts: data.posts,
      users: data.users
    }
  }
}
</script>