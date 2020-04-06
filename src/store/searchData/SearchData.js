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
        async search({
            commit,
            axios
        }, msg) {
            commit('setLoading', true);
            try {
                axios.post('/search/',
                    msg, (resp) => {
                        console.log(resp);
                    });
            } catch (error) {
                console.log(error);
            }
            commit('setLoading', false);
        },
    }
}