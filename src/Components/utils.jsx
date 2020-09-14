
export const isLogin = () => {
    if (localStorage.getItem("userlogin")) {
        return true;
    }
    return true;
}