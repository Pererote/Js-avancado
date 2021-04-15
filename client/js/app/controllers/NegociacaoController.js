class NegociacaoController {
	constructor() {
		let qS = document.querySelector.bind(document);
		this._inputData = qS("#data");
		this._inputQuantidade = qS("#quantidade");
		this._inputValor = qS("#valor");

		this._list = new Bind(
			new NegotiationList(),
			new NegotiationsView(qS(".negotiationsView")),
			"addNegotiation",
			"flush"
		);
		this._message = new Bind(
			new Message(),
			new MessageView(qS(".messageView")),
			"text"
		);
	}

	adiciona(event) {
		event.preventDefault();

		this._list.addNegotiation(this._negotiationCreation());

		this._message.text = "Negociação concluída com sucesso";
		this._formClear();
	}

	negotiationImport() {
		let importer = new ImportService();

		Promise.all([
			importer.weekImporter(),
			importer.lastWeekImporter(),
			importer.lastBeforeWeekImporter(),
		])
			.then((negotiations) => {
				negotiations
					.reduce((flatArray, array) => flatArray.concat(array), [])
					.forEach((negotiation) =>
						this._list.addNegotiation(negotiation)
					);
				this._message.text = "Negociações importadas com sucesso.";
			})
			.catch((error) => (this._message.text = error));
	}
	flush() {
		this._list.flush();

		this._message.text = "Negociação apagada com sucesso.";
	}

	//Privadas
	_formClear() {
		this._inputData.value = "";
		this._inputData.focus();
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0;
	}

	_negotiationCreation() {
		return new Negociacao(
			DateHelper.textToDate(this._inputData),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}
}
