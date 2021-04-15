class MessageView extends View {
	constructor(element) {
		super(element);
	}

	_template(model) {
		return model.text
			? `<p class="alert alert-info">${model.text}</p>`
			: "<p></p>";
	}
}
