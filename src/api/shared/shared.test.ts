import { createQueryParams } from "./shared";

const result = "?page=4&limit=10&test=20&active=true"

test('Create query params', () => {
  const query = createQueryParams({
    page: 4,
    limit: 10,
    test: "20",
    active: true
  })
  expect(query).toBe(result)
});
