export default {
    namespaced: true,
    state() {
        return {
            data: {
                result: [],
                curPage: 0,
                pageCount: 0,
            },
            isLoading: false,
        }
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setData(state, data) {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    if (key == "result") {
                        state.data[key] = [...state.data[key], ...data[key]];
                    } else {
                        state.data[key] = data[key];
                    }
                }
            }
        }
    },
    actions: {
        async getData({
            commit
        }, payload) {
            commit('setLoading', true);
            await this.axios.post('/hotsale?page=' + payload.page,
                payload, (resp) => {
                    if (resp.status == 200) {
                        commit('setData', resp.data);
                        commit('setLoading', false);
                    }
                });            
        },
    }
}