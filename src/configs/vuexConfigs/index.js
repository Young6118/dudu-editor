export const SET_REPLY_PROBLEM_TYPE = 'setReplyProblemType';
export const SET_REPLY_PROBLEM_SUBTYPE = 'setRplyProblemSubType';
export const SET_REPLY_SELECTED_QWORDS = 'setReplySelectedQwords';
export const SET_SELECTED_TRANSFER_MESSAGE = 'setSelectedTransferMessage';

// SET_REPLY_PROBLEM_TYPE, SET_REPLY_PROBLEM_SUBTYPE, SET_REPLY_SELECTED_QWORDS
export default {
  state: {
    replyProblemType: 0, // 回复中设置的问题大类的id
    replyProblemSubType: 0, // 回复中设置的问题子类的id
    replySelectedQwords: '', // 回复中选择的快捷回复语
    selectedTransferMessage: null // 当前处理中的转单消息体
  },

  mutations: {
    [SET_REPLY_PROBLEM_TYPE](state, val) {
      state.replyProblemType = val;
    },

    [SET_REPLY_PROBLEM_SUBTYPE](state, val) {
      state.replyProblemSubType = val;
    },

    [SET_REPLY_SELECTED_QWORDS](state, val) {
      state.replySelectedQwords = val;
    },

    [SET_SELECTED_TRANSFER_MESSAGE](state, val) {
      state.curProcessTransferMessage = val;
    }

  },

  actions: {
    [SET_REPLY_PROBLEM_TYPE]({ commit }, val) {
      commit(SET_REPLY_PROBLEM_TYPE, val);
    },

    [SET_REPLY_PROBLEM_SUBTYPE]({ commit }, val) {
      commit(SET_REPLY_PROBLEM_SUBTYPE, val);
    },

    [SET_REPLY_SELECTED_QWORDS]({ commit }, val) {
      commit(SET_REPLY_SELECTED_QWORDS, val);
    },

    [SET_SELECTED_TRANSFER_MESSAGE]({ commit }, val) {
      commit(SET_SELECTED_TRANSFER_MESSAGE, val);
    }
  }
};
