export interface AnalysisTableRow {
  component: string;
  value: string;
}

export interface Ingredient {
  name: string;
  image: string;
}

export interface ProductContent {
    type: 'header' | 'paragraph' | 'image';
    value: string;
}


export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  analysisTable: AnalysisTableRow[];
  usageGuideTable?: AnalysisTableRow[];
  ingredients?: Ingredient[];  
  pdfUrl?: string;
  content: ProductContent[];
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  image?: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subCategories: SubCategory[];
}

export const productCategories: Category[] = [
  {
    id: 'cat1',
    name: 'خوراک ماهی قزل آلای رنگین کمان',
    image: 'https://aquafeedplus.org/wp-content/uploads/2025/02/t111.webp',
    subCategories: [
      {
        id: 'sub1-1',
        name: 'آغازین',
        description: 'خوراک دوره آغازین برای میگو',
        image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/ST-Plus000-1-scaled.webp',
        products: [
          {
            id: 'prod1-1-1',
            name: 'ST-PLUS000 - خوراک پیش آغازین ماهی قزل آلای رنگین کمان',
            image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/ST-Plus000-1-scaled.webp',
            description: 'قزل‌آلای رنگین‌کمان، از گونه‌های ارزشمند خانواده آزادماهیان است که پرورش آن در ایران از سال ۱۳۳۸ آغاز شده است. بر اساس گزارش‌های فائو، ایران یکی از بزرگترین تولید کننده های این ماهی در آب‌های داخلی (آب شیرین) به شمار می رود. این ماهی، یک شکارچی گوشتخوار است و برای رشد مطلوب، به جیره‌ای غنی از پروتئین با منشأ حیوانی نیاز دارد. استفاده از خوراک کامل و باکیفیت در پرورش اقتصادی قزل‌آلا ضروری است تا علاوه بر تأمین نیازهای تغذیه‌ای در تمام مراحل رشد، سیستم ایمنی ماهی را تقویت کند، میزان ضایعات را کاهش دهد و در نهایت منجر به بهبود رشد، افزایش نرخ بقا و حفظ کیفیت آب شود. آکوافیدپلاس با طراحی و تولید خوراک‌های تخصصی قزل‌آلای رنگین‌کمان، گامی مؤثر در جهت کاهش ضریب تبدیل غذایی، ارتقای سلامت ماهی و افزایش بازدهی پرورش برداشته است. با بهره‌گیری از این خوراک‌ها، می‌توان در انواع سیستم‌های پرورشی به تولیدی پایدار و سودآور دست یافت.',
            content: [
              { 
                type: 'header',
                value: 'تامین کامل نیازهای غذایی'
              },
              { 
                type: 'header',
                value: 'بقای بالا در لاروهای تازه به تغذیه افتاده و افزایش راندمان تولید'
              },
              { 
                type: 'header',
                value: 'کاهش نرخ بدشکلی در لاروهای تازه به تغذیه افتاده'
              },
              { 
                type: 'header',
                value: 'پروفایل مناسب اسیدهای چرب و اسیدهای آمینه'
              },
              { 
                type: 'header',
                value: 'پایداری بالای خوراک در آب'
              },
            ],
            analysisTable: [
              { component: 'نوع خوراک', value: 'ST-PLUS000' },
              { component: 'فرم خوراک', value: 'کرامبل (شناور/فرورونده)' },
              { component: 'اندازه خوراک (میلی متر)', value: '۰/۳-۰/۵' },
              { component: 'پروتئین خام', value: '۵۱-۵۳%' },
              { component: 'چربی خام', value: '۱۲-۱۴' },
              { component: 'فیبر خام', value: '۱/۵-۳' },
              { component: 'خاکستر', value: '۱۰-۱۳' },
              { component: 'رطوبت', value: '۶-۱۰' },
              { component: 'فسفر', value: '۱-۱/۵' },
            ],
            usageGuideTable: [
              { component: 'نوع خوراک', value: 'BT-PLUS' },
              { component: 'ویتامین A ((IU)/در هر کیلوگرم خوراک)', value: '۹۶۰۰' },
              { component: 'ویتامین D3 ((IU)/در هر کیلوگرم خوراک)', value: '۲۴۰۰' },
              { component: 'ویتامین E ((mg)/در هر کیلوگرم خوراک)', value: '۲۴۰' },
              { component: 'ویتامین C ((mg)/در هر کیلوگرم خوراک)', value: '۴۵۰' },
            ],
            ingredients: [
              { name: 'پودر ماهی', image: 'https://placehold.co/100x100/003a5d/ffffff?text=Fish' },
              { name: 'کنجاله سویا', image: 'https://placehold.co/100x100/E04B15/ffffff?text=Soy' },
              { name: 'روغن ماهی', image: 'https://placehold.co/100x100/003a5d/ffffff?text=Oil' },
              { name: 'گلوتن گندم', image: 'https://placehold.co/100x100/E04B15/ffffff?text=Gluten' },
              { name: 'ویتامین‌ها', image: 'https://placehold.co/100x100/003a5d/ffffff?text=Vitamins' },
            ],
            pdfUrl: 'https://aquafeedplus.org/Catv2/Trout_FA/ST-PLUS000_FA.pdf',
          },
          // ... دیگر محصولات آغازین
        ],
      },
      // ... دیگر زیرشاخه‌ها (رشد، پایانی)
    ],
  },
  // ... دسته‌بندی‌های دیگر (قزل‌آلا، کپور)
];