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

		checkInfoStatus: function(hashPlaceHolder) {
			if(STORE._get('info').enteredInfo) {
				return 
			}
			else {
				STORE._set({
					placeholderHash: hashPlaceHolder
				})
				document.location.hash = "#enterInfo"

			}

		}
		
}

export default ACTIONS 