class DateHelper {

    constructor() {
        throw new Error('|||This class shoud not be instanced|||');
    }

    static DateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    }

    static textToDate(text) {
        if (/\d{4}-\d{2}-\d{2}/.test(text)) throw new Error('Deve estar no formato aaaa/mm/dd')

        return new Date(...text.value.split('-').map((n, i) => n - i % 2));

    }
}