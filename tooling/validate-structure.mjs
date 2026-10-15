import { access } from "node:fs/promises";

const requiredPaths = [
  ".github/pull_request_template.md",
  ".github/workflows/ci.yml",
  "CONTRIBUTING.md",
  "README.md",
  "apps/api/README.md",
  "apps/web/README.md",
  "docs/architecture/adrs/README.md",
  "docs/domain/context-map.md",
  "docs/domain/domain-model.md",
  "docs/engineering/development-process.md",
  "docs/product/prd-mvp-v1.md",
  "infra/README.md",
];

const missingPaths = [];

for (const path of requiredPaths) {
  try {
    await access(path);
  } catch {
    missingPaths.push(path);
  }
}

if (missingPaths.length > 0) {
  console.error("Required repository paths are missing:");
  for (const path of missingPaths) {
    console.error(`- ${path}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Repository structure is valid (${requiredPaths.length} paths checked).`,
  );
}
