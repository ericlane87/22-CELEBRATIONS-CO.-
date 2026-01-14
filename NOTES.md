# Notes

## Easy product updates for non-technical users

Goal: Let a non-technical user keep the product list updated without editing code.

Proposed flow:
- Provide a small local tool that outputs `products.json`.
- Each product includes an `image` field (example: `gift-box-01.jpg`).
- User drops images into an `images/` folder.
- Site reads `products.json` and renders images via `<img src="images/<image>">`.

Options for the local tool:
1) CLI script (Node) that converts `products.csv` to `products.json`.
2) Tiny local web form with a "Save" button that writes `products.json`.

Open questions:
- User OS (Mac/Windows)?
- Is Node.js installed?
- Prefer CLI script or local web UI?

