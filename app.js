var app = new Vue({
	el: '#app',
	data() {
		return {
			options: [],
			newOption: null,
			error: null,
			selectedOption: null
		}
	},
	created() {
		console.log('createk');
	},
	methods: {
		chooseOption() {
			this.selectedOption = this.options[Math.floor(Math.random() * this.options.length)];
		},
		addOption() {
			if (!this.newOption) {
				this.error = "Not a Value";
			} else if (this.options.includes(this.newOption)) {
				this.error = "This is a repeat";
			} else {
				this.options.push(this.newOption);
				this.newOption = null;
			}
		}
	}
});
