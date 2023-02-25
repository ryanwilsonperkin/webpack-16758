# Reproduction for Webpack issue 16758

This repo serves as a reproduction for https://github.com/webpack/webpack/issues/16758

It contains a single entrypoint at src/index.js that dynamically imports ten thousand simple modules with a single export. The goal is to produce a large number of assets to highlight the performance degradation that happens in the RealContentHashPlugin under this stress.

## Usage

1. `yarn` to install deps
2. `yarn webpack build --mode=production --progress=profile` to build and monitor progress

On my machine (Macbook Pro, M1, 16Gb Ram, 8 Cores) this takes ~54s.
With the patch applied from https://github.com/webpack/webpack/pull/16759, this is reduced to ~32s