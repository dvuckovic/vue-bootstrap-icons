module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/tests/unit/mocks/fileMock.js',
    },
};
