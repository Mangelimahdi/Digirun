const categories = [
  // =========================================
  // لپ تاپ و کامپیوتر
  // =========================================

  {
    id: 1,
    title: "لپ تاپ و کامپیوتر",
    slug: "laptop-computer",

    subCategories: [
      {
        id: 101,
        title: "لپ تاپ",
        slug: "laptop",

        subCategories: [
          {
            id: 1001,
            title: "لپ تاپ ایسوس",
            slug: "asus-laptop",

            subCategories: [
              {
                id: 10001,
                title: "ایسوس VivoBook",
                slug: "asus-vivobook",
                subCategories: [],
              },
            ],
          },

          {
            id: 1002,
            title: "لپ تاپ لنوو",
            slug: "lenovo-laptop",

            subCategories: [
              {
                id: 10002,
                title: "لنوو IdeaPad",
                slug: "lenovo-ideapad",
                subCategories: [],
              },
            ],
          },

          {
            id: 1003,
            title: "لپ تاپ اچ پی",
            slug: "hp-laptop",

            subCategories: [
              {
                id: 10003,
                title: "اچ پی Pavilion",
                slug: "hp-pavilion",
                subCategories: [],
              },
            ],
          },
        ],
      },

      {
        id: 102,
        title: "کامپیوتر رومیزی",
        slug: "desktop-computer",

        subCategories: [
          {
            id: 1004,
            title: "کامپیوتر اداری",
            slug: "office-desktop",
            subCategories: [],
          },
          {
            id: 1005,
            title: "کامپیوتر گیمینگ",
            slug: "gaming-desktop",
            subCategories: [],
          },
        ],
      },

      {
        id: 103,
        title: "قطعات کامپیوتر",
        slug: "computer-components",

        subCategories: [
          {
            id: 1006,
            title: "پردازنده",
            slug: "cpu",
            subCategories: [],
          },
          {
            id: 1007,
            title: "کارت گرافیک",
            slug: "graphics-card",
            subCategories: [],
          },
          {
            id: 1008,
            title: "مادربرد",
            slug: "motherboard",
            subCategories: [],
          },
          {
            id: 1009,
            title: "حافظه رم",
            slug: "ram",
            subCategories: [],
          },
          {
            id: 1010,
            title: "حافظه اس اس دی",
            slug: "ssd",
            subCategories: [],
          },
          {
            id: 1011,
            title: "هارد دیسک",
            slug: "hard-disk",
            subCategories: [],
          },
        ],
      },

      {
        id: 104,
        title: "لوازم جانبی کامپیوتر",
        slug: "computer-accessories",

        subCategories: [
          {
            id: 1012,
            title: "ماوس",
            slug: "mouse",
            subCategories: [],
          },
          {
            id: 1013,
            title: "کیبورد",
            slug: "keyboard",
            subCategories: [],
          },
          {
            id: 1014,
            title: "پد ماوس",
            slug: "mouse-pad",
            subCategories: [],
          },
          {
            id: 1015,
            title: "وبکم",
            slug: "webcam",
            subCategories: [],
          },
        ],
      },
    ],
  },

  // =========================================
  // موبایل و تبلت
  // =========================================

  {
    id: 2,
    title: "موبایل و تبلت",
    slug: "mobile-tablet",

    subCategories: [
      {
        id: 201,
        title: "گوشی موبایل",
        slug: "mobile-phone",

        subCategories: [
          {
            id: 2001,
            title: "گوشی سامسونگ",
            slug: "samsung-phone",

            subCategories: [
              {
                id: 20001,
                title: "سری گلکسی A",
                slug: "samsung-galaxy-a",
                subCategories: [],
              },
              {
                id: 20002,
                title: "سری گلکسی S",
                slug: "samsung-galaxy-s",
                subCategories: [],
              },
            ],
          },

          {
            id: 2002,
            title: "گوشی شیائومی",
            slug: "xiaomi-phone",

            subCategories: [
              {
                id: 20003,
                title: "سری ردمی نوت",
                slug: "xiaomi-redmi-note",
                subCategories: [],
              },
              {
                id: 20004,
                title: "سری ردمی",
                slug: "xiaomi-redmi",
                subCategories: [],
              },
            ],
          },

          {
            id: 2003,
            title: "گوشی اپل",
            slug: "apple-phone",

            subCategories: [
              {
                id: 20005,
                title: "آیفون",
                slug: "iphone",
                subCategories: [],
              },
            ],
          },

          {
            id: 2004,
            title: "گوشی سایر برندها",
            slug: "other-phone-brands",
            subCategories: [],
          },
        ],
      },

      {
        id: 202,
        title: "تبلت",
        slug: "tablet",

        subCategories: [
          {
            id: 2005,
            title: "آیپد",
            slug: "ipad",
            subCategories: [],
          },
          {
            id: 2006,
            title: "تبلت سامسونگ",
            slug: "samsung-tablet",
            subCategories: [],
          },
          {
            id: 2007,
            title: "تبلت شیائومی",
            slug: "xiaomi-tablet",
            subCategories: [],
          },
          {
            id: 2008,
            title: "تبلت سایر برندها",
            slug: "other-tablet-brands",
            subCategories: [],
          },
        ],
      },

      {
        id: 203,
        title: "لوازم جانبی موبایل",
        slug: "mobile-accessories",

        subCategories: [
          {
            id: 2009,
            title: "شارژر",
            slug: "charger",
            subCategories: [],
          },
          {
            id: 2010,
            title: "کابل",
            slug: "cable",
            subCategories: [],
          },
          {
            id: 2011,
            title: "قاب و کاور",
            slug: "case-cover",
            subCategories: [],
          },
          {
            id: 2012,
            title: "محافظ صفحه نمایش",
            slug: "screen-protector",
            subCategories: [],
          },
          {
            id: 2013,
            title: "پاوربانک",
            slug: "power-bank",
            subCategories: [],
          },
          {
            id: 2014,
            title: "هولدر موبایل",
            slug: "mobile-holder",
            subCategories: [],
          },
        ],
      },
    ],
  },

  // =========================================
  // هدفون و هندزفری
  // =========================================

  {
    id: 3,
    title: "هدفون و هندزفری",
    slug: "headphones-earphones",

    subCategories: [
      {
        id: 301,
        title: "هدفون",
        slug: "headphone",

        subCategories: [
          {
            id: 3001,
            title: "هدفون بی‌سیم",
            slug: "wireless-headphone",

            subCategories: [
              {
                id: 30001,
                title: "هدفون بی‌سیم سونی",
                slug: "sony-wireless-headphone",
                subCategories: [],
              },
              {
                id: 30002,
                title: "هدفون بی‌سیم جی‌بی‌ال",
                slug: "jbl-wireless-headphone",
                subCategories: [],
              },
            ],
          },

          {
            id: 3002,
            title: "هدفون سیمی",
            slug: "wired-headphone",
            subCategories: [],
          },
        ],
      },

      {
        id: 302,
        title: "هندزفری",
        slug: "earphone",

        subCategories: [
          {
            id: 3003,
            title: "هندزفری بی‌سیم",
            slug: "wireless-earphone",
            subCategories: [],
          },
          {
            id: 3004,
            title: "هندزفری سیمی",
            slug: "wired-earphone",
            subCategories: [],
          },
        ],
      },

      {
        id: 303,
        title: "ایرباد",
        slug: "earbuds",

        subCategories: [
          {
            id: 3005,
            title: "ایرباد بی‌سیم",
            slug: "wireless-earbuds",
            subCategories: [],
          },
        ],
      },

      {
        id: 304,
        title: "هدست گیمینگ",
        slug: "gaming-headset",

        subCategories: [
          {
            id: 3006,
            title: "هدست گیمینگ بی‌سیم",
            slug: "wireless-gaming-headset",
            subCategories: [],
          },
          {
            id: 3007,
            title: "هدست گیمینگ سیمی",
            slug: "wired-gaming-headset",
            subCategories: [],
          },
        ],
      },
    ],
  },

  // =========================================
  // ساعت و پوشیدنی هوشمند
  // =========================================

  {
    id: 4,
    title: "ساعت و پوشیدنی هوشمند",
    slug: "smart-wearables",

    subCategories: [
      {
        id: 401,
        title: "ساعت هوشمند",
        slug: "smart-watch",

        subCategories: [
          {
            id: 4001,
            title: "ساعت هوشمند اپل",
            slug: "apple-watch",
            subCategories: [],
          },
          {
            id: 4002,
            title: "ساعت هوشمند سامسونگ",
            slug: "samsung-watch",
            subCategories: [],
          },
          {
            id: 4003,
            title: "ساعت هوشمند شیائومی",
            slug: "xiaomi-watch",
            subCategories: [],
          },
          {
            id: 4004,
            title: "ساعت هوشمند سایر برندها",
            slug: "other-smart-watches",
            subCategories: [],
          },
        ],
      },

      {
        id: 402,
        title: "مچ بند هوشمند",
        slug: "smart-band",

        subCategories: [
          {
            id: 4005,
            title: "مچ بند شیائومی",
            slug: "xiaomi-smart-band",
            subCategories: [],
          },
          {
            id: 4006,
            title: "مچ بند سایر برندها",
            slug: "other-smart-bands",
            subCategories: [],
          },
        ],
      },
    ],
  },

  // =========================================
  // دوربین و تجهیزات
  // =========================================

  {
    id: 5,
    title: "دوربین و تجهیزات",
    slug: "camera-equipment",

    subCategories: [
      {
        id: 501,
        title: "دوربین",
        slug: "camera",

        subCategories: [
          {
            id: 5001,
            title: "دوربین دیجیتال",
            slug: "digital-camera",
            subCategories: [],
          },
          {
            id: 5002,
            title: "دوربین بدون آینه",
            slug: "mirrorless-camera",
            subCategories: [],
          },
          {
            id: 5003,
            title: "دوربین حرفه‌ای",
            slug: "professional-camera",
            subCategories: [],
          },
          {
            id: 5004,
            title: "دوربین اکشن",
            slug: "action-camera",
            subCategories: [],
          },
        ],
      },

      {
        id: 502,
        title: "لنز دوربین",
        slug: "camera-lens",

        subCategories: [
          {
            id: 5005,
            title: "لنز واید",
            slug: "wide-angle-lens",
            subCategories: [],
          },
          {
            id: 5006,
            title: "لنز تله‌فوتو",
            slug: "telephoto-lens",
            subCategories: [],
          },
          {
            id: 5007,
            title: "لنز پرتره",
            slug: "portrait-lens",
            subCategories: [],
          },
        ],
      },

      {
        id: 503,
        title: "لوازم جانبی دوربین",
        slug: "camera-accessories",

        subCategories: [
          {
            id: 5008,
            title: "سه پایه",
            slug: "tripod",
            subCategories: [],
          },
          {
            id: 5009,
            title: "کیف دوربین",
            slug: "camera-bag",
            subCategories: [],
          },
          {
            id: 5010,
            title: "کارت حافظه",
            slug: "memory-card",
            subCategories: [],
          },
          {
            id: 5011,
            title: "باتری دوربین",
            slug: "camera-battery",
            subCategories: [],
          },
        ],
      },
    ],
  },

  // =========================================
  // کنسول و گیمینگ
  // =========================================

  {
    id: 6,
    title: "کنسول و تجهیزات گیمینگ",
    slug: "gaming",

    subCategories: [
      {
        id: 601,
        title: "کنسول بازی",
        slug: "game-console",

        subCategories: [
          {
            id: 6001,
            title: "پلی‌استیشن",
            slug: "playstation",
            subCategories: [],
          },
          {
            id: 6002,
            title: "ایکس‌باکس",
            slug: "xbox",
            subCategories: [],
          },
          {
            id: 6003,
            title: "نینتندو",
            slug: "nintendo",
            subCategories: [],
          },
        ],
      },

      {
        id: 602,
        title: "لوازم جانبی کنسول",
        slug: "console-accessories",

        subCategories: [
          {
            id: 6004,
            title: "دسته بازی",
            slug: "game-controller",
            subCategories: [],
          },
          {
            id: 6005,
            title: "هدست گیمینگ",
            slug: "gaming-headset-accessories",
            subCategories: [],
          },
          {
            id: 6006,
            title: "پایه و استند کنسول",
            slug: "console-stand",
            subCategories: [],
          },
        ],
      },

      {
        id: 603,
        title: "تجهیزات گیمینگ",
        slug: "gaming-equipment",

        subCategories: [
          {
            id: 6007,
            title: "موس گیمینگ",
            slug: "gaming-mouse",
            subCategories: [],
          },
          {
            id: 6008,
            title: "کیبورد گیمینگ",
            slug: "gaming-keyboard",
            subCategories: [],
          },
          {
            id: 6009,
            title: "پد موس گیمینگ",
            slug: "gaming-mouse-pad",
            subCategories: [],
          },
        ],
      },
    ],
  },
];

export default categories;