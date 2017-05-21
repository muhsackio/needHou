import Backbone from 'backbone'
import _ from 'underscore'

const STORE = _.extend(Backbone.Events, {

	_data: {
		info: {
			gender: "none",
			age: 0,
			location: 0,
			enteredInfo: false
		}
	}, 

	_emitChange: function() {
		this.trigger('storeChanged')
	},

	_getData: function() {
		return this._data
	},

	_get: function(prop) {
		return this._data[prop]
	},

	_set: function(changeObj) {
		this._data = _.extend(this._data,changeObj)
		this._emitChange()
	}
})

export default STORE