import Vue from 'vue'

import message from './message'

const  CreateMassage  = Vue.extend(message)

const instence = new CreateMassage({
    el: document.createElement('div')
})

instence.show = false

const $message={
    show(msg){
        instence.show=true
        instence.msg=msg
        document.body.appendChild(instence.$el)
    },
    hide(){
        instence.show=false
    }
}

export default{
    install(){
        if(!Vue.$message){
            Vue.$message=$message
        }
        Vue.mixin({
            created(){
                this.$message=Vue.$message
            }
        })
    }
}