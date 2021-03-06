import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

import { getFoods, resetCurrentBox } from './actions'
import { selectFoodRequest } from '../Food/actions'

const mapStateToProps = ({ currentBox, foods }) => {
  // Populated lunchbox for use in food display (doesn't supercede currentBox)
  let lunchbox = null
  let pending = currentBox.pending || foods.pending
  if (foods.foods && currentBox.lunchbox) {
    lunchbox = {
      produce: foods.foods.produce.find(f => f.id === currentBox.lunchbox.produce),
      protein: foods.foods.protein.find(f => f.id === currentBox.lunchbox.protein),
      dairy: foods.foods.dairy.find(f => f.id === currentBox.lunchbox.dairy),
      grains: foods.foods.grains.find(f => f.id === currentBox.lunchbox.grains),
      other: foods.foods.other.find(f => f.id === currentBox.lunchbox.other)
    }
  }

  return {
    currentBox,
    foods,
    lunchbox,
    pending
  }
}

const mapDispatchToProps = dispatch => ({
  getFoods: () => dispatch(getFoods()),
  selectFood: (foodId, lunchboxId, categoryName) => dispatch(selectFoodRequest(foodId, lunchboxId, categoryName)),
  resetCurrentBox: () => dispatch(resetCurrentBox())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lunchbox)
