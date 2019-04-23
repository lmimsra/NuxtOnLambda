<template>
  <div>
    <h1>本ページはFontAwsomeの使い方忘れそうなのでメモる</h1>
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <div class="has-text-left">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <!--                    <figure class="image is-64x64">-->
                <!--                      <img-->
                <!--                        src="https://bulma.io/images/placeholders/128x128.png"-->
                <!--                        alt="Image"-->
                <!--                      />-->
                <!--                    </figure>-->
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean efficitur sit amet massa fringilla egestas. Nullam
                    condimentum luctus turpis.
                  </p>
                  <font-awesome-icon :icon="['fas', 'adjust']" />
                  <font-awesome-icon :icon="['fas', 'reply']" />
                  <font-awesome-icon :icon="['fas', 'retweet']" />
                  <font-awesome-icon :icon="['fas', 'heart']" />
                  <font-awesome-icon
                    icon="dollar-sign"
                    style="font-size: 30px"
                  />
                  <font-awesome-icon icon="cog" />
                  <font-awesome-layers class="fa-4x">
                    <font-awesome-icon icon="circle" />
                    <font-awesome-icon
                      icon="check"
                      transform="shrink-6"
                      :style="{ color: 'white' }"
                    />
                  </font-awesome-layers>
                  <font-awesome-layers class="fa-3x">
                    <font-awesome-icon icon="calendar" />
                    <font-awesome-layers-text
                      transform="shrink-8 down-3"
                      value="27"
                      class="fa-inverse"
                    />
                  </font-awesome-layers>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item" aria-label="reply">
                      <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="retweet">
                      <span class="icon is-small">
                        <i class="fas fa-retweet" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="like">
                      <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FontTest'
}
</script>

<style scoped></style>
