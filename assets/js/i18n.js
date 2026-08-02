/* ==========================================================================
   Future Orders Trading Co. — Content dictionary + language engine
   طلبات المستقبل التجارية

   يبدّل اللغة عبر تحديث النصوص فقط (بدون إعادة بناء الصفحة)،
   وبذلك لا تُفقد الأنيميشنز الجارية (marquee / portfolio scroll / counters).
   ========================================================================== */

var I18N = {
  /* ------------------------------------------------------------ ARABIC --- */
  ar: {
    brand: 'طلبات المستقبل',
    brandSub: 'FUTURE ORDERS TRADING CO.',
    cta: 'اطلب عرض سعر',
    rights: '© 2026 طلبات المستقبل التجارية. جميع الحقوق محفوظة.',

    titles: {
      home:     'طلبات المستقبل التجارية | توريد أثاث مكتبي وقرطاسية - الرياض',
      services: 'الخدمات | طلبات المستقبل التجارية',
      projects: 'المشاريع | طلبات المستقبل التجارية',
      detail:   'تفاصيل المشروع | طلبات المستقبل التجارية',
      contact:  'تواصل معنا | طلبات المستقبل التجارية'
    },

    nav: { home: 'الرئيسية', services: 'الخدمات', projects: 'المشاريع', contact: 'تواصل معنا' },

    hero: {
      location: 'الرياض، السعودية',
      since: 'شريك موثوق منذ 2019',
      title: 'نُسهم في تجهيز بيئة العمل الحكومية والخاصة بثقة ومسؤولية',
      sub: 'من قلب الرياض، نقدّم حلول توريد متكاملة للأثاث المكتبي واللوازم والقرطاسية، بما يليق بمكانة عملائنا من الجهات الحكومية والخاصة.',
      primaryBtn: 'تعرف على خدماتنا',
      secondaryLink: 'تواصل معنا',
      stats: [
        { num: '+850', label: 'مشروع منجز' },
        { num: '+300', label: 'عميل حكومي وخاص' },
        { num: '+7',   label: 'سنوات خبرة' }
      ]
    },

    services: {
      tag: 'خدماتنا',
      title: 'حلول توريد متكاملة',
      items: [
        { num: '01', title: 'أثاث مكتبي',    desc: 'تجهيز متكامل للمقرات بأثاث مكتبي عالي الجودة يلبي احتياجات الجهات الحكومية والخاصة.' },
        { num: '02', title: 'قرطاسيات',      desc: 'توريد دوري ومستمر للقرطاسية واللوازم المكتبية بجودة موثوقة وتسليم سريع.' },
        { num: '03', title: 'إدارة المشاريع', desc: 'تخطيط وتنفيذ كامل للمشاريع من التوريد حتى التسليم النهائي بالتزام تام بالمواعيد.' }
      ]
    },

    stats: {
      tag: 'بالأرقام',
      title: 'إنجازاتنا تتحدث عنا',
      items: [
        { target: 7,   suffix: '+', label: 'سنوات خبرة' },
        { target: 850, suffix: '+', label: 'مشروع منجز' },
        { target: 300, suffix: '+', label: 'عميل حكومي وخاص' },
        { target: 4,   suffix: '',  label: 'فئات منتجات' }
      ]
    },

    po: {
      tag: 'توريد القرطاسيات',
      title: 'نلتزم بتوريد القرطاسية بشكل دوري ومستمر لعملائنا',
      label: 'أمر شراء قرطاسية تم تنفيذه لجهات حكومية وخاصة',
      logosTitle: 'الجهات التي تم التوريد لها'
    },

    portfolio: {
      tag: 'أعمالنا',
      title: 'معرض مشاريعنا',
      viewAll: 'عرض جميع المشاريع',
      items: [
        { title: 'مشروع الأمن العام',              cat: 'توريد حكومي' },
        { title: 'مشروع أمانة العاصمة المقدسة',    cat: 'توريد حكومي' },
        { title: 'مشروع تجمع تبوك الصحي',          cat: 'توريد حكومي' },
        { title: 'مشروع وزارة الداخلية',           cat: 'توريد حكومي' },
        { title: 'مشروع الإقامة المميزة',          cat: 'توريد حكومي' }
      ]
    },

    contactBand: {
      title: 'جاهزون لتجهيز مقرك القادم',
      sub: 'تواصل معنا اليوم واحصل على عرض سعر مخصص خلال 24 ساعة',
      btn: 'تواصل معنا'
    },

    footer: {
      blurb: 'شركة رائدة في توريد الأثاث المكتبي واللوازم والقرطاسية للجهات الحكومية والخاصة والأفراد منذ 2019.',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      contact: 'تواصل معنا',
      phone: 'هاتف: 011 234 5678',
      email: 'info@futureorders.sa',
      address: 'الرياض، المملكة العربية السعودية'
    },

    /* ---------------------------------------------------- Services page --- */
    servicesPage: {
      tag: 'خدماتنا',
      title: 'حلول توريد متكاملة لكل قطاع',
      sub: 'من العقود الحكومية الكبرى إلى الطلبات الفردية، نوفر منظومة توريد مرنة تغطي احتياجات مكتبك بالكامل.',
      imgPlaceholder: 'صورة منتج',
      items: [
        { num: '01', title: 'التوريد الحكومي', desc: 'شريك معتمد للجهات الحكومية في توريد الأثاث المكتبي واللوازم والقرطاسية ضمن العقود والمناقصات، بالتزام كامل بالمواصفات والمواعيد التعاقدية.', points: ['عقود ومناقصات حكومية', 'التزام بمعايير الجودة والمواصفات', 'التسليم في المواعيد التعاقدية', 'فريق متابعة تعاقدات مخصص'] },
        { num: '02', title: 'إدارة المشاريع', desc: 'تجهيز شامل للمقرات الإدارية والمشاريع الكبرى، من دراسة الاحتياج والتصميم الداخلي إلى التوريد والتركيب والتسليم النهائي.', points: ['دراسة الاحتياج والتخطيط', 'تصميم وتوزيع المساحات المكتبية', 'توريد وتركيب على مستوى المبنى', 'إشراف هندسي حتى التسليم'] },
        { num: '03', title: 'التجزئة والأفراد', desc: 'طلبات مرنة بأحجام صغيرة ومتوسطة للشركات الناشئة والأفراد، مع خيارات دفع وتوصيل سريعة وأسعار تنافسية.', points: ['طلبات فردية وكميات صغيرة', 'أسعار تنافسية وعروض دورية', 'توصيل سريع داخل المدن الرئيسية', 'دعم فني ومبيعات مباشر'] }
      ],
      categories: {
        tag: 'فئات المنتجات',
        title: 'ماذا نورّد',
        items: ['أثاث مكتبي', 'لوازم مكتبية', 'قرطاسية', 'حلول تخزين وأرشفة']
      },
      band: { title: 'تحتاج عرض سعر لخدمة معينة؟', sub: 'تواصل معنا وسنرشدك لأنسب حل يناسب مشروعك وميزانيتك', btn: 'تواصل معنا' }
    },

    /* ---------------------------------------------------- Projects page --- */
    projectsPage: {
      tag: 'أعمالنا',
      title: 'مشاريع أنجزناها بثقة عملائنا',
      sub: 'نماذج من مشاريع التوريد والتجهيز التي نفذناها لجهات حكومية وشركات خاصة على مستوى المملكة.',
      items: [
        { title: 'مشروع الأمن العام',           cat: 'توريد حكومي', year: '2026', desc: 'تجهيز كامل لمقر إداري تابع للأمن العام بمحطات عمل ومقصورات مكتبية وكراسي تنفيذية.' },
        { title: 'مشروع أمانة العاصمة المقدسة', cat: 'توريد حكومي', year: '2025', desc: 'تجهيز متكامل بمكاتب تنفيذية، محطات عمل، وقاعات اجتماعات بسعة كبيرة.' },
        { title: 'مشروع تجمع تبوك الصحي',       cat: 'توريد حكومي', year: '2025', desc: 'تأثيث مكاتب موظفين وصالات انتظار عصرية لمركز رعاية صحية أولية.' },
        { title: 'مشروع وزارة الداخلية',        cat: 'توريد حكومي', year: '2025', desc: 'تجهيز مكاتب تنفيذية وقاعة اجتماعات فاخرة بتشطيبات خشبية راقية.' },
        { title: 'مشروع الإقامة المميزة',       cat: 'توريد حكومي', year: '2026', desc: 'تجهيز صالات استقبال وجلسات ضيافة بتصميم عصري وألوان هوية متعددة.' }
      ],
      band: { title: 'عندك مشروع مشابه؟', sub: 'شاركنا تفاصيل مشروعك وسنجهز لك عرض سعر مناسب', btn: 'تواصل معنا' }
    },

    /* ----------------------------------------------- Project detail page --- */
    detail: {
      backToProjects: 'العودة إلى المشاريع',
      detailsTitle: 'تفاصيل المشروع',
      aboutTitle: 'عن المشروع',
      fields: { client: 'العميل', category: 'الفئة', year: 'السنة', scope: 'نطاق العمل' },
      otherProjects: 'مشاريع أخرى',
      viewAll: 'عرض جميع المشاريع',
      band: { title: 'عندك مشروع مشابه؟', sub: 'شاركنا تفاصيل مشروعك وسنجهز لك عرض سعر مناسب', btn: 'تواصل معنا' }
    },

    /* ----------------------------------------------------- Contact page --- */
    contactPage: {
      tag: 'تواصل معنا',
      title: 'جاهزون للإجابة على استفساراتك',
      sub: 'راسلنا لطلب عرض سعر أو للاستفسار عن خدماتنا، وسيتواصل معك فريقنا خلال 24 ساعة عمل.',
      info: {
        phoneLabel: 'الهاتف', phone: '+966 11 234 5678',
        emailLabel: 'البريد الإلكتروني', email: 'info@futureorders.sa',
        addressLabel: 'العنوان', address: 'الرياض، المملكة العربية السعودية',
        hoursLabel: 'ساعات العمل', hours: 'الأحد - الخميس، 8 ص - 5 م'
      },
      form: {
        title: 'اطلب عرض سعر',
        name: 'الاسم الكامل', company: 'اسم الجهة / الشركة', phone: 'رقم الهاتف', email: 'البريد الإلكتروني',
        type: 'نوع الطلب',
        typeOptions: ['اختر نوع الطلب', 'توريد حكومي', 'مشروع مكتبي', 'طلب فردي', 'استفسار عام'],
        message: 'تفاصيل الطلب',
        submit: 'إرسال الطلب',
        sending: 'جارٍ الإرسال...',
        error: 'تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى أو مراسلتنا على البريد الإلكتروني مباشرة.',
        successTitle: 'تم استلام طلبك',
        successSub: 'شكرًا لتواصلك معنا، سيقوم فريقنا بالرد عليك خلال 24 ساعة عمل.'
      }
    }
  },

  /* ----------------------------------------------------------- ENGLISH --- */
  en: {
    brand: 'Future Orders',
    brandSub: 'TRADING CO.',
    cta: 'Request a Quote',
    rights: '© 2026 Future Orders Trading Co. All rights reserved.',

    titles: {
      home:     'Future Orders Trading Co. | Office Furniture & Stationery Supply - Riyadh',
      services: 'Services | Future Orders Trading Co.',
      projects: 'Projects | Future Orders Trading Co.',
      detail:   'Project Details | Future Orders Trading Co.',
      contact:  'Contact | Future Orders Trading Co.'
    },

    nav: { home: 'Home', services: 'Services', projects: 'Projects', contact: 'Contact' },

    hero: {
      location: 'Riyadh, KSA',
      since: 'Trusted partner since 2019',
      title: 'Equipping government and private-sector workplaces with trust and responsibility',
      sub: 'From the heart of Riyadh, we deliver integrated supply solutions for office furniture, supplies, and stationery, befitting our clients across the public and private sectors.',
      primaryBtn: 'Explore Our Services',
      secondaryLink: 'Contact Us',
      stats: [
        { num: '850+', label: 'Projects delivered' },
        { num: '300+', label: 'Gov. & private clients' },
        { num: '7+',   label: 'Years of experience' }
      ]
    },

    services: {
      tag: 'Our Services',
      title: 'Integrated supply solutions',
      items: [
        { num: '01', title: 'Office Furniture',   desc: 'Complete office fit-outs with high-quality furniture for government and private clients.' },
        { num: '02', title: 'Stationery',         desc: 'Recurring, reliable supply of stationery and office essentials with fast delivery.' },
        { num: '03', title: 'Project Management', desc: 'End-to-end project planning and execution, from supply through final handover.' }
      ]
    },

    stats: {
      tag: 'By The Numbers',
      title: 'Our track record speaks for itself',
      items: [
        { target: 7,   suffix: '+', label: 'Years of experience' },
        { target: 850, suffix: '+', label: 'Projects delivered' },
        { target: 300, suffix: '+', label: 'Government & private clients' },
        { target: 4,   suffix: '',  label: 'Product categories' }
      ]
    },

    po: {
      tag: 'Stationery Supply',
      title: 'We deliver recurring stationery supply to our clients',
      label: 'Stationery purchase orders fulfilled for gov. & private clients',
      logosTitle: 'Entities we have supplied'
    },

    portfolio: {
      tag: 'Our Work',
      title: 'Project gallery',
      viewAll: 'View all projects',
      items: [
        { title: 'Public Security Project',            cat: 'Government supply' },
        { title: 'Umm Al-Qura Municipality Project',   cat: 'Government supply' },
        { title: 'Tabuk Health Cluster Project',       cat: 'Government supply' },
        { title: 'Ministry of Interior Project',       cat: 'Government supply' },
        { title: 'Premium Residency Project',          cat: 'Government supply' }
      ]
    },

    contactBand: {
      title: 'Ready to equip your next office',
      sub: 'Reach out today and get a custom quote within 24 hours',
      btn: 'Contact Us'
    },

    footer: {
      blurb: 'A leading supplier of office furniture, supplies, and stationery to government, corporate, and individual clients since 2019.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      phone: 'Phone: +966 11 234 5678',
      email: 'info@futureorders.sa',
      address: 'Riyadh, Saudi Arabia'
    },

    servicesPage: {
      tag: 'Our Services',
      title: 'Integrated supply solutions for every sector',
      sub: 'From major government contracts to individual orders, we run a flexible supply system covering your office needs end to end.',
      imgPlaceholder: 'product photo',
      items: [
        { num: '01', title: 'Government Supply',   desc: 'An approved partner for government entities supplying office furniture, supplies, and stationery under contracts and tenders, fully compliant with specs and deadlines.', points: ['Government tenders & contracts', 'Strict quality & spec compliance', 'Delivery within contract timelines', 'Dedicated contract management team'] },
        { num: '02', title: 'Project Management',  desc: 'Full fit-outs for administrative offices and large projects, from needs assessment and interior planning to supply, installation, and handover.', points: ['Needs assessment & planning', 'Office space design & layout', 'Building-wide supply & install', 'Engineering oversight to handover'] },
        { num: '03', title: 'Retail & Individuals', desc: 'Flexible small and mid-size orders for startups and individuals, with fast delivery options and competitive pricing.', points: ['Individual & small-batch orders', 'Competitive pricing & offers', 'Fast delivery in major cities', 'Direct sales & support'] }
      ],
      categories: {
        tag: 'Product Categories',
        title: 'What we supply',
        items: ['Office Furniture', 'Office Supplies', 'Stationery', 'Storage & Archiving']
      },
      band: { title: 'Need a quote for a specific service?', sub: 'Reach out and we will guide you to the best fit for your project and budget', btn: 'Contact Us' }
    },

    projectsPage: {
      tag: 'Our Work',
      title: 'Projects delivered with our clients’ trust',
      sub: 'A sample of supply and fit-out projects we have completed for government entities and private companies nationwide.',
      items: [
        { title: 'Public Security Project',          cat: 'Government supply', year: '2026', desc: 'Full fit-out of a Public Security administrative building with workstations, cubicles, and executive chairs.' },
        { title: 'Umm Al-Qura Municipality Project', cat: 'Government supply', year: '2025', desc: 'Comprehensive fit-out with executive offices, workstations, and large meeting halls.' },
        { title: 'Tabuk Health Cluster Project',     cat: 'Government supply', year: '2025', desc: 'Furnishing of staff offices and modern waiting areas for a primary healthcare center.' },
        { title: 'Ministry of Interior Project',     cat: 'Government supply', year: '2025', desc: 'Executive office and grand meeting hall fit-out with refined wood finishes.' },
        { title: 'Premium Residency Project',        cat: 'Government supply', year: '2026', desc: 'Reception and hospitality lounge furnishing with a modern, on-brand look.' }
      ],
      band: { title: 'Have a similar project?', sub: 'Share your project details and we will prepare a tailored quote', btn: 'Contact Us' }
    },

    detail: {
      backToProjects: 'Back to Projects',
      detailsTitle: 'Project Details',
      aboutTitle: 'About the Project',
      fields: { client: 'Client', category: 'Category', year: 'Year', scope: 'Scope of Work' },
      otherProjects: 'Other Projects',
      viewAll: 'View all projects',
      band: { title: 'Have a similar project?', sub: 'Share your project details and we will prepare a tailored quote', btn: 'Contact Us' }
    },

    contactPage: {
      tag: 'Contact Us',
      title: 'Ready to answer your questions',
      sub: 'Reach out to request a quote or ask about our services, and our team will respond within 24 business hours.',
      info: {
        phoneLabel: 'Phone', phone: '+966 11 234 5678',
        emailLabel: 'Email', email: 'info@futureorders.sa',
        addressLabel: 'Address', address: 'Riyadh, Saudi Arabia',
        hoursLabel: 'Working Hours', hours: 'Sun - Thu, 8 AM - 5 PM'
      },
      form: {
        title: 'Request a Quote',
        name: 'Full Name', company: 'Company / Entity', phone: 'Phone Number', email: 'Email',
        type: 'Request Type',
        typeOptions: ['Select request type', 'Government Supply', 'Office Project', 'Individual Order', 'General Inquiry'],
        message: 'Request Details',
        submit: 'Send Request',
        sending: 'Sending...',
        error: 'We could not send your request. Please try again, or email us directly.',
        successTitle: 'Request received',
        successSub: 'Thanks for reaching out — our team will respond within 24 business hours.'
      }
    }
  }
};

