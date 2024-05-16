/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // notion image doamin

  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );
    // https://github.com/langchain-ai/langchainjs/issues/943#issuecomment-1544928533
    config.externals = [...config.externals, 'hnswlib-node'];
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  staticPageGenerationTimeout: 120, // 타임아웃 시간을 120초로 설정
};

export default nextConfig;
