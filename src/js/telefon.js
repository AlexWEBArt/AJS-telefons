export default function telefon(number) {
  const numFormated = number.match(/[\d]/g).join('');

  if (numFormated.slice(0, 2) === '86') {
    return Number(`+86${numFormated.slice(2)}`);
  }
  if (numFormated.slice(0, 2) === '89' || numFormated.slice(0, 2) === '79') {
    return Number(`+7${numFormated.slice(1)}`);
  }
  return 'номер телефона вашей страны не поддерживаеться в нашем приложении';
}
