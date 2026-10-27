npm init
npm i -g typescript
tsc --version
tsc --init --sourcemap --rootDir src --outDir dist

To run TypeScript directly without compiling to JS manually, you need a runner. The best one right now is `tsx` - it's faster than `ts-node` and just works.

Here is the full setup, takes 30 seconds:

### 1. Setup your project (if you don't have one)

```bash
npm init -y
npm install typescript tsx @types/node -D
npx tsc --init
```

That creates `tsconfig.json` and installs everything.

### 2. Add auto-run scripts to `package.json`

Open `package.json` and add this in `scripts`:

```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "start": "tsx src/index.ts"
  }
}
```

- `dev` = runs automatically and restarts every time you save
- `start` = runs once

### 3. Create your file

Create folder `src` and file `src/index.ts`:

```typescript
// src/index.ts
console.log("Running TS automatically!");

function logSameLine(msg: string) {
  process.stdout.write(`\r${msg}`);
}

let i = 0;
setInterval(() => {
  logSameLine(`Count: ${i++} `);
}, 100);
```

### 4. Run it

```bash
npm run dev
```

Now every time you save `src/index.ts`, it will re-run automatically. No build step needed.

---

### Other options:

**If you want to use `ts-node` (older way):**
```bash
npm install ts-node -D
# then run
npx ts-node src/index.ts
```

**If you're on Node 22+ you can run TS natively without any package:**
```bash
node --experimental-strip-types src/index.ts
# with watch
node --experimental-strip-types --watch src/index.ts
```
But I still recommend `tsx` - it handles everything including `import` aliases and `.ts` imports without config headaches.

Want me to generate a ready `package.json` + `tsconfig.json` for you to copy-paste?