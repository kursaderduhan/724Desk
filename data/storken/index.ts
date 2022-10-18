// import { createStore } from 'storken'
// import { StorkenStorage } from 'storken-storage'

// export const [Storken, { useStorken }] = createStore({
//   plugins: {
//     storage: StorkenStorage({
//       storage:
//         typeof window !== 'undefined' ? window.localStorage : ({} as Storage),
//     }),
//   },
//   storkenOptions: {
//     credentials: {
//       storage: typeof window !== 'undefined' ? window.localStorage : null,
//       loading: true,
//     },
//   },
//   initialValues: {
//     newsId: 1 as number,
//     NewsPage: 'none' as string,
//     PostPanel: false as boolean,
//     theme: 1 as number, //1 light theme 0 dark theme
//   },
// })

// export default { Storken, useStorken }
