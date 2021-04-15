class NegotiationList {
	constructor() {
		this._negotiations = [];
	}

	addNegotiation(negotiation) {
		this._negotiations.push(negotiation);
	}

	get negotiations() {
		return [].concat(this._negotiations);
	}

	flush() {
		this._negotiations = [];
	}

	get volumeTotal() {
		return this._negotiations.reduce((total, n) => total + n.volume, 0.0);
	}
}
