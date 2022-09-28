// write unit tests for calculate.js

import calculate from './calculate';

// test for AC button

test('AC button', () => {
    const obj = {
        total: 5,
        next: 5,
        operation: '+',
    };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
        total: null,
        next: null,
        operation: null,
    });
});

// test for equal button

test('equal button', () => {
    const obj = {
        total: 5,
        next: 5,
        operation: '+',
    };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
        total: "10",
        next: null,
        operation: null,
    });
});

// test for number button

test('number button', () => {
    const obj = {
        total: 5,
        next: 5,
        operation: '+',
    };
    const buttonName = '5';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
        total: 5,
        next: "55",
        operation: '+',
    });
});