export default {
    get: jest.fn(() => Promise.resolve({ meetups: {} })),
    post: jest.fn(() => Promise.resolve({ user: {} }))
  };