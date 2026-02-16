# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and oxc linting.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## oxc Linter Configuration

This project uses [oxc](https://oxc.rs) for lightning-fast linting. The configuration is in `oxlint.json`.

To run the linter:

```bash
# Check for issues
pnpm lint

# Auto-fix issues
pnpm lint:fix
```

oxc provides built-in rules for TypeScript, React, JSX accessibility, and more. To customize rules, edit `oxlint.json`:

```json
{
  "rules": {
    "typescript": "warn",
    "react": "warn",
    "jsx-a11y": "warn",
    "unicorn": "warn"
  },
  "ignorePattern": [
    "dist/**",
    "node_modules/**"
  ]
}
```

For more information on oxc rules and configuration, visit the [oxc documentation](https://oxc.rs/docs/guide/usage/linter.html).
