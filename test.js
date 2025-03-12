import * as icons from 'lucide-react';
import { writeFileSync } from 'node:fs';

// Get all exported keys (includes non-icon exports)
const allExports = Object.keys(icons);

// Filter out common non-icon exports (adjust based on your package version)
const iconNames = allExports.filter(name => 
  !['createLucideIcon', 'LucideProvider'].includes(name)
);

const content = `export const icons = ${JSON.stringify(iconNames, null, 2)};`;
writeFileSync("icons.js", content, "utf8");