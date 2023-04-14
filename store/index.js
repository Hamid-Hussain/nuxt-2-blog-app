import Vuex from 'vuex'
// import axios from '@nuxtjs/axios'
// import axios, * as others from 'axios';


const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts){
                
                state.loadedPosts = posts
            },
            addPost(state, post){
                state.loadedPosts.push(post)
            },
            editPost(state,editedPost){
                const postIndex = state.loadedPosts.findIndex(post=> post.id===editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {

            nuxtServerInit(vuexContext, context){
                return context.app.$axios.get('/posts.json').then((res)=> {
                const postsArray = []
                for(const key in res.data){
                    postsArray.push({...res.data[key], id:key})
                }
                vuexContext.commit('setPosts',postsArray)
            }).catch((e)=>console.log('error',e))
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts',[
                            { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' },
                            { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHiitTbyvTRUA-wnPbeSwCOcDmea9OYDVpA&usqp=CAU' }
                          ]
                          )
                      resolve()
                    }, 1000);
                  })
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            },



            async addPost(vuexContext, postData) {
                const createdPost = {
                    ...postData, 
                    updatedData: new Date()
                }
                const res = await this.$axios.$post('/posts.json', createdPost)
                vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
            },

            editPost(vuexContext, postData) {
                const createdPost = {
                    ...postData, 
                    updatedData: new Date()
                }
               return this.$axios.$put('/posts/'+postData.id+'.json',postData)
                .then((res)=> {
                    vuexContext.commit('editPost',createdPost)
                }).catch((e=>console.log(e)))
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}


export default createStore