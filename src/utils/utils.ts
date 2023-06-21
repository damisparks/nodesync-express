export const contentSecurityPolicy = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:', 'validator.swagger.io'],
    styleSrc: ["'self'", 'fonts.googleapis.com', "'unsafe-inline'"],
    fontSrc: ["'self'", 'fonts.gstatic.com', 'data:'],
    objectSrc: ["'none'"],
    formAction: ["'self'"],
  },
};
