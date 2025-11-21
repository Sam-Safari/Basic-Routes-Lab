const { cleanup } = require('@testing-library/react');
require('@testing-library/jest-dom');
require('whatwg-fetch');

afterEach(() => {
    cleanup();
});