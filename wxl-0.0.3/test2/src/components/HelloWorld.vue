<template>
  <div class="hello">
    <div class="layout">
      <Layout>
        <Header>
<!--          <div>{{$route}}</div>-->
          <Menu mode="horizontal" theme="dark" active-name="1" :open-names="['1']">
            <div class="layout-logo"></div>
            <div class="layout-nav">
<!--              <MenuItem name="1">-->
<!--                <Icon type="ios-navigate"></Icon>-->
<!--                Item 1-->
<!--              </MenuItem>-->
<!--              <MenuItem name="2">-->
<!--                <Icon type="ios-keypad"></Icon>-->
<!--                Item 2-->
<!--              </MenuItem>-->
<!--              <MenuItem name="3">-->
<!--                <Icon type="ios-analytics"></Icon>-->
<!--                Item 3-->
<!--              </MenuItem>-->
<!--              <MenuItem name="4">-->
<!--                <Icon type="ios-paper"></Icon>-->
<!--                Item 4-->
<!--              </MenuItem>-->
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="/item1/duck" theme="light" width="auto" :open-names="['1']" @on-select="kaikai">
              <Submenu name="1" class="zms">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  Item 1x
                </template>
<!--                <router-link to="/item1/duck" ><MenuItem name="1-1" @click="kaikai">DUCKGAGA</MenuItem></router-link>-->
<!--                <router-link to="/item1/goose" ><MenuItem name="1-2">GOOSEMIEMIE</MenuItem></router-link>-->
                <MenuItem name="/item1/duck" >DUCKGAGA</MenuItem>
                <MenuItem name="/item1/goose">GOOSEMIEMIE</MenuItem>
<!--                <MenuItem name="1-2">Option 2</MenuItem>-->
                <MenuItem name="1-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  Item 2
                </template>
<!--                <router-link to="/item2/cybor" ><MenuItem name="2-1">CYBORSUMURIA</MenuItem></router-link>-->
<!--                <router-link to="/item2/bigCity" ><MenuItem name="2-2">BIGCITYMAGIC</MenuItem></router-link>-->
                <MenuItem name="/item2/cybor">DUCKGAGA</MenuItem>
                <MenuItem name="/item2/bigCity">GOOSEMIEMIE</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
                </template>
<!--                <MenuItem name="3-1">Option 1</MenuItem>-->
                <MenuItem name="/item3/cybor233">OPTHIN 333333333333</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb >
              <BreadcrumbItem :style="{margin: '24px 0'}" v-for="(item,index) in breadcrumbItem" v-bind:key="index" name="fade">{{item}}</BreadcrumbItem>
            </Breadcrumb>
<!--            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">-->
<!--              Content-->
<!--            </Content>-->
            <div><router-view :style="{padding: '24px', minHeight: '280px', background: '#fff'}"></router-view></div>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      breadcrumbItem: ['item1', 'duck']
    }
  },
  mounted () {
    // console.log(this.$route.matched.redirect)
    // console.log(window.location.pathname)
  },
  methods: {
    kaikai (name) {
      // console.log(name)
      this.$router.push(name)
    }
  },
  computed: {
  },
  watch: {
    $route: function (to, from) {
      // console.log(this.$route)
      // console.log(to)
      this.breadcrumbItem.pop()
      this.breadcrumbItem.pop()
      let path = to.path.split('/')
      path.shift()
      this.breadcrumbItem = path
      // console.log(this.breadcrumbItem)
      // this.breadcrumbItem.push(to.path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
