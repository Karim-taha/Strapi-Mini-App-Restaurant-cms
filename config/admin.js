module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c48d7c0d85ac9bfb6b0f5a9a59401ec2'),
  },
});
