/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
		domains: ['courses-top.ru']
	},
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      options: {
			prettier: false,
	      svgo: true,
	      svgoConfig: {
				plugins: [{
					name: 'preset-default',
					params: { overrides: { removeViewBox: false } }
				}]
	      },
	      titleProp: true,
	      replaceAttrValues: {
				['#7653FC']: 'currentColor',
		      ['#787D85']: 'currentColor'
			}
      }
    })

    return config
  }
}
