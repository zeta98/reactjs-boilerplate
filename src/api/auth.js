import client from '.'

export const signIn = async ({ username, password }) => {
  const response = await client().post('/users/sign_in', {
    username,
    password
  })
  return response.data
}

export const signOut = async () => {
  const response = await client().post('/users/sign_out', {})
  return response.data
}