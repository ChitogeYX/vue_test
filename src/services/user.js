export const Login = (data) => {
  if (data.userName === 'admin' && data.password === 'admin') {
    data.state = 1
  } else {
    data.state = 0
  }
  return data
}
