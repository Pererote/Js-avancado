class NegotiationsView extends View {
	constructor(element) {
		super(element);
	}

	_template(model) {
		return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${model.negotiations
				.map(
					(n) => `
                <tr>
                    <td>${DateHelper.DateToText(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>`
				)
				.join("")}
        </tbody>
        
        <tfoot>
            <td colspan="3">Volume Total</td>
            <td>${model.volumeTotal}</td>
        </tfoot>
    </table>`;
	}
}
