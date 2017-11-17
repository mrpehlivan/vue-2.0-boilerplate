<template>
    <div class="container">
        <div>
            <h1 style="margin-left:10%">{{ message }} </h1>

            <input  class="clickButton" type="button" @click.prevent="getData" value="CLICK ME"/>
        </div>
    </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

  export default {

    computed: {
      ...mapState({
        message: ({apps}) => apps.message
      })
    },
    data(){
      return {
      }
    },
    created () {
      console.info("created")
    },
    methods: {
    ...mapActions([
         'postLogin',
         'getData'
       ])
    }
  }
</script>
<style>
.container{
    background-color: #ffffff;
    margin-left: 40%;
}

.clickButton {
    background: #fff;
    -webkit-appearance: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    position: relative;
    display: block;
    width: 40%;
    top: 50%;
    color: #009CDE;
    border: 1px solid #009CDE;
    font-weight: 700;
}

</style>
