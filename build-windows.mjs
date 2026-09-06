// Give Windows libuv time to close prerender handles before the CLI exits.
// Preserve the CLI's exit code, including all compilation failures.
const exit = process.exit.bind(process);
if (process.platform === 'win32') {
  process.exit = (code = 0) => { setTimeout(() => exit(code), 500); };
}
process.argv = [process.argv[0], 'vinext', 'build'];
await import('./node_modules/vinext/dist/cli.js');

