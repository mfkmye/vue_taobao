const ERROR_MSG = ["用户名或密码不能为空！", "用户名或密码有误！"];
export default {
    namespaced: true,
    state() {
        return {
            data: null,
            isLoging: false,
            isLoading: false,
            errorMsg: {
                error: false,
                msg: '',
                time: 0
            }
        }
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setLoging(state, isLoging) {
            state.isLoging = isLoging;
        },
        updateUser(state, userObj) {
            state.data = userObj;
        },
        updateErrorMsg(state, errorMsg) {
            state.errorMsg.error = errorMsg.error;
            state.errorMsg.msg = errorMsg.msg;
            state.errorMsg.time = +new Date();
            console.log(state.errorMsg);
        }
    },
    actions: {
        async login({
            commit,
        }, payload) {
            commit('setLoading', true);
            if (payload.userId && payload.password) {
                this.axios.post('/login/', payload, (resp) => {
                    let arr = resp.data.data;
                    if (arr) {
                        var error = true;
                        arr.forEach(ele => {
                            if (ele.userId == payload.userId && ele.password == payload.password) {
                                commit('updateUser', ele);
                                localStorage.setItem('loginUser', JSON.stringify(ele));
                                error = false;
                            }
                        });
                        if (error) {
                            commit('updateErrorMsg', {
                                error,
                                msg: ERROR_MSG[1]
                            });
                        } else {
                            commit('setLoging', true);
                        }
                    }
                });

            } else {
                commit('updateErrorMsg', {
                    error: true,
                    msg: ERROR_MSG[0]
                });
            }
            commit('setLoading', false);
        },
        logout({
            commit
        }) {
            commit('setupdateUserUser', null);
            commit('setLoging', false);
            localStorage.removeItem('loginUser');
        },
        syncLocal({
            commit
        }) {
            const local = localStorage.getItem('loginUser');
            if (local) {
                const user = JSON.parse(local);
                commit("setUser", user);
                commit('setLoging', true);
            }
        }
    }
}