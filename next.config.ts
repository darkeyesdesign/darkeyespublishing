import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	basepath: process.env.NODE_ENV === 'production' ? '/darkeyespublishing/' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/darkeyespublishing/' : '',
};

export default nextConfig;
