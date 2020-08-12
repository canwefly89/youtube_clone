import { expect } from 'chai';
import characterFrequency from '../lib/02characterFrequency';
// 이런.. import에 대해 아직 공부해보지 않으셨나요?
// import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// export: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

describe('Character Frequency', function () {
  it('should pass base cases', function () {
    expect(characterFrequency('mississippi')).to.eql([
      ['i', 4],
      ['s', 4],
      ['p', 2],
      ['m', 1]
    ]);
    expect(characterFrequency('miaaiaaippi')).to.eql([
      ['a', 4],
      ['i', 4],
      ['p', 2],
      ['m', 1]
    ]);
  });

  // TODO: Add your own test cases
});
