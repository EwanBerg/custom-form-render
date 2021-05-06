import copy from 'rollup-plugin-copy';

export default {
  cjs: 'rollup',
  esm: {
    type: 'rollup',
    importLibToEs: true,
  },
  extraRollupPlugins: [
    copy({
      targets: [{ src: 'src/index.d.ts', dest: 'dist/' }],
    }),
  ],
  extraBabelPlugins: [
  ],
};
