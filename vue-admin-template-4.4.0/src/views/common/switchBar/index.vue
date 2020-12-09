<template>
  <div class="main">
    <ul :style="ulGetAllStyle">
      <li v-for="(item,index) in tabArr" :key="index" :class="{active:getBackProperty.activeType1 && currentIndex === index,active2:getBackProperty.activeType2 && currentIndex === index,active3:getBackProperty.activeType3 && currentIndex === index}" @click="tabItemClick(index)">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SwitchBar',
  props: {
    tabArr: {
      type: Array,
      default: () => {}
    },
    getBackProperty: {
      type: Object,
      default: function() {
        return {
          'ulBackgroundColor': '#ecf0f1',
          'liBackground-color': '',
          'activeColor': '',
          'activeBorderBottom': '',
          'activeBackgroundColor': '',
          'fontWeight': '700',
          'activeType1': false,
          'activeType2': false,
          'activeType3': false
        }
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      click: false
    }
  },
  computed: {
    liGetAllStyle: function() {
      return {
        'background-color': this.getBackProperty.ulBackgroundColor
      }
    },
    ulGetAllStyle: function() {
      return {
        'background-color': this.getBackProperty.ulBackgroundColor
      }
    },
    activeGetAllStyle: function() {
      return {
        'background-color': this.getBackProperty.activeBackgroundColor,
        'font-weight': this.getBackProperty.fontWeight
      }
    }
  },
  methods: {
    tabItemClick(eIndex) {
      this.currentIndex = eIndex
      this.$emit('tabDadClick', eIndex)
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  background-color: #ecf0f1;
  border-radius: 10px;
}
.main ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  padding: 0;
}
.main ul li {
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
  width: 100%;
  border-radius: 10px;
}
.active {
  background-color: #fff;
  font-weight: bold;
  }
.active2 {
  background-color: #fff;
  font-weight: bold;
  border-bottom: 5px solid #10aeb5;
  color: #10aeb5;
}
.active3 {
  background-color: #20a0ff;
  color: #fff;
}
</style>
