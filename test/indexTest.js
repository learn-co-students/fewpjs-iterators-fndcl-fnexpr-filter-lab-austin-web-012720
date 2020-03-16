const sinon = require('sinon');

describe('index.js', () => {
  describe('findMatching()', () => {
    it('returns all drivers that match the passed in name', () => {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

      expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
      expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
    });

    it('returns matching drivers if case does not match but letters do', () => {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

      expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'bobby']);
    });

    it('returns an empty array if there is no match', () => {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

      expect(findMatching(drivers, 'Susan')).to.eql([]);
    });
  });

  describe('fuzzyMatch()', () => {
    const drivers = [];

    beforeEach(() => {
      drivers.length = 0;

      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    });

    it('returns a driver if beginning provided letters match', () => {
      expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
    });

    it('does not return drivers if only middle or ending letters match', () => {
      expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    });

    it('does not return drivers if only middle or ending letters match', () => {
      expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    });
  });

  describe('matchName()', () => {
    it('accesses the data structure to check if name matches', () => {
      const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh',
        },
        {
          name: 'Sammy',
          hometown: 'New York',
        },
        {
          name: 'Sally',
          hometown: 'Cleveland',
        },
        {
          name: 'Annette',
          hometown: 'Los Angeles',
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay',
        },
      ];

      expect(matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh',
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay',
        },
      ]);
    });
  });
});
