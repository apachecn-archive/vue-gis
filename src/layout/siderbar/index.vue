<script>
import routes from '@/router/routes'

export default {
  name: 'Siderbar',
  methods: {
    renderItem () {
      return (
        routes.map(item => {
          // 由于只有2层，所以简单写了
          const children = item.children
          if (children && children.length > 0) {
            return (
              <el-submenu index={ item.path }>
                <template slot="title">
                  <i class={ item.icon }></i>
                  <span>{ item.text }</span>
                </template>
                <el-menu-item-group>
                  {
                    children.map(list => (
                      <el-menu-item route={ list } index={ list.path }>{ list.text }</el-menu-item>
                    ))
                  }
                </el-menu-item-group>
              </el-submenu>
            )
          } else {
            return (
              <el-menu-item route={item} index={ item.path }>
                <i class={ item.icon }></i>
                <span slot="title">{ item.text }</span>
              </el-menu-item>
            )
          }
        })
      )
    }
  },
  render () {
    return (
      <div>
        <div class="header">vue-gis案例demo</div>
        <el-menu
          default-active={this.$route.path}
          background-color="#001B31"
          text-color="#fff"
          active-text-color="#ffd04b"
          router={true}>
          {this.renderItem()}
        </el-menu>
      </div>
    )
  }
}
</script>

<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #FFFFFF;
}
.el-menu {
  border: none;
}
</style>
