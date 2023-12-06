export const organizations = {
  DEFAULT_ORG_KEY: process.env.ORG_KEY,

  data: {
    WCMC: {
      ORG_NAME: "WCMC",
      THEME_FILE: "light.theme",
      ORG_SERVICE_NUMBER: "626-338-8481",
      ORG_SUPPORT_EMAIL: "info@elifeamerica.com",
      ORG_ADDRESS: "910 S Sunset Ave Suite # 1, West Covina CA 91790, LA, USA",
      ORG_LOGO_URL: "/images/logo-white.svg",
      ORG_LOGIN_LOGO_URL: "/images/logo.png",
      settings: {
        pricing: false,
        testimonial: false,
        embedTicketUrlToSms: false,
        signUp: false,
      },
      replace: {
        email_us: "Email Me",
        message_us: "Message Us",
      },
    },

    // WCMC: {
    //   ORG_NAME: "KNTMG",
    //   ORG_SERVICE_NUMBER: "(626) 263-4999",
    //   ORG_SUPPORT_EMAIL: "it.supports@ktdoctor.com",
    //   ORG_ADDRESS: "910 S Sunset Ave Suite # 1, West Covina CA 91790, LA, USA",
    //   ORG_LOGO_URL: "/images/logo-white.svg",
    //   ORG_LOGIN_LOGO_URL: "/images/logo.svg",
    //   settings: {
    //     pricing: false,
    //     testimonial: false,
    //     embedTicketUrlToSms: false,
    //     signUp: false,
    //   },
    // },

    // ladmc: {
    //   ORG_NAME: "LADMC",
    //   ORG_SERVICE_NUMBER: "+1 213 348 1500",
    //   ORG_SUPPORT_EMAIL: "support@ladowntownmc.com",
    //   ORG_ADDRESS:
    //     "1711, West Temple Street, Los Angeles, <br/> California 90026",
    //   ORG_LOGO_URL: "/images/ladmc-logo.png",
    //   ORG_LOGIN_LOGO_URL: "/images/ladmc-logo-colored.png",
    //   settings: {
    //     pricing: false,
    //     testimonial: false,
    //     embedTicketUrlToSms: false,
    //     signUp: false,
    //   },
    // },
  },
};
