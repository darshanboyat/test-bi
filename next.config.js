module.exports = {

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable optimization only for production build
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        // Add any additional minification plugins here
      ];
    }

    return config;
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['braininventory.s3.us-east-2.amazonaws.com', 'd1u4arv5y5eda6.cloudfront.net'],
  },
  async redirects() {
    return [
      {
        source: "/custom-app-development",
        destination: "/mobile-development/custom-app-development",
        permanent: true,
      },
      {
        source: "/swift-app-development",
        destination: "/mobile-development/swift-development",
        permanent: true,
      },
      {
        source: "/react-native-development",
        destination: "/mobile-development/react-native-development",
        permanent: true,
      },
      {
        source: "/ios-app-development",
        destination: "/mobile-development/ios-development",
        permanent: true,
      },
      {
        source: "/flutter-app-development",
        destination: "/mobile-development/flutter-development",
        permanent: true,
      },
      {
        source: "/android-app-development",
        destination: "/mobile-development/android-development",
        permanent: true,
      },
      {
        source: "/angularjs-development",
        destination: "/web-development/angular-js-development",
        permanent: true,
      },
      {
        source: "/lamp-development",
        destination: "/web-development/lamp-development",
        permanent: true,
      },
      {
        source: "/mean-development",
        destination: "/web-development/mean-stack-development",
        permanent: true,
      },
      {
        source: "/mern-development",
        destination: "/web-development/mern-stack-development",
        permanent: true,
      },
      {
        source: "/nodejs-development",
        destination: "/web-development/node-js-development",
        permanent: true,
      },
      {
        source: "/reactjsdevelopment",
        destination: "/web-development/react-js-development",
        permanent: true,
      },
      {
        source: "/vue-js-development",
        destination: "/web-development/vue-js-development",
        permanent: true,
      },
      {
        source: "/hire-angular-js-developer",
        destination: "/hire-angular-js-developers",
        permanent: true,
      },
      {
        source: "/hire-ios-developer",
        destination: "/hire-ios-developers",
        permanent: true,
      },
      {
        source: "/business-application-development.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fintech-solutions.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/food-delivery-solutions.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ionic-app-development.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sports-app-development.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/testimonial.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/travel-app-development.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hire-dedicated-developers.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Careers.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/swift-app-development.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/social-media-app-development.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/get-ready-to-take-your-web-development-to-the-next-level-with-node-js-2",
        destination: "/post/get-ready-to-take-your-web-development-to-the-next-level-with-node-js",
        permanent: true,
      },
    ];
  },
};