/* ==========================================================================
   بيانات المشاريع (تفاصيل) — مشتركة بين Projects.html و ProjectDetail.html
   ========================================================================== */
var PROJECT_IMAGES = {
  'amn-aam':           { main: 'assets/projects/amn-aam-1.jpg', gallery: ['amn-aam-2.jpg', 'amn-aam-3.jpg', 'amn-aam-4.jpg', 'amn-aam-5.jpg'] },
  'amana':             { main: 'assets/projects/amana-2.jpg',   gallery: ['amana-1.jpg', 'amana-3.jpg', 'amana-5.jpg', 'amana-7.jpg', 'amana-9.jpg', 'amana-11.jpg'] },
  'tabuk-health':      { main: 'assets/projects/tabuk-8.jpg',   gallery: ['tabuk-1.jpg', 'tabuk-2.jpg', 'tabuk-3.jpg', 'tabuk-6.jpg', 'tabuk-7.jpg', 'tabuk-10.jpg'] },
  'moi':               { main: 'assets/projects/moi-3.jpg',     gallery: ['moi-1.jpg', 'moi-2.jpg', 'moi-4.jpg'] },
  'premium-residency': { main: 'assets/projects/pr-11.jpg',     gallery: ['pr-2.jpg', 'pr-6.jpg', 'pr-9.jpg', 'pr-13.jpg', 'pr-7.jpg', 'pr-3.jpg'] }
};

