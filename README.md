# tailwind-typed

Type-safe Tailwind CSS class names with auto-generated types

## Installation

```bash
npm install -D tailwind-typed
```

## Usage

Generate type definitions from your Tailwind config:

```bash
npx tailwind-typed generate --config ./src/app/globals.css
```

```css
/* global.css */
@import "tailwindcss";
```

This will create a `system/tailwind-types.ts` file with all Tailwind utility classes. Then use in your code:

```typescript
import { className } from "../../system/tailwind-types";

export default async function Home() {
  return (
    <div>
      <p className={className("flex", "text-red-500", "hover:text-blue-500")}>
        hello world
      </p>
    </div>
  );
}
```

If you specify a non-existent class name (e.g., a typo like "typo:text-blue-500"), a type error will occur.
This allows you to catch incorrect class names at compile time.

```typescript
export default async function Home() {
  return (
    <div>
      <p className={className("typo:text-blue-500")}>hello world</p>
    </div>
  );
}
```

You can specify variants (e.g., "lg:hover:text-blue-500").
However, please note that only up to two levels of variants are supported.
This limitation is due to TypeScript's type checking constraints.

```typescript
export default async function Home() {
  return (
    <div>
      <p className={className("lg:hover:text-blue-500")}>hello world</p>
    </div>
  );
}
```

> If you do not want type checking, use unstrictClassName.

```typescript
export default async function Home() {
  return (
    <div>
      <p className={unstrictClassName("unstrictClassName")}>hello world</p>
    </div>
  );
}
```

### Options

- `-c, --config <path>`: Path to your Tailwind CSS file (required)
- `-o, --output <path>`: Output file path (default: `./tailwind-types.ts`)

## Requirements

- Tailwind CSS v4.0+

## License

MIT
