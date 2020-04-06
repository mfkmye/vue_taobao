export default {
    namespaced: true,
    state() {
        return {
            data: [],
            isLoading: false,
        }
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setData(state, data) {
            state.data = data;
        }
    },
    actions: {
        async getData({
            commit
        }) {
            commit('setLoading', true);
            this.axios.post('/home/tbh-service/', null, (resp) => {
                commit('setData', resp.data.arr);
            });
            commit('setLoading', false);
        },
    }
}