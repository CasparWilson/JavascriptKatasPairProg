import { getMostCommonLetters } from "./getMostCommonLetters";
import { test, expect } from "@jest/globals";

test("works one word", () => {
    const inputText = 'hello'
    const numberOfWinners = 3
    const expected = [['l', 2], ['e', 1], ['h', 1]]
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

  test("Ignores capitalization", () => {
    const inputText = 'HELLO'
    const numberOfWinners = 2
    const expected = [['l', 2],['e', 1]]
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

  test("works two words, ingores punctuation", () => {
    const inputText = 'Hello World!'
    const numberOfWinners = 2
    const expected = [['l', 3],['o', 2]]
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

  test("ingores punctuation, numbers, special char", () => {
    const inputText = 'Hello, caspar#567'
    const numberOfWinners = 2
    const expected = [['a', 2],['l', 2]]
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

  test("test for empty string", () => {
    const inputText = ''
    const numberOfWinners = 4
    const expected = []
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

  test("test for only numbers string", () => {
    const inputText = '123456'
    const numberOfWinners = 3
    const expected = []
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

  test("test for 0 numberOfWinners", () => {
    const inputText = 'helloWorld'
    const numberOfWinners = 0
    const expected = []
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

  test("test for numberOfWinners greater than number of letters", () => {
    const inputText = 'hi'
    const numberOfWinners = 3
    const expected = [['h', 1], ['i', 1]]
    const result = getMostCommonLetters(inputText, numberOfWinners)
    expect(result).toEqual(expected)
  });

