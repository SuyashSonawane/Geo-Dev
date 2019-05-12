<template>
    <div class="chat container" >
    <router-link :to="{name:'Welcome'}">
      <h2 class="center teal-text ">Dev Chat</h2>
    </router-link>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="gray-text text-darken-3">{{message.content}}</span>
            <span class="gray-text time text-darken-5">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action hoverable">
        <NewMessage
        :name="name"/>
      </div>
    </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
export default {
    components:{
      NewMessage
    },
    name:'Chat',
    props:['name'],
    data(){
      return{
        messages:[]
      }

    },
    methods:{
        
    },
    created(){
      let ref =db.collection('messages').orderBy('timestamp')
      ref.onSnapshot(snapshot=>{
        snapshot.docChanges().forEach(change => {
          if(change.type=="added"){
            let doc = change.doc
              this.messages.push({
                id:doc.id,
                name:doc.data().name,
                content:doc.data().content,
                timestamp:moment(doc.data().timestamp).format('lll'),
              })
            }
          });
      })
    }

}
</script>

<style>
.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span{
  font-size: 1.8em;
}
.chat .time{
  display: block;
  font-size: 1em
}
.messages{
  max-height: 50vh;
  overflow: auto
}
.messages::-webkit-scrollbar{
  width: 3px
}
.messages::-webkit-scrollbar-track{
  background: #ddd
}
.messages::-webkit-scrollbar-thumb{
  background: #aaa
}
</style>
