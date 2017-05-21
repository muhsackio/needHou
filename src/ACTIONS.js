import STORE from './store'


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

		
}

export default ACTIONS 