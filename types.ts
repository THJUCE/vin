
export type Language = 'ru' | 'en' | 'vi';

export interface TranslationSet {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  nav: {
    gallery: string;
    booking: string;
    prices: string;
    about: string;
    contacts: string;
  };
  aiMagic: {
    title: string;
    subtitle: string;
    before: string;
    after: string;
  };
  prices: {
    title: string;
    basic: { name: string; oldPrice: string; price: string; features: string[] };
    standard: { name: string; oldPrice: string; price: string; features: string[] };
    premium: { name: string; oldPrice: string; price: string; features: string[] };
  };
  aiServices: {
    title: string;
    neuro: { name: string; desc: string };
    video: { name: string; desc: string };
  };
  faq: {
    title: string;
    q1: { q: string; a: string };
    q2: { q: string; a: string };
    q3: { q: string; a: string };
  };
  about: {
    title: string;
    text: string;
  };
  booking: {
    title: string;
    nameLabel: string;
    dateLabel: string;
    phoneLabel: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    submit: string;
    success: string;
  };
  contacts: {
    title: string;
    address: string;
    socials: string;
    navigation: string;
  };
}

export const translations: Record<Language, TranslationSet> = {
  ru: {
    hero: {
      title: "PHOTOSESSION PRO",
      subtitle: "Ваша история в объективе профессионалов на острове Vinpearl и в Нячанге",
      cta: "Забронировать"
    },
    nav: {
      gallery: "Галерея",
      booking: "Бронь",
      prices: "Прайс",
      about: "О нас",
      contacts: "Контакты"
    },
    aiMagic: {
      title: "Магия AI",
      subtitle: "Посмотрите, как нейросети преображают реальность",
      before: "Оригинал",
      after: "AI Обработка"
    },
    prices: {
      title: "Пакеты услуг",
      basic: {
        name: "Экспресс",
        oldPrice: "85 USD",
        price: "60 USD",
        features: ["40 минут съемки", "15 фотографий", "Все исходники", "Консультация"]
      },
      standard: {
        name: "Стандарт",
        oldPrice: "140 USD",
        price: "110 USD",
        features: ["1.5 часа съемки", "35 фотографий", "Все исходники", "Локации Vinpearl"]
      },
      premium: {
        name: "Премиум",
        oldPrice: "190 USD",
        price: "140 USD",
        features: ["3 часа съемки", "60 фотографий", "Все исходники", "Все локации острова"]
      }
    },
    aiServices: {
      title: "AI Технологии",
      neuro: {
        name: "AI Нейрофотосессии",
        desc: "Создаем уникальные образы с помощью AI. Ваши фото в любых стилях и мирах."
      },
      video: {
        name: "AI Видео для сетей",
        desc: "Профессиональные Reels и TikTok ролики с использованием AI эффектов."
      }
    },
    faq: {
      title: "Частые вопросы",
      q1: { q: "Нужны ли билеты на Винперл?", a: "Для съемок на острове необходим входной билет. Мы поможем с выбором лучшего времени для визита." },
      q2: { q: "Когда я получу фото?", a: "Исходники в день съемки, обработанные фото — в течение 3-5 дней." },
      q3: { q: "Помогаете ли вы с позированием?", a: "Конечно! Наш фотограф направит вас и поможет чувствовать себя уверенно в кадре." }
    },
    about: {
      title: "О PHOTOSESSION PRO",
      text: "Мы создаем визуальное искусство в тропиках. Наша команда использует новейшие технологии AI и профессиональное оборудование для идеальных кадров на острове Винперл."
    },
    booking: {
      title: "Записаться на съемку",
      nameLabel: "Ваше имя",
      dateLabel: "Дата съемки",
      phoneLabel: "WhatsApp / Telegram",
      namePlaceholder: "Введите ваше имя",
      phonePlaceholder: "Ваш номер телефона",
      submit: "Отправить заявку",
      success: "Заявка отправлена! Мы свяжемся с вами в WhatsApp."
    },
    contacts: {
      title: "На связи 24/7",
      address: "Остров Винперл, Нячанг, Вьетнам",
      socials: "Социальные сети",
      navigation: "Навигация"
    }
  },
  en: {
    hero: {
      title: "PHOTOSESSION PRO",
      subtitle: "Your story through professional lenses on Vinpearl Island & Nha Trang",
      cta: "Book Now"
    },
    nav: {
      gallery: "Gallery",
      booking: "Booking",
      prices: "Prices",
      about: "About",
      contacts: "Contacts"
    },
    aiMagic: {
      title: "AI Magic",
      subtitle: "See how neural networks transform reality",
      before: "Original",
      after: "AI Processed"
    },
    prices: {
      title: "Service Packages",
      basic: {
        name: "Express",
        oldPrice: "85 USD",
        price: "60 USD",
        features: ["40 minutes shoot", "15 photos", "All source files", "Consultation"]
      },
      standard: {
        name: "Standard",
        oldPrice: "140 USD",
        price: "110 USD",
        features: ["1.5 hours shoot", "35 photos", "All source files", "Vinpearl locations"]
      },
      premium: {
        name: "Premium",
        oldPrice: "190 USD",
        price: "140 USD",
        features: ["3 hours shoot", "60 photos", "All source files", "All island locations"]
      }
    },
    aiServices: {
      title: "AI Future",
      neuro: {
        name: "AI Neuro-sessions",
        desc: "Generate stunning high-end looks using AI technology based on your photos."
      },
      video: {
        name: "AI Social Video",
        desc: "Dynamic Reels and TikTok content enhanced with the latest AI effects."
      }
    },
    faq: {
      title: "FAQ",
      q1: { q: "Do I need Vinpearl tickets?", a: "Yes, an entry ticket is required for island shoots. We'll guide you on the best time to go." },
      q2: { q: "When will I get my photos?", a: "RAW files on the same day, edited photos within 3-5 days." },
      q3: { q: "Do you help with posing?", a: "Absolutely! Our photographers will guide you through every move to look your best." }
    },
    about: {
      title: "About Photosession Pro",
      text: "Crafting visual art in the heart of the tropics. Our team combines advanced AI tech with pro expertise on Vinpearl Island."
    },
    booking: {
      title: "Book Your Session",
      nameLabel: "Your Name",
      dateLabel: "Preferred Date",
      phoneLabel: "WhatsApp / Telegram",
      namePlaceholder: "Enter your full name",
      phonePlaceholder: "Your phone number",
      submit: "Book Session",
      success: "Success! We will contact you via WhatsApp shortly."
    },
    contacts: {
      title: "Get in Touch",
      address: "Vinpearl Island, Nha Trang, Vietnam",
      socials: "Social Media",
      navigation: "Navigation"
    }
  },
  vi: {
    hero: {
      title: "PHOTOSESSION PRO",
      subtitle: "Câu chuyện của bạn qua ống kính chuyên nghiệp tại đảo Vinpearl & Nha Trang",
      cta: "Đặt lịch ngay"
    },
    nav: {
      gallery: "Bộ sưu tập",
      booking: "Đặt lịch",
      prices: "Giá cả",
      about: "Về chúng tôi",
      contacts: "Liên hệ"
    },
    aiMagic: {
      title: "Phép màu AI",
      subtitle: "Xem cách mạng thần kinh thay đổi thực tại",
      before: "Gốc",
      after: "Xử lý AI"
    },
    prices: {
      title: "Gói dịch vụ",
      basic: {
        name: "Cấp tốc",
        oldPrice: "2.000.000đ",
        price: "1.500.000đ",
        features: ["40 phút chụp", "15 ảnh", "Tất cả ảnh gốc", "Tư vấn"]
      },
      standard: {
        name: "Tiêu chuẩn",
        oldPrice: "3.000.000đ",
        price: "2.800.000đ",
        features: ["1.5 giờ chụp", "35 ảnh", "Tất cả ảnh gốc", "Địa điểm Vinpearl"]
      },
      premium: {
        name: "Cao cấp",
        oldPrice: "5.000.000đ",
        price: "3.700.000đ",
        features: ["3 giờ chụp", "60 ảnh", "Tất cả ảnh gốc", "Toàn bộ đảo"]
      }
    },
    aiServices: {
      title: "Công nghệ AI",
      neuro: {
        name: "Chụp ảnh Neuro AI",
        desc: "Tạo ra các bộ ảnh độc đáo với AI dựa trên hình ảnh thật của bạn."
      },
      video: {
        name: "Video AI xã hội",
        desc: "Video Reels và TikTok chuyên nghiệp với hiệu ứng AI đỉnh cao."
      }
    },
    faq: {
      title: "Câu hỏi thường gặp",
      q1: { q: "Tôi có cần mua vé Vinpearl không?", a: "Có, bạn cần vé vào cổng để chụp ảnh trên đảo. Chúng tôi sẽ tư vấn thời gian đi tốt nhất." },
      q2: { q: "Khi nào tôi nhận được ảnh?", a: "Ảnh gốc nhận ngay trong ngày, ảnh chỉnh sửa sau 3-5 ngày." },
      q3: { q: "Bạn có hướng dẫn tạo dáng không?", a: "Tất nhiên! Nhiếp ảnh gia của chúng tôi sẽ hướng dẫn bạn để có những góc hình đẹp nhất." }
    },
    about: {
      title: "Về Photosession Pro",
      text: "Tạo ra nghệ thuật thị giác giữa lòng nhiệt đới. Đội ngũ của chúng tôi kết hợp AI và kinh nghiệm chụp ảnh tại Vinpearl."
    },
    booking: {
      title: "Đặt lịch chụp",
      nameLabel: "Tên của bạn",
      dateLabel: "Ngày chụp",
      phoneLabel: "WhatsApp / Zalo",
      namePlaceholder: "Nhập họ tên của bạn",
      phonePlaceholder: "Số điện thoại của bạn",
      submit: "Gửi yêu cầu",
      success: "Thành công! Chúng tôi sẽ liên hệ qua WhatsApp/Zalo sớm nhất."
    },
    contacts: {
      title: "Liên hệ ngay",
      address: "Đảo Vinpearl, Nha Trang, Việt Nam",
      socials: "Mạng xã hội",
      navigation: "Điều hướng"
    }
  }
};
