import NAV from '../../components/nav'
import FOOT from '../../components/footer'
export default {
  components: {
    NAV, 
    FOOT
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
