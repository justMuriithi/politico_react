export default {
    get: jest.fn(() => Promise.resolve({ offices: {} })),
    post: jest.fn(() => Promise.resolve({ user: {} }))
  };