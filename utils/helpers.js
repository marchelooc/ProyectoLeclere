import fs from 'fs';
import path from 'path';

/**
 * Genera un path para guardar un screenshot.
 * Crea la carpeta si no existe.
 * @param {string} name - Nombre base del archivo.
 * @returns {string} Ruta completa al archivo.
 */
export function screenshotPath(name) {
  const outDir = path.join('reports', 'screenshots');

  // crear carpeta si no existe
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // timestamp YYYYMMDD_HHMMSS
  const ts = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace('T', '_')
    .split('.')[0];

  return path.join(outDir, `${ts}_${name}.png`);
}

