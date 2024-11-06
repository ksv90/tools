export default {
  '**/*.{ts,js}': ['eslint --fix', 'prettier --loglevel=error --write .'],
  '**/*.json': ['prettier --loglevel=error --write .'],
};
