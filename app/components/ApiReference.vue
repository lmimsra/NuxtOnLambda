<template>
  <div>
    <h3 class="subtitle">APIリファレンス</h3>
    <div class="columns is-centered">
      <div class="column is-three-quarters">
        <div class="has-text-left">
          <div class="box">
            <article class="media">
              <div class="media-left"></div>
              <div class="media-content">
                <p>
                  <strong>様々なレスポンスの種類を返すAPI</strong>
                  <br />
                  リクエストURIのパラメータに応じて様々なHTTPレスポンスステータスを見ることができます。<br />
                  メッセージ内容は全てWikipediaより参照しているものです。
                  <br />
                  <strong>リクエストサンプル</strong><br />
                  Anyリクエスト：<code>{{ domainName }}api/list/200</code><br />
                  <strong
                    >レスポンスサンプル(実際にAPIリクエストしています)</strong
                  ><br />
                  <code>
                    {{ response }}
                  </code>
                </p>
              </div>
            </article>
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left"></div>
              <div class="media-content">
                <p>
                  <strong>なぜかwikipediaのリンクを返すAPI</strong>
                  <br />
                  リクエストするとただただwikipediaのリンクが送られてきます。謎です。
                  <br />
                  <strong>リクエストサンプル</strong><br />
                  GETリクエスト：<code>{{ domainName }}api/links</code><br />
                  <strong
                    >レスポンスサンプル(実際にAPIリクエストしています)</strong
                  ><br />
                  <code>
                    { "message": "参照先のWikipediaリンクです", "link":
                    "https://ja.wikipedia.org/wiki/HT...}
                  </code>
                </p>
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
  name: 'ApiReference',
  data: function() {
    return {
      domainName: 'http://localhost:300',
      response: null,
      wikiLink: null
    }
  },
  mounted() {
    this.domainName = document.URL
    this.$axios
      .$get('/api/list/200')
      .then(response => {
        this.response = response
      })
      .catch(error => {
        this.response = error
      })
  }
}
</script>

<style scoped></style>