var PROJECT_ORDER = ['amn-aam', 'amana', 'tabuk-health', 'moi', 'premium-residency'];

var PROJECT_TEXT = {
  ar: {
    'amn-aam': {
      title: 'مشروع الأمن العام', cat: 'توريد حكومي', year: '2026',
      client: 'قطاع حكومي - الأمن العام', scope: 'تجهيز مكاتب وقاعات عمل',
      desc: 'تجهيز كامل لمقر إداري تابع للأمن العام بمحطات عمل ومقصورات مكتبية وكراسي تنفيذية عالية الجودة.',
      body: 'شمل المشروع توريد وتركيب محطات عمل (Workstations) بمقصورات مكتبية مزودة بوحدات تخزين علوية وأدراج جانبية، وكراسي مكتبية تنفيذية بمواصفات مريحة لساعات العمل الطويلة، وذلك ضمن معايير جودة وسلامة تناسب طبيعة الجهة الحكومية. تم التنفيذ على مراحل لضمان استمرارية العمل دون تعطيل.'
    },
    'amana': {
      title: 'مشروع أمانة العاصمة المقدسة', cat: 'توريد حكومي', year: '2025',
      client: 'أمانة العاصمة المقدسة', scope: 'تجهيز مكاتب إدارية وقاعات اجتماعات',
      desc: 'تجهيز متكامل لمقر أمانة العاصمة المقدسة بمكاتب تنفيذية، محطات عمل، وقاعات اجتماعات بسعة كبيرة.',
      body: 'شمل المشروع تجهيز مكتب تنفيذي متكامل بوحدات تخزين وطاولة مكتب فاخرة، إلى جانب محطات عمل جماعية بفواصل عازلة للخصوصية، وقاعتي اجتماعات كبيرتين بطاولات تتسع لأكثر من 14 مقعدًا مزودة بمنافذ كهربائية مدمجة. تم تنفيذ المشروع بما يعكس الطابع الرسمي والمكانة الاعتبارية للجهة في مكة المكرمة.'
    },
    'tabuk-health': {
      title: 'مشروع تجمع تبوك الصحي', cat: 'توريد حكومي', year: '2025',
      client: 'تجمع تبوك الصحي', scope: 'تأثيث مكاتب وصالات انتظار',
      desc: 'تجهيز مركز رعاية صحية أولية تابع لتجمع تبوك الصحي بمكاتب موظفين وصالات انتظار بتصميم عصري ومريح.',
      body: 'شمل المشروع توريد مكاتب عمل وكراسي مكتبية للموظفين، إلى جانب تجهيز صالات الانتظار بمقاعد وأرائك منحنية بألوان هادئة (تركواز وبيج) تناسب طبيعة المرفق الصحي وتمنح المرضى والزوار تجربة انتظار مريحة. تم تنفيذ المشروع بالتنسيق مع إدارة المركز ضمن مبادرات رؤية 2030 للرعاية الصحية.'
    },
    'moi': {
      title: 'مشروع وزارة الداخلية', cat: 'توريد حكومي', year: '2025',
      client: 'وزارة الداخلية', scope: 'تجهيز مكاتب وقاعة اجتماعات كبرى',
      desc: 'تجهيز مكاتب تنفيذية وقاعة اجتماعات فاخرة بتشطيبات خشبية راقية لمقر تابع لوزارة الداخلية.',
      body: 'شمل المشروع تجهيز مكاتب إدارية بطاولات زاوية ووحدات تخزين خشبية، إضافة إلى تنفيذ قاعة اجتماعات كبرى بطاولة تتسع لأكثر من 12 مقعدًا وكراسي جلدية تنفيذية، وسط تشطيبات خشبية كلاسيكية تعكس المكانة الرسمية للجهة.'
    },
    'premium-residency': {
      title: 'مشروع الإقامة المميزة', cat: 'توريد حكومي', year: '2026',
      client: 'الإقامة المميزة', scope: 'تجهيز صالات استقبال وجلسات ضيافة',
      desc: 'تجهيز مساحات استقبال وجلسات ضيافة لمنشأة الإقامة المميزة بتصميم عصري وألوان هوية متعددة.',
      body: 'شمل المشروع توريد مجموعات جلسات متنوعة (أرائك جلدية باللون الأخضر، كراسي بألوان محايدة، مقاعد أرضية) موزعة على عدة زوايا استقبال، إلى جانب طاولات رخامية وطاولات جانبية بإطارات ذهبية، وطاولات اجتماعات صغيرة بكراسي شبكية عصرية، بما يعكس هوية المنشأة الترحيبية ويخدم تجربة استقبال متميزة للزوار.'
    }
  },
  en: {
    'amn-aam': {
      title: 'Public Security Project', cat: 'Government supply', year: '2026',
      client: 'Government sector - Public Security', scope: 'Office & workstation fit-out',
      desc: 'A full office fit-out for a Public Security administrative building with workstations, cubicles, and executive chairs.',
      body: 'The project included supplying and installing workstations with overhead storage units and side drawers, plus executive chairs suited for long working hours, delivered to quality and safety standards fitting a government entity. Work was phased to avoid disrupting operations.'
    },
    'amana': {
      title: 'Umm Al-Qura Municipality Project', cat: 'Government supply', year: '2025',
      client: 'Umm Al-Qura Municipality', scope: 'Office fit-out & meeting halls',
      desc: 'Comprehensive fit-out for the Umm Al-Qura Municipality headquarters with executive offices, workstations, and large meeting halls.',
      body: 'The project included a full executive office with storage units and a premium desk, group workstations with privacy dividers, and two large meeting rooms with tables seating 14+ and built-in power outlets, delivered to reflect the formal standing of the entity in Makkah.'
    },
    'tabuk-health': {
      title: 'Tabuk Health Cluster Project', cat: 'Government supply', year: '2025',
      client: 'Tabuk Health Cluster', scope: 'Office & waiting area furnishing',
      desc: 'Furnishing of a primary healthcare center under Tabuk Health Cluster with staff offices and modern, comfortable waiting areas.',
      body: 'The project supplied staff desks and office chairs, plus curved lounge seating in calm turquoise and beige tones for the waiting areas, giving patients and visitors a comfortable experience in line with the facility’s Vision 2030 healthcare initiatives.'
    },
    'moi': {
      title: 'Ministry of Interior Project', cat: 'Government supply', year: '2025',
      client: 'Ministry of Interior', scope: 'Office & grand meeting hall fit-out',
      desc: 'Fit-out of executive offices and a grand meeting hall with refined wood finishes for a Ministry of Interior facility.',
      body: 'The project furnished administrative offices with corner desks and wood storage units, plus a grand meeting hall with a 12+ seat table and executive leather chairs, set within classic wood-paneled finishes reflecting the entity’s official standing.'
    },
    'premium-residency': {
      title: 'Premium Residency Project', cat: 'Government supply', year: '2026',
      client: 'Premium Residency', scope: 'Reception & lounge furnishing',
      desc: 'Furnishing of reception and hospitality lounge areas for the Premium Residency facility with a modern, on-brand look.',
      body: 'The project supplied varied seating groups (green leather sofas, neutral-tone chairs, floor poufs) across several reception corners, plus marble coffee tables, gold-framed side tables, and small meeting sets with modern mesh chairs, reflecting the facility’s welcoming identity and a distinctive visitor experience.'
    }
  }
};

