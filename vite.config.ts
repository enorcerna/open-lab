import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import {ManifestV3Export, crx} from "@crxjs/vite-plugin";
import manifestJson from "./manifest.json";
const manifest = manifestJson as ManifestV3Export;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), crx({manifest})],
  server: {
    port: 1904
  },
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src")
    }
  }
});
