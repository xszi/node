class UserService {

    login(username, password) {
        console.log('entered Userservice login method')
        console.log('info from UserService.login: ' + username + ', ' + password)

        return true
    }
}

module.exports = new UserService()