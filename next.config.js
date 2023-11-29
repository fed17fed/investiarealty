if (!URL.canParse(process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL)) {
    throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `)
  }
  
  const { protocol, hostname, port, pathname } = new URL(
    process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL
  )
  
  /** @type {import('next').NextConfig} */
  
  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cv.test.ut.in.ua',
          // port: '',
          // pathname: '/**',
        },
      ],
    },
  }
  
  
  