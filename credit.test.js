const readline = require("readline");
const obscureCreditCard = require("./creditCardObscure");

jest.mock("readline");

describe("obscureCreditCard", () => {
  let mockQuestion;
  let logSpy;

  beforeEach(() => {
    mockQuestion = jest.fn();
    readline.createInterface.mockReturnValue({
      question: mockQuestion,
      close: jest.fn(),
    });
    logSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should print an obscured credit card number", () => {
    obscureCreditCard();
    mockQuestion.mock.calls[0][1]("1234567890123456");
    expect(logSpy).toHaveBeenCalledWith(
      "Obfuscated Credit Card:",
      "************3456"
    );
  });

  it("should print an error for invalid credit card number", () => {
    obscureCreditCard();
    mockQuestion.mock.calls[0][1]("abc");
    expect(logSpy).toHaveBeenCalledWith("Invalid Credit Card");
  });

  it("should print an error for credit card number less than 12 digits", () => {
    obscureCreditCard();
    mockQuestion.mock.calls[0][1]("12345678901");
    expect(logSpy).toHaveBeenCalledWith("Invalid Credit Card");
  });

  it("should print an error for credit card number more than 16 digits", () => {
    obscureCreditCard();
    mockQuestion.mock.calls[0][1]("12345678901234567");
    expect(logSpy).toHaveBeenCalledWith("Invalid Credit Card");
  });
});
