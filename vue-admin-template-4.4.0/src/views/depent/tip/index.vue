<template>
  <div class="dialog">
    <div class="mask" />
    <div class="share">
      <h3>来来来！</h3>
      <div class="close" @click="closeShare">关</div>
      <div class="share-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tip',
  data() {
    return {

    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    closeShare() {
      this.$emit('shareClose')
    }
  }

}
</script>

<style scoped>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5a5e66;
    opacity: 0.2;
  }
  .share {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 300px;
    height: 500px;
    background-color: #20a0ff;text-align: center;
  }
  .share h3 {
    margin-top: 30px;
  }
  .share .close {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  .share-image {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 100%;
    height: 300px;
    background-image: url("./cybor.png");
    background-size: 100% 100%;
  }
</style>
