export default {

    addThousandSeparator(value: number, decimalCases: number = 2): string {
        return value
                .toFixed(decimalCases)
                .replace('.', ',')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    },

    /**
     * Format a value as Brazilian real.
     * @param {number} value 
     * @returns {string}
     */
    toBRL(value: number): string {
        const formattedValue: string = this.addThousandSeparator(value);
        return `R$ ${formattedValue}`;
    },

    /**
     * Return a random INT between max(inclusive) and min(inclusive) values.
     * @param {number} max 
     * @param {number} min 
     * @returns {number}
     */
    getRandomNumber(max: number, min: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
