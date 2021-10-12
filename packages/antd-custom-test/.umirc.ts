import { defineConfig } from 'umi';
import qbitdataTheme from 'antd-custom-zerotohero/dist/theme/qbitdata';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  theme: qbitdataTheme
});
