# List Overlap Check

Compare two lists and identify exact matches or entries unique to one list.

## Run

Use Node.js 20+. Run `node cli.mjs example.txt`, or pipe UTF-8 text into `node cli.mjs -`. Redirect stdout to keep the result. Other Node.js projects can import `transform` from `./transform.mjs`.

## Example

Separate the lists with a line containing ---. The bundled sample produces output including:

```text
Only second
green
```

## Limitations

Input is processed in memory. Use the format shown in the example file.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for checks and [CHANGELOG.md](CHANGELOG.md) for changes.

## License

[MIT License](LICENSE). Copyright (c) 2026 list-overlap-check contributors.
