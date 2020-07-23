export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      year: 2020
    }
  },
  mounted () {
    this.getYear()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getYear () {
      const current = new Date()
      this.year = current.getFullYear()
    }
  }
}
