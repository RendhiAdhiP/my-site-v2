module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'next/core-web-vitals', // Konfigurasi bawaan Next.js untuk performa terbaik
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // Untuk TypeScript
        'prettier', // Integrasi dengan Prettier
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off', // Tidak perlu impor React di Next.js
        'react/prop-types': 'off', // Nonaktifkan jika Anda menggunakan TypeScript
        '@typescript-eslint/no-unused-vars': 'warn', // Hindari error untuk variabel yang tidak digunakan
        'no-console': 'warn', // Izinkan console.log tetapi beri peringatan
        'no-unused-vars': 'off', // Hindari konflik dengan @typescript-eslint/no-unused-vars
    },
};
