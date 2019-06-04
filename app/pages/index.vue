<template>
  <div class="section">
    <div class="container has-text-centered">
      <section class="hero is-light">
        <div class="hero-body">
          <logo />
          <h1 class="title">
            ApiSample
          </h1>
          <h2 class="subtitle">
            api sample for Lambda
          </h2>
          <p>色々なHTTPレスポンスを返すAPIです</p>
          <p>APIレスポンス:{{ response }}</p>
        </div>
        <div class="section">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green"
            >Documentation For Nuxt</a
          >
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
            >GitHub For Nuxt</a
          >
          <a
            href="https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89"
            target="_blank"
            class="button--grey"
            >Httpステータスコードの一覧</a
          >
        </div>
      </section>
      <section class="section">
        <ApiReference />
      </section>
      <footer class="footer">
        presented by
        <a href="https://twitter.com/lmimsra_dev" target="_blank"
          >LiMa <font-awesome-icon :icon="['fab', 'twitter-square']" />
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ApiReference from '~/components/ApiReference.vue'

export default {
  components: {
    Logo,
    ApiReference
  },
  data: function() {
    return {
      response: null
    }
  },
  mounted: function() {
    this.$axios
      .$get('/api/')
      .then(response => {
        this.response = response.message
      })
      .catch(error => {
        this.response = 'API Error'
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}
</script>

<style scoped>
/*.container {*/
/*  margin: 0 auto;*/
/*  min-height: 100vh;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
