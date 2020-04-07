class Auth {
    constructor() {
        this.isAuthenticated=localStorage.getItem("authenticated")
    }
    login(cb) {
        localStorage.setItem("authenticated",true)
        cb()
    }
    signout(cb) {
        localStorage.setItem("authenticated",false)
        cb()
    }
    isAuthenticated() {
        return localStorage.getItem("authenticated")
    }
}

export default new Auth();
