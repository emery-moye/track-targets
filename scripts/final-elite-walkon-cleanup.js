#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to remove walkon properties from elite conference schools
function removeEliteWalkonProperties() {
    console.log('🎯 Starting comprehensive walkon removal for elite conferences...');
    
    const filePath = path.join(__dirname, '../src/data/schoolStandards.ts');
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Elite conferences that should not have walk-on standards
    const eliteConferences = ['SEC', 'Big Ten', 'ACC', 'Big 12'];
    
    // Count initial walkon properties
    const initialWalkons = (content.match(/walkon:/g) || []).length;
    console.log(`📊 Initial walkon properties in file: ${initialWalkons}`);
    
    let totalRemoved = 0;
    
    // Process each elite conference
    eliteConferences.forEach(conference => {
        console.log(`\n🏫 Processing ${conference} schools...`);
        
        // Use a more aggressive approach to find and clean all instances
        let conferenceRemoved = 0;
        
        // Pattern to match school objects for this conference
        const schoolPattern = new RegExp(
            `(\\{[^{}]*?conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?)(\\}\\s*(?:,\\s*\\{|\\s*\\]))`,
            'g'
        );
        
        content = content.replace(schoolPattern, (match, schoolContent, ending) => {
            // Count and remove walkon properties
            const walkonMatches = schoolContent.match(/,\s*walkon:\s*"[^"]*"/g) || [];
            const walkonCount = walkonMatches.length;
            
            if (walkonCount > 0) {
                console.log(`  📝 Found school with ${walkonCount} walkon properties - removing...`);
                const cleaned = schoolContent.replace(/,\s*walkon:\s*"[^"]*"/g, '');
                conferenceRemoved += walkonCount;
                return cleaned + ending;
            }
            
            return match;
        });
        
        console.log(`  ✅ Removed ${conferenceRemoved} walkon properties from ${conference}`);
        totalRemoved += conferenceRemoved;
    });
    
    // Final verification
    const finalWalkons = (content.match(/walkon:/g) || []).length;
    
    console.log(`\n📈 Summary:`);
    console.log(`Initial walkon properties: ${initialWalkons}`);
    console.log(`Final walkon properties: ${finalWalkons}`);
    console.log(`Total removed: ${totalRemoved}`);
    console.log(`Calculated removed: ${initialWalkons - finalWalkons}`);
    
    if (totalRemoved > 0) {
        // Write the updated content back
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('✅ File updated successfully!');
        
        // Double-check by searching for remaining elite conference walkons
        console.log(`\n🔍 Verification:`);
        eliteConferences.forEach(conference => {
            const regex = new RegExp(`conference:\\s*"${conference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?walkon:`, 'g');
            const remaining = (content.match(regex) || []).length;
            if (remaining > 0) {
                console.log(`⚠️  ${conference}: ${remaining} walkon references still found`);
            } else {
                console.log(`✅ ${conference}: Clean (no walkon properties)`);
            }
        });
        
    } else {
        console.log('ℹ️ No walkon properties found to remove');
    }
    
    console.log('\n🎉 Operation completed!');
}

// Run the cleanup
removeEliteWalkonProperties();