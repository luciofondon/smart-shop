import { getHoursDiff } from '../date-util';

test('DateUtils -> Check hour diff (9 hours - 6 hours = 3 hours)', () => {
  expect(getHoursDiff(new Date(2022, 1, 24, 6, 44, 0), new Date(2022, 1, 24, 9, 50, 30))).toBe(3);
});
test('DateUtils -> Check hour diff (1 day - 0 hours = 24 hours)', () => {
  expect(getHoursDiff(new Date(2022, 1, 23, 9, 40, 0), new Date(2022, 1, 24, 9, 40, 0))).toBe(24);
});
