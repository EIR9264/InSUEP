import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/guide/new_md.html.vue"
const data = JSON.parse("{\"path\":\"/guide/new_md.html\",\"title\":\"我的新页面\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"createdTime\":1742308871000,\"updatedTime\":1742308871000,\"contributors\":[{\"name\":\"EmptyDust\",\"username\":\"EmptyDust\",\"email\":\"1422492074@qq.com\",\"commits\":1,\"url\":\"https://github.com/EmptyDust\"}]},\"readingTime\":{\"minutes\":0.21,\"words\":64},\"filePathRelative\":\"guide/new_md.md\",\"localizedDate\":\"March 18, 2025\",\"excerpt\":\"\\n<p>这是我的新页面的内容。</p>\\n<p>这是一个链接： <a href=\\\"https://vuepress.vuejs.org/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">VuePress</a></p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
