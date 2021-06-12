const isRegisteredUser = function (registeredAccountList, loginedUserEmail) {
  return registeredAccountList.find(account => account.email === loginedUserEmail)
}
module.exports = isRegisteredUser