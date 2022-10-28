/* eslint-disable import/no-anonymous-default-export */
import { createStore } from 'storken'
import { StorkenStorage } from 'storken-storage'

const storage = StorkenStorage({
  storage: typeof window !== 'undefined' ? window.localStorage : (null as any),
})

export const [Storken, { useStorken }] = createStore({
  storkenOptions: {
    credentials: {
      loading: true,
      plugins: { storage },
    },
    theme: {
      plugins: { storage },
    },
    lang: {
      plugins: { storage },
    },
    newsId: {
      plugins: { storage },
    },
    NewsPage: {
      plugins: { storage },
    },
    PostPanel: {
      plugins: { storage },
    },
  },
  initialValues: {
    pagesName: "Ana Sayfa" as any,
  },
})

export default { Storken, useStorken }

