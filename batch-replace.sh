#!/bin/bash

# Script to remove walkon properties from elite conference schools
# This uses sed to perform bulk replacements

FILE="./src/data/schoolStandards.ts"

echo "Removing walkon properties from elite conference schools..."

# Create a backup
cp "$FILE" "${FILE}.backup"

# Remove all walkon properties using sed
# This removes patterns like: , walkon: "value"
sed -i 's/, walkon: "[^"]*"//g' "$FILE"

echo "Replacement complete!"
echo "Backup created at: ${FILE}.backup"

# Show statistics
echo "Original walkon count: $(grep -c 'walkon:' "${FILE}.backup" || echo '0')"
echo "Remaining walkon count: $(grep -c 'walkon:' "$FILE" || echo '0')"