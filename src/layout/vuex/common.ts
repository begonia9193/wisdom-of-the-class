import {mapState} from 'vuex'
import {AppState} from '@/store'

export default {
  computed: mapState({
    menuOpenEnable(state: AppState) {
      return state.layoutState.menuOpenEnable
    },
    menuSelected(state: AppState) {
      return state.layoutState.menuSelected
    },
    viewWidth(state: AppState) {
      return state.layoutState.viewStyle.width
    },
    viewHeight(state: AppState) {
      return state.layoutState.viewStyle.height
    }
  })
}
