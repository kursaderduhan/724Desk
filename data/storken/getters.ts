import { Storken } from 'storken'
export const getters = {
  credentials: (state: Storken<string>) => state.value,
}

export default getters

