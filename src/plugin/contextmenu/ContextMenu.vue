<template>
  <teleport to="#contextmneu"> 
      <ul v-show="show" :style="style" class="contextmenu-wrapper">
          <template v-for="(item,index ) in menu" :key="index">
              <li  @click="item.onClick(routeName)">
                {{item.label}}
              </li>
          </template>
      </ul>
  </teleport>
</template>

<script>
export default {
  name: "ContextMenu",
  props: {
      show:{
        type: Boolean,
        required: true
      },
      style: Object,
      menu:{
          type: Array,
          required: true
      },
      routeName: {
          type: String,
          required: true
      }
  },

  data(){
      return {

      }
  }
};
</script>

<style lang="scss" scoped>
.contextmenu-wrapper {
  width: fit-content;
    position: fixed;
    padding: 0.5rem 0;
    background-color: #fff;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    z-index: 9999;

  li {
        cursor: pointer;
    font-size: .875rem;
    padding: 0.5rem 1rem;

    &:hover {
      background-color: rgba(144,147,153,.1);
    }
  }
}
</style>