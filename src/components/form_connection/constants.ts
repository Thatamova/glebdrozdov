// eslint-disable-next-line
export const regexpEmail = /^[a-zA-Z0-9\+\.\_\%\-\+]{1,256}\@[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9\-]{1,25})+$/;
export const touchMap = {}
export const TYPES = ['default', 'full']
export const isEmailValid = (email) => {
  return !!email && regexpEmail.test(email)
}