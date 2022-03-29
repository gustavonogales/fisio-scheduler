import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
