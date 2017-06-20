const state = {
    showpicksheet :false,
    fisrtTimeOpenSheet:false,
    cur_specx:[],
    cur_spec_namex:[],


}

const mutations = {
    ['ACTIONSHEET_UPDATE'] (state,payload) {
        state[payload.key] = payload.value;
    },
    ['ACTIONSHEET_UPDATE_ARR'] (state,payload) {
        state[payload.key]=[];
        for(var i in payload.value){
            state[payload.key].push(payload.value[i])

        }
    },

    ['ACTIONSHEET_CLEAN'] (state){
        state.showpicksheet = false;
    },


}

export default {
    state,
    mutations
}