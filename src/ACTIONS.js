import STORE from './STORE'


const ACTIONS = {

		saveInfo: function(infoObject){
			STORE._set({
				info: infoObject
			})
		},

		updateInfo: function(infoObject){
			STORE._set({
				info: infoObject
			})
		} ,

		checkInfoStatus: function() {
			return STORE._get('info').enteredInfo

		}
		
}

export default ACTIONS 