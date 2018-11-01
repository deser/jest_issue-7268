require('../1 - Copy.js');

describe('Jest is the best', () => {
    test(`should be ok`, () => {
		let i = 0;
		while(i++ < 1000000000);
		
		expect(1).toBe(1);
	});
});
