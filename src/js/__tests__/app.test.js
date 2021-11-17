import ErrorRepository from '../app';

const repoErr = new ErrorRepository();

test('test ErrorRepository', () => {
  repoErr.errorMap.set(1, 'Имя должно быть строкой и содержать от 2 до 10 символов.');
  repoErr.errorMap.set(2, 'Такой персонаж не существует.');
  repoErr.errorMap.set(3, 'Описание недоступно');
  repoErr.errorMap.set(404, 'Страница не найдена.');

  expect(repoErr.translate(2)).toBe('Такой персонаж не существует.');
});

test('test ErrorRepository (Unknown error)', () => {
  repoErr.errorMap.set(1, 'Имя должно быть строкой и содержать от 2 до 10 символов.');
  repoErr.errorMap.set(2, 'Такой персонаж не существует.');
  repoErr.errorMap.set(3, 'Описание недоступно');
  repoErr.errorMap.set(404, 'Страница не найдена.');

  expect(repoErr.translate(10)).toBe('Unknown error.');
});