/* شعارات الجهات (44 شعار) — تستخدم في شريط الماركي بالصفحة الرئيسية */
var CLIENT_LOGOS = [
  'assets/logos/mod.png', 'assets/logos/moi-gov.png', 'assets/logos/mofa.png', 'assets/logos/mcit.png',
  'assets/logos/moenergy.png', 'assets/logos/council-ministers.png',
  'assets/logos/saudi-health-council.png', 'assets/logos/energy-efficiency.png', 'assets/logos/mental-health.png',
  'assets/logos/wildlife.png', 'assets/logos/vegetation.png', 'assets/logos/adaa.png',
  'assets/logos/state-properties.png', 'assets/logos/awqaf.png', 'assets/logos/entertainment.png',
  'assets/logos/military-industries.png', 'assets/logos/jubail-yanbu.jpg', 'assets/logos/social-dev-bank.png',
  'assets/logos/iau.png', 'assets/logos/agri-fund.png', 'assets/logos/martyrs-fund.png',
  'assets/logos/citc.png', 'assets/logos/broadcasting.png',
  'assets/logos/rua-madinah.png', 'assets/logos/saif-security.png', 'assets/logos/nesma-partners.png', 'assets/logos/sgs.png',
  'assets/logos/air-defense.png', 'assets/logos/insurance-authority.png', 'assets/logos/sais.png', 'assets/logos/red-crescent.png',
  'assets/logos/kfmc.png', 'assets/logos/events-investment-fund.png', 'assets/logos/makkah-dev-authority.png', 'assets/logos/national-guard-health.png',
  'assets/logos/sme-bank.png', 'assets/logos/haia.png', 'assets/logos/qassim-amanah.png', 'assets/logos/king-abdulaziz-foundation.png',
  'assets/logos/haramain.png', 'assets/logos/strategic-missile-force.png', 'assets/logos/ssa-space.png',
  'assets/logos/jazan-university.png'
];

