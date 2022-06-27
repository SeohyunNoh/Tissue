import axios from 'axios'
import {
    FETCH_HALL_LIST,
    FETCH_HALL,
      // performance
    FETCH_PERFORMANCE_LIST,
    FETCH_PERFORMANCE,

    FETCH_NOTICE_LIST,
    FETCH_NOTICE,
    FETCH_QNA_LIST,
    FETCH_QNA,
    FETCH_QNA_COMMENT_LIST,
    FETCH_QNA_BEST_LIST,
    FETCH_QNA_BEST

} from './mutation-types'

//import router from '@/router'

export default {
    fetchHallList({commit}) {
        return axios.get('http://localhost:7777/hall/list')
        .then((res)=>{
            commit(FETCH_HALL_LIST,res.data)
        })
    },

    fetchHall({commit},hallNo) {
        return axios.get(`http://localhost:7777/hall/${hallNo}`)
        .then((res)=>{
            commit(FETCH_HALL,res.data)
        })
    },
   // peformance
    fetchPerformanceList({ commit }) {
        return axios.get('http://localhost:7777/performance/list')
                .then((res) => {
                    commit(FETCH_PERFORMANCE_LIST, res.data)
                })
    },
    fetchPerformance({ commit }, performNo) {
        return axios.get(`http://localhost:7777/performance/${performNo}`)
        .then((res) => {
            commit(FETCH_PERFORMANCE, res.data)
        })
    },
    fetchNoticeList ({ commit }) {
        return axios.get('http://localhost:7777/notice/list')
          .then((res) => {
            commit(FETCH_NOTICE_LIST, res.data)
          })
    },
    fetchNotice ({ commit }, noticeNo) {
        return axios.get(`http://localhost:7777/notice/${noticeNo}`)
          .then((res) => {
            commit(FETCH_NOTICE, res.data)
          })
    },
    fetchQnaList ({ commit }) {
        return axios.get('qna/list')
          .then((res) => {
            commit(FETCH_QNA_LIST, res.data)
          })
    },
    fetchQna ({ commit }, qnaNo) {
        return axios.get(`qna/${qnaNo}`)
          .then((res) => {
            commit(FETCH_QNA, res.data)
          })
    },
    fetchQnaCommentList ({ commit }, qnaCommentNo) {
    return axios.get(`qnaComment/${qnaCommentNo}`)
      .then((res) => {
        commit(FETCH_QNA_COMMENT_LIST, res.data)
      })
    },
    fetchQnaBestList ({ commit }) {
        return axios.get('qnaBest/list')
          .then((res) => {
            commit(FETCH_QNA_BEST_LIST, res.data)
          })
    },
    fetchQnaBest ({ commit }, qnaBestNo) {
        return axios.get(`qnaBest/${qnaBestNo}`)
          .then((res) => {
            commit(FETCH_QNA_BEST, res.data)
          })
    },

 }


