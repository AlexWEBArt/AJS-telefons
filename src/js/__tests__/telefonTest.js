import telefon from '../telefon';

test('telefon validate', () => {
  const control = telefon('8-10-7-7172-12345');
  const resultRF1 = telefon('8 (947) 874-39-04');
  const resultRF2 = telefon('+7 954 324 56 08');
  const resultCH = telefon('+86 956 348 5672');

  expect(control).toBe('номер телефона вашей страны не поддерживаеться в нашем приложении');
  expect(resultRF1).toBe(+79478743904);
  expect(resultRF2).toBe(+79543245608);
  expect(resultCH).toBe(+869563485672);
});
