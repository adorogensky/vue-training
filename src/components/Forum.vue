<template>
       <div class="col-large push-top">

          <h1>Wasabi vs horseraddish?</h1>

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