# tailwind-typed

Type-safe Tailwind CSS class names with auto-generated types

## Installation

```bash
npm install -D tailwind-typed
```

## Usage

Generate type definitions from your Tailwind config:

```bash
npx tailwind-typed generate --config ./globals.css
```

This will create a `tailwind-types.ts` file with all Tailwind utility classes.

### Options

- `-c, --config <path>`: Path to your Tailwind CSS file (required)
- `-o, --output <path>`: Output file path (default: `./tailwind-types.ts`)

### Example

```bash
npx tailwind-typed generate --config ./src/app/globals.css --output ./src/tailwind.ts
```

Then use in your code:

```typescript
import { className, TailwindClass } from './tailwind-types';

const classes = className('flex', 'bg-blue-500', 'hover:bg-blue-600');
```

## Requirements

- Tailwind CSS v4.0+

## License

MIT