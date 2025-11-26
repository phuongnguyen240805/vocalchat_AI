// server/tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  format: 'esm',
  target: 'es2022',
  platform: 'node',
  entry: ['src/server.ts'],
  outDir: 'dist',
  clean: true,
  minify: false,
  sourcemap: true,
  // Đây là dòng quan trọng nhất: bảo tsup tự đọc tsconfig.json để resolve alias!
  tsconfig: 'tsconfig.json',
  // Giữ nguyên .ts extension trong import nếu cần (không bắt buộc)
  keepNames: true,
  // Nếu bạn dùng external package như socket.io, express,... thì để nguyên
  external: ['express', 'socket.io', 'mongoose'],
});
