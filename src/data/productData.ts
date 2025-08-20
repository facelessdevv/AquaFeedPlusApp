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
  ingredientcontent: string;
  pdfUrl?: string;
  content: ProductContent[];
  price: number;
  productimages: string;
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
  priceListPdfUrl?: string;
  subCategories: SubCategory[];
}

export const productCategories: Category[] = [
  {
    id: 'cat1',
    name: 'خوراک ماهی قزل آلای رنگین کمان',
    image: 'https://aquafeedplus.org/wp-content/uploads/2025/02/t111.webp',
    priceListPdfUrl: 'https://aquafeedplus.org/wp-content/uploads/2025/02/aquafeed_rainbow-trout_pricelist_FA-1.pdf',
    subCategories: [
      {
        id: 'sub1-1',
        name: 'آغازین',
        description: '',
        image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/ST-Plus000-1-scaled.webp',
        products: [
          {
            id: 'prod1-1-1',
            name: 'خوراک پیش آغازین ماهی قزل آلای رنگین کمان - ST-PLUS000',
            price: 250000,
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
              { component: 'نوع خوراک', value: 'ST-PLUS000' },
              { component: 'ویتامین A ((IU)/در هر کیلوگرم خوراک)', value: '۹۶۰۰' },
              { component: 'ویتامین D3 ((IU)/در هر کیلوگرم خوراک)', value: '۲۴۰۰' },
              { component: 'ویتامین E ((mg)/در هر کیلوگرم خوراک)', value: '۲۴۰' },
              { component: 'ویتامین C ((mg)/در هر کیلوگرم خوراک)', value: '۴۵۰' },
            ],
            ingredients: [
              { name: 'پودر ماهی', image: 'https://atieh-tejarat-torang.rqo.ir/wp-content/uploads/sites/8367/2023/02/o3piufe0ijy0.jpeg' },
              { name: 'کنجاله سویا', image: 'https://zarinjavdaneh.ir/wp-content/uploads/2019/05/organic-soybean-meal-500x500.jpg' },
              { name: 'روغن ماهی', image: 'https://www.beytoote.com/images/stories/cookery/fish2-oil-properties7.jpg' },
              { name: 'گلوتن گندم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6aMV3CWNjzzpKaTQWhNtLHbMvH1voIbh8ZSI1zQTkAbkDywIfMCamZu5pC7LHjSkYoo&usqp=CAU' },
              { name: 'ویتامین‌ها', image: 'https://darmankala.com/media/magefan_blog/582.webp' },
            ],
            ingredientcontent: 'انواع پودر ماهی، کنجاله سویا، آرد گندم، گلوتن گندم، روغن ماهی، روغن گیاهی، مخمر هیدرولیز شده، ال کارنیتین، مکمل معدنی، مکمل ویتامینه، لسیتین، کاروتنوئیدها، آنتی اکسیدان و مواد محرک سیستم ایمنی.',
            pdfUrl: 'https://aquafeedplus.org/Catv2/Trout_FA/ST-PLUS000_FA.pdf',
            productimages: 'https://aquafeedplus.org/wp-content/uploads/2025/03/ST-PLUS000.jpg'
          },
        ],
      },
      {
        id: 'sub1-2',
        name: 'مولد',
        description: '',
        image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/BT-Plus-scaled.webp',
        products: [
          {
            id: 'prod1-2-1',
            name: 'خوراک مولد ماهی قزل آلای رنگین کمان - BT-PLUS',
            price: 250000,
            image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/BT-Plus-scaled.webp',
            description: 'قزل‌آلای رنگین‌کمان، از گونه‌های ارزشمند خانواده آزادماهیان است که پرورش آن در ایران از سال ۱۳۳۸ آغاز شده است. بر اساس گزارش‌های فائو، ایران یکی از بزرگترین تولید کننده های این ماهی در آب‌های داخلی (آب شیرین) به شمار می رود. این ماهی، یک شکارچی گوشتخوار است و برای رشد مطلوب، به جیره‌ای غنی از پروتئین با منشأ حیوانی نیاز دارد. استفاده از خوراک کامل و باکیفیت در پرورش اقتصادی قزل‌آلا ضروری است تا علاوه بر تأمین نیازهای تغذیه‌ای در تمام مراحل رشد، سیستم ایمنی ماهی را تقویت کند، میزان ضایعات را کاهش دهد و در نهایت منجر به بهبود رشد، افزایش نرخ بقا و حفظ کیفیت آب شود. آکوافیدپلاس با طراحی و تولید خوراک‌های تخصصی قزل‌آلای رنگین‌کمان، گامی مؤثر در جهت کاهش ضریب تبدیل غذایی، ارتقای سلامت ماهی و افزایش بازدهی پرورش برداشته است. با بهره‌گیری از این خوراک‌ها، می‌توان در انواع سیستم‌های پرورشی به تولیدی پایدار و سودآور دست یافت.',
            content: [
              { 
                type: 'header',
                value: 'تأمین نیازهای غذایی تخمک و اسپرم طی فرآیند رسیدگی جنسی'
              },
              { 
                type: 'header',
                value: 'افزایش هماوری مولدین'
              },
              { 
                type: 'header',
                value: 'بهبود کیفیت تخم و افزایش درصد تفریخ'
              },
              { 
                type: 'header',
                value: 'افزایش درصد بقا از زمان تفریخ تا شناوری و تغذیه فعال'
              },
              { 
                type: 'header',
                value: 'بهبود سریعتر مولدین پس از تکثیر و آماده سازی آنها برای فصل بعدی تخم ریزی'
              },
            ],
            analysisTable: [
              { component: 'نوع خوراک', value: 'BT-PLUS' },
              { component: 'فرم خوراک', value: 'کرامبل شناور / فرورونده'  },
              { component: 'اندازه خوراک (میلی متر)', value: '۰/۵ ± ۹/۵' },
              { component: 'پروتئین خام', value: '۴۳-۴۵' },
              { component: 'چربی خام', value: '۱۴-۱۶' },
              { component: 'فیبر خام', value: '۱-۳' },
              { component: 'خاکستر', value: '۸-۱۱' },
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
              { name: 'پودر ماهی', image: 'https://atieh-tejarat-torang.rqo.ir/wp-content/uploads/sites/8367/2023/02/o3piufe0ijy0.jpeg' },
              { name: 'کنجاله سویا', image: 'https://zarinjavdaneh.ir/wp-content/uploads/2019/05/organic-soybean-meal-500x500.jpg' },
              { name: 'روغن ماهی', image: 'https://www.beytoote.com/images/stories/cookery/fish2-oil-properties7.jpg' },
              { name: 'گلوتن گندم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6aMV3CWNjzzpKaTQWhNtLHbMvH1voIbh8ZSI1zQTkAbkDywIfMCamZu5pC7LHjSkYoo&usqp=CAU' },
              { name: 'ویتامین‌ها', image: 'https://darmankala.com/media/magefan_blog/582.webp' },
            ],
            ingredientcontent: 'انواع پودر ماهی، کنجاله سویا، آرد گندم، گلوتن گندم، روغن ماهی، روغن گیاهی، مخمر هیدرولیز شده، ال کارنیتین، مکمل معدنی، مکمل ویتامینه، لسیتین، کاروتنوئیدها، آنتی اکسیدان و مواد محرک سیستم ایمنی.',
            pdfUrl: 'https://aquafeedplus.org/Catv2/Trout_FA/BT-PLUS_FA.pdf',
            productimages: 'https://aquafeedplus.org/wp-content/uploads/2025/03/F16A9391-500x348-1.jpg'
          },
        ],
      },
    ],
  },
  {
    id: 'cat2',
    name: 'خوراک کپور معمولی',
    image: 'https://aquafeedplus.org/wp-content/uploads/2025/02/c111.webp',
    priceListPdfUrl: 'https://aquafeedplus.org/wp-content/uploads/2025/02/aquafeed_common-carp_pricelist_FA.pdf',
    subCategories: [
      {
        id: 'sub2-1',
        name: 'پیش آغازین',
        description: '',
        image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/SC-Plus000-scaled.webp',
        products: [
          {
            id: 'prod2-1-1',
            name: 'خوراک پیش آغازین ماهی کپور معمولی - SC-PLUS000',
            price: 250000,
            image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/SC-Plus000-scaled.webp',
            description: 'ماهی کپور معمولی (Cyprinus carpio) دامنه پراکنش وسیعی از شرق آسیا تا اروپا دارد و به دلیل مقاومت بالا در برابر شرایط نامطلوب محیطی، از جمله تغییرات دما، شوری و کمبود اکسیژن، توانسته است در انواع مختلف سیستم‌ های پرورشی به شکل تک ‌گونه یا چندگونه و در تراکم‌ های مختلف پرورش یابد. خوراک ماهی کپور آکوافیدپلاس بر پایه جدیدترین منابع علمی دنیا و با در نظر گرفتن شرایط متنوع پرورش طراحی شده است. این محصول با استفاده از فناوری اکستروژن و مواد اولیه با کیفیت، به گونه ‌ای تهیه شده که تمامی نیازهای تغذیه‌ ای ماهی کپور معمولی را در دوره‌ های مختلف رشد برطرف کند. ویژگی‌ های این جیره شامل تعادل مناسب مواد مغذی، وجود تمامی عناصر معدنی و ویتامین‌ های ضروری، پروفایل متعادل اسیدهای چرب غیراشباع و اسیدهای آمینه مورد نیاز، به همراه مقادیر کافی پروتئین و انرژی است. این ترکیب به بهبود رشد ماهی، افزایش بهره ‌وری غذایی و تقویت سیستم ایمنی کمک می‌ کند و در نتیجه سلامت و عملکرد تولیدی ماهی کپور را در شرایط مختلف پرورشی ارتقا می ‌دهد.',
            content: [
              { 
                type: 'header',
                value: 'استفاده از مواد اولیه با کیفیت با قابلیت هضم بالا'
              },
              { 
                type: 'header',
                value: 'کاهش نرخ بد شکلی و افزایش بقا'
              },
              { 
                type: 'header',
                value: 'استفاده از ترکیبات زیست فعال جهت بهبود سلامت دستگاه گوارش'
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
              { component: 'نوع خوراک', value: 'SC-PLUS000' },
              { component: 'فرم خوراک', value: 'کرامبل (شناور/فرورونده)' },
              { component: 'اندازه خوراک (میلی متر)', value: '۰/۳-۰/۵' },
              { component: 'پروتئین خام', value: '۴۰-۴۳' },
              { component: 'چربی خام', value: '۴-۸' },
              { component: 'فیبر خام', value: '۳-۶' },
              { component: 'خاکستر', value: '۷-۱۱' },
              { component: 'رطوبت', value: '۵-۱۱' },
              { component: 'فسفر', value: '۱-۱/۵' },
            ],
            usageGuideTable: [
              { component: 'نوع خوراک', value: 'SC-PLUS000	' },
              { component: 'ویتامین A ((IU)/در هر کیلوگرم خوراک)', value: '۸۰۰۰' },
              { component: 'ویتامین D3 ((IU)/در هر کیلوگرم خوراک)', value: '۲۰۰۰' },
              { component: 'ویتامین E ((mg)/در هر کیلوگرم خوراک)', value: '۲۰۰' },
              { component: 'ویتامین C ((mg)/در هر کیلوگرم خوراک)', value: '۲۵۰' },
            ],
            ingredients: [
              { name: 'پودر ماهی', image: 'https://atieh-tejarat-torang.rqo.ir/wp-content/uploads/sites/8367/2023/02/o3piufe0ijy0.jpeg' },
              { name: 'کنجاله سویا', image: 'https://zarinjavdaneh.ir/wp-content/uploads/2019/05/organic-soybean-meal-500x500.jpg' },
              { name: 'روغن ماهی', image: 'https://www.beytoote.com/images/stories/cookery/fish2-oil-properties7.jpg' },
              { name: 'گلوتن گندم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6aMV3CWNjzzpKaTQWhNtLHbMvH1voIbh8ZSI1zQTkAbkDywIfMCamZu5pC7LHjSkYoo&usqp=CAU' },
              { name: 'ویتامین‌ها', image: 'https://darmankala.com/media/magefan_blog/582.webp' },
            ],
            ingredientcontent: 'انواع پودر ماهی، کنجاله سویا، آرد گندم، گلوتن گندم، روغن ماهی، روغن گیاهی، مخمر هیدرولیز شده، ال کارنیتین، مکمل معدنی، مکمل ویتامینه، لسیتین، کاروتنوئیدها، آنتی اکسیدان و مواد محرک سیستم ایمنی.',
            pdfUrl: 'https://aquafeedplus.org/Catv2/Carp_FA/SC-PLUS000_FA.pdf',
            productimages: 'https://aquafeedplus.org/wp-content/uploads/2025/03/prestarter000-1.jpg'
          },
        ],
      },
      {
        id: 'sub2-2',
        name: 'مولد',
        description: '',
        image: 'https://aquafeedplus.org/wp-content/uploads/2025/02/BC-PLUS-scaled.webp',
        products: [
          {
            id: 'prod2-2-1',
            name: 'خوراک مولد ماهی کپور معمولی - BC-PLUS',
            price: 250000,
            image: 'https://aquafeedplus.org/wp-content/uploads/2025/02/BC-PLUS-scaled.webp',
            description: 'ماهی کپور معمولی (Cyprinus carpio) دامنه پراکنش وسیعی از شرق آسیا تا اروپا دارد و به دلیل مقاومت بالا در برابر شرایط نامطلوب محیطی، از جمله تغییرات دما، شوری و کمبود اکسیژن، توانسته است در انواع مختلف سیستم‌ های پرورشی به شکل تک ‌گونه یا چندگونه و در تراکم‌ های مختلف پرورش یابد. خوراک ماهی کپور آکوافیدپلاس بر پایه جدیدترین منابع علمی دنیا و با در نظر گرفتن شرایط متنوع پرورش طراحی شده است. این محصول با استفاده از فناوری اکستروژن و مواد اولیه با کیفیت، به گونه ‌ای تهیه شده که تمامی نیازهای تغذیه‌ ای ماهی کپور معمولی را در دوره‌ های مختلف رشد برطرف کند. ویژگی‌ های این جیره شامل تعادل مناسب مواد مغذی، وجود تمامی عناصر معدنی و ویتامین‌ های ضروری، پروفایل متعادل اسیدهای چرب غیراشباع و اسیدهای آمینه مورد نیاز، به همراه مقادیر کافی پروتئین و انرژی است. این ترکیب به بهبود رشد ماهی، افزایش بهره ‌وری غذایی و تقویت سیستم ایمنی کمک می‌ کند و در نتیجه سلامت و عملکرد تولیدی ماهی کپور را در شرایط مختلف پرورشی ارتقا می ‌دهد.',
            content: [
              { 
                type: 'header',
                value: 'تأمین نیازهای غذایی تخمک و اسپرم طی فرآیند رسیدگی جنسی'
              },
              { 
                type: 'header',
                value: 'افزایش هماوری مولدین'
              },
              { 
                type: 'header',
                value: 'بهبود کیفیت تخم و افزایش درصد تفریخ'
              },
              { 
                type: 'header',
                value: 'افزایش درصد بقا از زمان تفریخ تا شناوری و تغذیه فعال'
              },
              { 
                type: 'header',
                value: 'بهبود سریعتر مولدین پس از تکثیر و آماده سازی آنها برای فصل بعدی تخم ریزی'
              },
            ],
            analysisTable: [
              { component: 'نوع خوراک', value: 'BT-PLUS' },
              { component: 'فرم خوراک', value: 'کرامبل شناور / فرورونده'  },
              { component: 'اندازه خوراک (میلی متر)', value: '۰/۵ ± ۹/۵' },
              { component: 'پروتئین خام', value: '۴۳-۴۵' },
              { component: 'چربی خام', value: '۱۴-۱۶' },
              { component: 'فیبر خام', value: '۱-۳' },
              { component: 'خاکستر', value: '۸-۱۱' },
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
              { name: 'پودر ماهی', image: 'https://atieh-tejarat-torang.rqo.ir/wp-content/uploads/sites/8367/2023/02/o3piufe0ijy0.jpeg' },
              { name: 'کنجاله سویا', image: 'https://zarinjavdaneh.ir/wp-content/uploads/2019/05/organic-soybean-meal-500x500.jpg' },
              { name: 'روغن ماهی', image: 'https://www.beytoote.com/images/stories/cookery/fish2-oil-properties7.jpg' },
              { name: 'گلوتن گندم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6aMV3CWNjzzpKaTQWhNtLHbMvH1voIbh8ZSI1zQTkAbkDywIfMCamZu5pC7LHjSkYoo&usqp=CAU' },
              { name: 'ویتامین‌ها', image: 'https://darmankala.com/media/magefan_blog/582.webp' },
            ],
            ingredientcontent: 'انواع پودر ماهی، کنجاله سویا، آرد گندم، گلوتن گندم، روغن ماهی، روغن گیاهی، مخمر هیدرولیز شده، ال کارنیتین، مکمل معدنی، مکمل ویتامینه، لسیتین، کاروتنوئیدها، آنتی اکسیدان و مواد محرک سیستم ایمنی.',
            pdfUrl: 'https://aquafeedplus.org/Catv2/Carp_FA/BC-PLUS_FA.pdf',
            productimages: 'https://aquafeedplus.org/wp-content/uploads/2025/03/f16a9090-66146002bb603-1024x713.webp'
          },
        ],
      },
    ],
  },
  {
    id: 'cat3',
    name: 'خوراک ماهیان خاویاری',
    image: 'https://aquafeedplus.org/wp-content/uploads/2025/02/s111.webp',
    priceListPdfUrl: 'https://aquafeedplus.org/wp-content/uploads/2025/02/aquafeed_sturgeon_pricelist_FA.pdf',
    subCategories: [
      {
        id: 'sub3-1',
        name: 'پیش آغازین',
        description: '',
        image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/SS-Plus000-scaled.webp',
        products: [
          {
            id: 'prod3-1-1',
            name: 'خوراک پیش آغازین ماهیان خاویاری - SS-PLUS000',
            price: 250000,
            image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/SS-Plus000-scaled.webp',
            description: 'ماهیان خاویاری که به خاطر قدمت بیش از ۲۰۰ میلیون سالی خود به عنوان فسیل‌ های زنده شناخته می‌ شوند، از نظر زیستی و اقتصادی ارزش فراوانی دارند. حوضه آبریز دریای خزر، زیستگاه اصلی این گونه ‌ها تلقی می‌ شود و بیشترین استحصال خاویار طبیعی تاس ‌ماهیان را به خود اختصاص داده است. خاویار استحصالی از دریای خزر، که به عنوان “مروارید سیاه” معروف است، توسط ایران، به ‌عنوان یکی از پیشتازان صادرات خاویار اصیل و ممتاز، به بازارهای جهانی عرضه می‌ شود. کمبود دانش تخصصی در تغذیه ماهیان‌ خاویاری، تهیه خوراک مناسب برای پرورش آن ‌ها را به فرایندی پیچیده و تخصصی بدل کرده است؛ چرا که عدم توازن مواد مغذی در جیره می‌تواند به خسارات جدی در مزارع پرورش این ماهیان منجر شود. در تولید تمامی خوراک‌ های ماهیان خاویاری توسط تیم آکوافیدپلاس، از مواد اولیه مرغوب و باکیفیت بهره گرفته می‌ شود. این خوراک ‌ها به گونه ‌ای فرموله شده‌ اند که نیازهای تغذیه‌ ای ماهیان را در همه سنین و مراحل رشد، از مرحله لاروی تا مولد، تأمین کنند. به‌ علاوه، استفاده از افزودنی‌ های خاص باعث تحریک سیستم ایمنی، افزایش نرخ بقاء و کاهش ضریب تبدیل خوراک می ‌شود؛ در نتیجه، بازدهی مزارع پرورش ماهیان خاویاری افزایش قابل توجهی پیدا می‌کند.',
            content: [
              { 
                type: 'header',
                value: 'استفاده از مواد اولیه باکیفیت و با قابلیت هضم بالا'
              },
              { 
                type: 'header',
                value: 'استفاده از افزودنی‌های محرک سیستم ایمنی و افزایش مقاومت بچه ماهیان در برابر بیماری و استرس'
              },
              { 
                type: 'header',
                value: 'بقاء بالا در مرحله لاروی و افزایش راندمان تولید'
              },
              { 
                type: 'header',
                value: 'کاهش نرخ بد شکلی در لاروهای تازه به تغذیه افتاده'
              },
              { 
                type: 'header',
                value: 'شکل و دانه‌بندی مناسب و پایداری بالای خوراک در آب'
              },
            ],
            analysisTable: [
              { component: 'نوع خوراک', value: 'SS-PLUS000' },
              { component: 'فرم خوراک', value: 'کرامبل (شناور/فرورونده)' },
              { component: 'اندازه خوراک (میلی متر)', value: '۰/۳-۰/۵' },
              { component: 'پروتئین خام', value: '۵۴-۵۶' },
              { component: 'چربی خام', value: '۱۲-۱۶' },
              { component: 'فیبر خام', value: '۱-۳' },
              { component: 'خاکستر', value: '۷-۱۱' },
              { component: 'رطوبت', value: '۶-۱۱' },
              { component: 'فسفر', value: '۱-۲' },
            ],
            usageGuideTable: [
              { component: 'نوع خوراک', value: 'SS-PLUS000' },
              { component: 'ویتامین A ((IU)/در هر کیلوگرم خوراک)', value: '۹۶۰۰' },
              { component: 'ویتامین D3 ((IU)/در هر کیلوگرم خوراک)', value: '۲۴۰۰' },
              { component: 'ویتامین E ((mg)/در هر کیلوگرم خوراک)', value: '۲۴۰' },
              { component: 'ویتامین C ((mg)/در هر کیلوگرم خوراک)', value: '۷۵۰' },
            ],
            ingredients: [
              { name: 'پودر ماهی', image: 'https://atieh-tejarat-torang.rqo.ir/wp-content/uploads/sites/8367/2023/02/o3piufe0ijy0.jpeg' },
              { name: 'کنجاله سویا', image: 'https://zarinjavdaneh.ir/wp-content/uploads/2019/05/organic-soybean-meal-500x500.jpg' },
              { name: 'روغن ماهی', image: 'https://www.beytoote.com/images/stories/cookery/fish2-oil-properties7.jpg' },
              { name: 'گلوتن گندم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6aMV3CWNjzzpKaTQWhNtLHbMvH1voIbh8ZSI1zQTkAbkDywIfMCamZu5pC7LHjSkYoo&usqp=CAU' },
              { name: 'ویتامین‌ها', image: 'https://darmankala.com/media/magefan_blog/582.webp' },
            ],
            ingredientcontent: 'انواع پودر ماهی (کیلکا، ساردین)، پروتئین هیدرولیز شده، آرد گندم، گلوتن گندم، روغن ماهی، روغن گیاهی، اسپیرولینا، لسیتین، مواد جاذب خوراکی، مخمر هیدرولیز شده، پروبیوتیک، مکمل معدنی و ویتامینه مخصوص ماهیان خاویاری، آنتی اکسیدان و مواد محرک سیستم ایمنی.',
            pdfUrl: 'https://aquafeedplus.org/Catv2/sturgeon_FA/SS-PLUS000_FA.pdf',
            productimages: 'https://aquafeedplus.org/wp-content/uploads/2025/02/prestarter000.jpg'
          },
        ],
      },
      {
        id: 'sub3-2',
        name: 'مولد',
        description: '',
        image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/BS-PLUS2-scaled.webp',
        products: [
          {
            id: 'prod3-2-1',
            name: 'خوراک مولد ماهیان خاویاری - BS-PLUS2',
            price: 250000,
            image: 'https://aquafeedplus.org/wp-content/uploads/2025/03/BS-PLUS2-scaled.webp',
            description: 'ماهیان خاویاری که به خاطر قدمت بیش از ۲۰۰ میلیون سالی خود به عنوان فسیل‌ های زنده شناخته می‌ شوند، از نظر زیستی و اقتصادی ارزش فراوانی دارند. حوضه آبریز دریای خزر، زیستگاه اصلی این گونه ‌ها تلقی می‌ شود و بیشترین استحصال خاویار طبیعی تاس ‌ماهیان را به خود اختصاص داده است. خاویار استحصالی از دریای خزر، که به عنوان “مروارید سیاه” معروف است، توسط ایران، به ‌عنوان یکی از پیشتازان صادرات خاویار اصیل و ممتاز، به بازارهای جهانی عرضه می‌ شود. کمبود دانش تخصصی در تغذیه ماهیان‌ خاویاری، تهیه خوراک مناسب برای پرورش آن ‌ها را به فرایندی پیچیده و تخصصی بدل کرده است؛ چرا که عدم توازن مواد مغذی در جیره می‌تواند به خسارات جدی در مزارع پرورش این ماهیان منجر شود. در تولید تمامی خوراک‌ های ماهیان خاویاری توسط تیم آکوافیدپلاس، از مواد اولیه مرغوب و باکیفیت بهره گرفته می‌ شود. این خوراک ‌ها به گونه ‌ای فرموله شده‌ اند که نیازهای تغذیه‌ ای ماهیان را در همه سنین و مراحل رشد، از مرحله لاروی تا مولد، تأمین کنند. به‌ علاوه، استفاده از افزودنی‌ های خاص باعث تحریک سیستم ایمنی، افزایش نرخ بقاء و کاهش ضریب تبدیل خوراک می ‌شود؛ در نتیجه، بازدهی مزارع پرورش ماهیان خاویاری افزایش قابل توجهی پیدا می‌کند.',
            content: [
              { 
                type: 'header',
                value: 'تأمین نیازهای غذایی تخمک و اسپرم طی فرآیند رسیدگی جنسی'
              },
              { 
                type: 'header',
                value: 'افزایش هماوری مولدین'
              },
              { 
                type: 'header',
                value: 'بهبود کیفیت تخم و افزایش درصد تفریخ'
              },
              { 
                type: 'header',
                value: 'افزایش درصد بقا از زمان تفریخ تا شناوری و تغذیه فعال'
              },
              { 
                type: 'header',
                value: 'بهبود سریعتر مولدین پس از تکثیر و آماده سازی آنها برای فصل بعدی تخم ریزی'
              },
            ],
            analysisTable: [
              { component: 'نوع خوراک', value: 'BS-PLUS2' },
              { component: 'فرم خوراک', value: 'فرورونده' },
              { component: 'اندازه خوراک (میلی متر)', value: '۱۰-۱۲' },
              { component: 'پروتئین خام', value: '۴۸-۵۰' },
              { component: 'چربی خام', value: '۱۰-۱۲' },
              { component: 'فیبر خام', value: '۲-۴' },
              { component: 'خاکستر', value: '۷-۱۰' },
              { component: 'رطوبت', value: '۶-۱۱' },
              { component: 'فسفر', value: '۱-۱/۵' },
            ],
            usageGuideTable: [
              { component: 'نوع خوراک', value: 'BS-PLUS2' },
              { component: 'ویتامین A ((IU)/در هر کیلوگرم خوراک)', value: '۱۰۰۰۰' },
              { component: 'ویتامین D3 ((IU)/در هر کیلوگرم خوراک)', value: '۲۵۰۰' },
              { component: 'ویتامین E ((mg)/در هر کیلوگرم خوراک)', value: '۲۵۰' },
              { component: 'ویتامین C ((mg)/در هر کیلوگرم خوراک)', value: '۷۰۰' },
            ],
            ingredients: [
              { name: 'پودر ماهی', image: 'https://atieh-tejarat-torang.rqo.ir/wp-content/uploads/sites/8367/2023/02/o3piufe0ijy0.jpeg' },
              { name: 'کنجاله سویا', image: 'https://zarinjavdaneh.ir/wp-content/uploads/2019/05/organic-soybean-meal-500x500.jpg' },
              { name: 'روغن ماهی', image: 'https://www.beytoote.com/images/stories/cookery/fish2-oil-properties7.jpg' },
              { name: 'گلوتن گندم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6aMV3CWNjzzpKaTQWhNtLHbMvH1voIbh8ZSI1zQTkAbkDywIfMCamZu5pC7LHjSkYoo&usqp=CAU' },
              { name: 'ویتامین‌ها', image: 'https://darmankala.com/media/magefan_blog/582.webp' },
            ],
            ingredientcontent: 'انواع پودر ماهی (کیلکا، ساردین)، آرد گندم، گلوتن گندم، گلوتن ذرت، کنجاله سویا، کنسانتره‌های پروتئینی گیاهی، روغن ماهی، روغن گیاهی، مکمل معدنی و ویتامینه مخصوص ماهیان خاویاری، مواد جاذب خوراکی، پری بیوتیک، پروبیوتیک، لسیتین،کاروتنوئیدها، آنتی اکسیدان و مواد محرک سیستم ایمنی.',
            pdfUrl: 'https://aquafeedplus.org/Catv2/sturgeon_FA/BS-PLUS2_FA.pdf',
            productimages: 'https://aquafeedplus.org/wp-content/uploads/2025/03/bsplus2.jpg'
          },
        ],
      },
    ],
  },
];