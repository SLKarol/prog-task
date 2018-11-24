import bmi from '../bmi';

describe("Расчет относительной упитанности", () => {

  it("Рост 173см, вес 80кг - избыточный вес", function () {
    expect(bmi(173, 80))
      .toMatchObject({
        index: 26.7,
        eng: 'Overweight',
        rus: 'Избыточная масса'
      })
  });
  it("Рост 210см, вес 100кг - норма", function () {
    expect(bmi(210, 100))
      .toMatchObject({
        index: 22.7,
        eng: 'Normal weight',
        rus: 'Норма'
      })
  });
});