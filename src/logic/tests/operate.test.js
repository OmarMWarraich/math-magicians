import operate from '../operate';

describe('operate', () => {
  it('should return 5 when 2 and 3 are passed', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });
  it('should return -1 when 2 and 3 are passed', () => {
    expect(operate(2, 3, '-')).toEqual('-1');
  });
  it('should return 6 when 2 and 3 are passed', () => {
    expect(operate(2, 3, 'x')).toEqual('6');
  });
  it('should return 0.67 when 2 and 3 are passed', () => {
    expect(operate(2, 3, '÷')).toEqual('0.67');
  });
  it('should return 2 when 2 and 3 are passed', () => {
    expect(operate(2, 3, '%')).toEqual('2');
  });
});
