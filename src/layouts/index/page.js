import NAV from '../../components/nav'

export default {
  components: {
    NAV
  },
  methods: {
    run (uri, mode) {
      if (mode && mode === 'link') {
        window.location.href = uri
      } else if (mode && mode === 'route') {
        this.$router.push({
          path: uri
        })
      }
    }
  }
}