/* ==========================================================================
   محرّك اللغة
   ========================================================================== */
var LANG_KEY = 'fo-lang';

function foGetLang() {
  try {
    var saved = window.localStorage.getItem(LANG_KEY);
    if (saved === 'ar' || saved === 'en') return saved;
  } catch (e) { /* localStorage معطّل — نستخدم العربية */ }
  return 'ar';
}

function foSetLang(lang) {
  try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

/* يقرأ قيمة من القاموس عبر مسار نقطي مثل: hero.stats.0.label */
function foResolve(root, path) {
  var parts = String(path).split('.');
  var cur = root;
  for (var i = 0; i < parts.length; i++) {
    if (cur === null || cur === undefined) return undefined;
    cur = cur[parts[i]];
  }
  return cur;
}

function foTranslate(path, lang) {
  var v = foResolve(I18N[lang], path);
  return (v === undefined || v === null) ? '' : v;
}

/**
 * يطبّق اللغة على الصفحة بأكملها:
 *  - يحدّث dir/lang على <html> والخط على <body>
 *  - يحدّث كل عنصر يحمل data-i18n (نص) أو data-i18n-<attr> (سمة)
 *  - يقلب اتجاه الأسهم وزر اللغة
 * لا يعيد بناء أي عنصر، لذلك تستمر كل الأنيميشنز كما هي.
 */
function foApplyLang(lang) {
  var isAr = (lang === 'ar');
  var html = document.documentElement;

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-en', !isAr);
  document.body.classList.toggle('lang-ar', isAr);

  // النصوص
  var nodes = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var val = foTranslate(el.getAttribute('data-i18n'), lang);
    if (val !== '') el.textContent = val;
  }

  // السمات: data-i18n-alt / data-i18n-title / data-i18n-placeholder / data-i18n-value / data-i18n-aria-label
  var attrMap = { 'data-i18n-alt': 'alt', 'data-i18n-title': 'title', 'data-i18n-placeholder': 'placeholder', 'data-i18n-value': 'value', 'data-i18n-aria-label': 'aria-label' };
  for (var key in attrMap) {
    var list = document.querySelectorAll('[' + key + ']');
    for (var j = 0; j < list.length; j++) {
      var v = foTranslate(list[j].getAttribute(key), lang);
      if (v !== '') list[j].setAttribute(attrMap[key], v);
    }
  }

  // الأسهم الاتجاهية
  var arrows = document.querySelectorAll('[data-arrow]');
  for (var k = 0; k < arrows.length; k++) arrows[k].textContent = isAr ? '←' : '→';

  // زر تبديل اللغة يعرض اللغة الأخرى
  var codes = document.querySelectorAll('[data-lang-code]');
  for (var m = 0; m < codes.length; m++) codes[m].textContent = isAr ? 'EN' : 'AR';
  var btns = document.querySelectorAll('.lang-btn');
  for (var n = 0; n < btns.length; n++) {
    btns[n].setAttribute('title', isAr ? 'English' : 'العربية');
    btns[n].setAttribute('aria-label', isAr ? 'Switch to English' : 'التبديل إلى العربية');
  }

  // عنوان الصفحة
  if (window.FO_PAGE) {
    var title = foTranslate('titles.' + window.FO_PAGE, lang);
    if (title) document.title = title;
  }

  // إشعار للصفحات التي تحتاج تحديثاً إضافياً (مثل صفحة تفاصيل المشروع)
  if (typeof window.onLangChanged === 'function') window.onLangChanged(lang);

  foSetLang(lang);
  html.classList.remove('lang-boot');
}

function foToggleLang() {
  foApplyLang(foGetLang() === 'ar' ? 'en' : 'ar');
}
