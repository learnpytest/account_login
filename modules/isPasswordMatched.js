const isPasswordMatched = function (userToBeVerified, loginedUserPassword) {
  return userToBeVerified.password === loginedUserPassword
}
module.exports = isPasswordMatched