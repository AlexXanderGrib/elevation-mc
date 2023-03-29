<template>
  <v-layout column justify-center class="pa-5">
    <v-card class="px-5">
      <v-card-text style="cursor: text!important">
        <div v-html="html"></div>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
import showdown from 'showdown'
import Axios from 'axios'

showdown.setFlavor('github')

async function fetch(page) {
  const conv = new showdown.Converter({
    ghCompatibleHeaderId: true,
    simpleLineBreaks: true,
    tables: true,
    encodeEmails: true
  })

  const { data } = await Axios.get(
    `https://raw.githubusercontent.com/elevation-mc/pages/master/${page}.md`
  )

  return conv.makeHtml(data)
  // .then(({ data }) => (this.html = this.converter.makeHtml(data)))
}

export default {
  props: {
    page: {
      type: String,
      require: true,
      default: ''
    }
  },

  data() {
    return {
      html: ''
    }
  },
  // beforeUpdate() {
  //   fetch(this.page).then((html) => (this.html = html))
  // },
  watch: {
    page(_uoldVal, newVal) {
      fetch(this.page).then((html) => (this.html = html))
    }
  },

  created() {
    fetch(this.page).then((html) => (this.html = html))
  }
}
</script>
<style scoped>
hr {
  color: #bbb;
  background-color: #bbb;
  height: 1px;
  flex: 0 1 auto;
  margin: 1em 0;
  padding: 0;
  border: none;
}

/**
 * Links
 */
a {
  color: #0366d6;
  text-decoration: none;
}
a:visited {
  color: #0366d6;
}
a:hover {
  color: #0366d6;
  text-decoration: underline;
}

pre {
  background-color: #f6f8fa;
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
}

/**
  * Code blocks
  */

code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  word-wrap: break-word;
  padding: 0.2em 0.4em;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
}

pre > code {
  background-color: transparent;
  border: 0;
  display: inline;
  line-height: inherit;
  margin: 0;
  overflow: visible;
  padding: 0;
  word-wrap: normal;
  font-size: 100%;
}

/**
 * Blockquotes
 */
blockquote {
  margin-left: 30px;
  margin-top: 0px;
  margin-bottom: 16px;
  border-left-width: 3px;
  padding: 0 1em;
  color: #828282;
  border-left: 4px solid #e8e8e8;
  padding-left: 15px;
  font-size: 18px;
  letter-spacing: -1px;
  font-style: italic;
}
blockquote * {
  font-style: normal !important;
  letter-spacing: 0;
  color: #6a737d !important;
}

/**
 * Tables
 */
table {
  border-spacing: 2px;
  display: block;
  font-size: 14px;
  overflow: auto;
  width: 100%;
  margin-bottom: 16px;
  border-spacing: 0;
  border-collapse: collapse;
}

td {
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}

th {
  font-weight: 600;
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}

tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

/**
 * Others
 */

img {
  max-width: 100%;
}

p {
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: #24292e;
}

ul {
  margin-top: 0;
}

li {
  color: #24292e;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

li + li {
  margin-top: 0.25em;
}

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: #24292e;
}

a:visited {
  color: #0366d6;
}

h1,
h2,
h3 {
  border-bottom: 1px solid #eaecef;
  color: #111;
  /* Darker */
}
</style>
