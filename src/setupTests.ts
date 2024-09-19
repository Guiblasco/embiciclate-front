import "@testing-library/jest-dom/vitest";
import server from "./mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.close());
