class View {
	constructor(element) {
		this._element = element;
	}

	_template() {
		throw Error('"_template" method should be implemented');
	}

	update(model) {
		this._element.innerHTML = this._template(model);
	}
}
