export default {
  data () {
    return {
      currentPath: '/'
    }
  },
  created () {
    this.setDefaultMenuIndex()
  },
  // watch: {
  //   currentPath: () => {
  //     this.setDefaultMenuIndex()
  //   }
  // },
  methods: {
    run (path) {
      // 先判断是否在当前大路由下
      const currentPath = this.$route.path
      const currentArr = currentPath.split('/')
      const currentMainPath = currentArr[1]

      // const path = this.$route.path
      const newArr = path.split('/')
      const newMainPath = newArr[1]

      if (currentMainPath !== newMainPath) {
        this.$router.push({
          path
        })
        // console.log('跳')
      }
    },
    setDefaultMenuIndex () {
      const path = this.$route.path
      const arr = path.split('/')
      const mainPath = arr[1]
      if (mainPath === '') {
        this.currentPath = '/'
      } else {
        this.currentPath = `/${mainPath}/*`
      }
      console.log(this.currentPath)
    }
  }
}
