import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const BACKUP_DIR = path.join(__dirname, 'public', 'originals');

// Large files that need optimization
const FILES_TO_OPTIMIZE = [
  'wei-final-1.png',
  'Work-Portrait.png', 
  'wei-1.png',
  'wireframe-pic.png',
  'wei-2.png',
  'wei-3.png',
  'Portrait.png',
  'Bio-Pic.png',
  'Seated-Pic.png',
  'Portrait-landscape.png',
  'matching-table.jpg',
  'bp-wireframe-sketches.png',
  'blueprint-sketch-to-final.png'
];

async function createBackupDir() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log('📁 Created backup directory');
  }
}

async function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024 / 1024).toFixed(2);
  } catch {
    return 0;
  }
}

async function optimizeImage(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const backupPath = path.join(BACKUP_DIR, filename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return;
  }

  // Create backup
  fs.copyFileSync(inputPath, backupPath);
  
  const originalSize = await getFileSize(inputPath);
  
  // Create WebP filename
  const ext = path.extname(filename);
  const nameWithoutExt = path.basename(filename, ext);
  const webpFilename = `${nameWithoutExt}.webp`;
  const outputPath = path.join(PUBLIC_DIR, webpFilename);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    
    // Determine max width based on file type
    let maxWidth = 1000;
    if (filename.includes('Portrait') || filename.includes('Bio-Pic') || filename.includes('Seated-Pic')) {
      maxWidth = 800;
    }
    
    await sharp(inputPath)
      .resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const newSize = await getFileSize(outputPath);
    const savings = originalSize > 0 ? ((originalSize - newSize) / originalSize * 100).toFixed(1) : 0;
    
    console.log(`✅ ${filename} -> ${webpFilename}`);
    console.log(`   📏 ${metadata.width}x${metadata.height} -> max ${maxWidth}px width`);
    console.log(`   💾 ${originalSize}MB -> ${newSize}MB (${savings}% savings)`);
    
    // Remove original
    fs.unlinkSync(inputPath);
    console.log(`   🗑️  Removed original ${filename}\n`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
  }
}

async function cleanupFiles() {
  // Remove .DS_Store files
  const dsStorePath = path.join(PUBLIC_DIR, '.DS_Store');
  if (fs.existsSync(dsStorePath)) {
    fs.unlinkSync(dsStorePath);
    console.log('🗑️  Removed .DS_Store from public/');
  }

  // Remove HelloWorld component
  const helloWorldPath = path.join(__dirname, 'src', 'components', 'HelloWorld.vue');
  if (fs.existsSync(helloWorldPath)) {
    fs.unlinkSync(helloWorldPath);
    console.log('🗑️  Removed unused HelloWorld.vue component');
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  await createBackupDir();
  await cleanupFiles();
  
  console.log('🖼️  Optimizing large images...\n');
  
  for (const filename of FILES_TO_OPTIMIZE) {
    await optimizeImage(filename);
  }
  
  console.log('✨ Optimization complete!');
  console.log('📁 Original files backed up to ./public/originals/');
  console.log('\n⚠️  Remember to update your Vue components to use .webp extensions!');
}

main().catch(console.error);