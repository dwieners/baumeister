# baumeister

A system for building UI components

## Installation
### Yarn
```bash
$ yarn add @apppilots/baumeister
```
### NPM
```bash
$ npm install @apppilots/baumeister
```

## Usage

```tsx
import { Box } from '@apppilots/baumeister';


const Welcome = () => {
  return (
      <Box
        paddingHorizontal={'m'}
        paddingVertical={'m'}
        backgroundColor={'red'}
      >
        <Text>Hello Baumeister!</Text>
      </Box>
  );
};

export default Welcome;

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
