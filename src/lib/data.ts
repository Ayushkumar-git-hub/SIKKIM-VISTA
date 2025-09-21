
export type Language = 'en' | 'ne' | 'hi' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ru' | 'pt' | 'bn' | 'bo' | 'dz';

export const regionalEvents = [
  {
    month: "January",
    events: [
      { name: "Maghe Sankranti", date: "Mid-January", description: "A harvest festival marking the end of the winter solstice month, celebrated with traditional food and fairs." },
    ],
  },
  {
    month: "February",
    events: [
      { name: "Losar (Tibetan New Year)", date: "Varies (Tibetan Lunar Calendar)", description: "The Tibetan New Year, celebrated with great fervor in monasteries with prayers and cultural performances." },
      { name: "Sonam Lhochhar", date: "Varies (Tamang Calendar)", description: "The new year festival of the Tamang community, celebrated with cultural events and family gatherings." },
    ],
  },
  {
    month: "May",
    events: [
      { name: "Saga Dawa", date: "Full moon of 4th Tibetan month", description: "The most sacred Buddhist festival, commemorating Buddha's birth, enlightenment, and attainment of nirvana." },
    ],
  },
  {
    month: "August",
    events: [
      { name: "Pang Lhabsol", date: "15th day of 7th Tibetan month", description: "A unique festival worshipping Mount Khangchendzonga as a guardian deity, featuring warrior dances." },
    ],
  },
  {
    month: "October-November",
    events: [
      { name: "Tihar (Diwali)", date: "Varies (Hindu Lunar Calendar)", description: "The festival of lights, celebrated by the Nepalese community with diyas, decorations, and special ceremonies." },
    ],
  },
  {
    month: "December",
    events: [
      { name: "Losoong / Namsoong", date: "End of 10th Tibetan month", description: "The Sikkimese New Year for the Bhutia and Lepcha communities, marking the end of the harvest season with archery and feasting." },
    ],
  },
];

export const userDocuments = [
  {
    id: "doc1",
    name: "Restricted Area Permit (RAP)",
    status: "Approved",
    issuedDate: "2024-05-15",
    expiryDate: "2024-06-15",
  },
  {
    id: "doc2",
    name: "Protected Area Permit (PAP) - Tsomgo Lake",
    status: "Approved",
    issuedDate: "2024-05-18",
    expiryDate: "2024-05-20",
  },
  {
    id: "doc3",
    name: "Rumtek Monastery Entry Ticket",
    status: "Active",
    issuedDate: "2024-05-19",
    expiryDate: "2024-05-19",
  },
  {
    id: "doc4",
    name: "Guide Booking Confirmation - Pelling",
    status: "Confirmed",
    issuedDate: "2024-05-12",
    expiryDate: "2024-05-22",
  },
  {
    id: "doc5",
    name: "Protected Area Permit (PAP) - North Sikkim",
    status: "Pending",
    issuedDate: "2024-05-20",
    expiryDate: "N/A",
  },
];

export const narrativeWalkthroughs: {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  imageId: string;
}[] = [
  {
    id: "narrative1",
    title: {
      en: "The Legend of Guru Padmasambhava",
      ne: "गुरु पद्मसंभवको कथा",
      hi: "गुरु पद्मसंभव की कथा",
      es: "La Leyenda de Guru Padmasambhava",
      fr: "La Légende de Guru Padmasambhava",
      de: "Die Legende von Guru Padmasambhava",
      zh: "莲花生大师的传说",
      ja: "グル・パドマサンバヴァの伝説",
      ru: "Легенда о Гуру Падмасамбхаве",
      pt: "A Lenda de Guru Padmasambhava",
      bn: "গুরু পদ্মসম্ভবের কিংবদন্তি",
      bo: "གུ་རུ་པདྨ་འབྱུང་གནས་ཀྱི་ตำนาน།",
      dz: "གུ་རུ་པདྨ་འབྱུང་གནས་ཀྱི་ལེགས་བཤད།"
    },
    description: {
      en: "Discover the story of the patron saint who blessed Sikkim and hid sacred treasures across the land.",
      ne: "सिक्किमलाई आशीर्वाद दिने र देशभरि पवित्र खजाना लुकाउने संरक्षक संतको कथा पत्ता लगाउनुहोस्।",
      hi: "उस संरक्षक संत की कहानी खोजें जिन्होंने सिक्किम को आशीर्वाद दिया और पूरे देश में पवित्र खजाने छिपाए।",
      es: "Descubre la historia del santo patrón que bendijo Sikkim y escondió tesoros sagrados por toda la tierra.",
      fr: "Découvrez l'histoire du saint patron qui a béni le Sikkim et caché des trésors sacrés à travers le pays.",
      de: "Entdecken Sie die Geschichte des Schutzheiligen, der Sikkim segnete und heilige Schätze im ganzen Land versteckte.",
      zh: "探索守护圣人的故事，他祝福了锡金并在大地上隐藏了神圣的宝藏。",
      ja: "シッキムを祝福し、土地全体に聖なる宝物を隠した守護聖人の物語を発見してください。",
      ru: "Откройте для себя историю святого покровителя, который благословил Сикким и спрятал священные сокровища по всей земле.",
      pt: "Descubra a história do santo padroeiro que abençoou Sikkim e escondeu tesouros sagrados por toda a terra.",
      bn: "সেই পৃষ্ঠপোষক সন্তের গল্প আবিষ্কার করুন যিনি সিকিমকে আশীর্বাদ করেছিলেন এবং সারা দেশে পবিত্র ধন লুকিয়ে রেখেছিলেন।",
      bo: "Discover the story of the patron saint who blessed Sikkim and hid sacred treasures across the land.",
      dz: "Discover the story of the patron saint who blessed Sikkim and hid sacred treasures across the land."
    },
    imageId: "narrative-1",
  },
  {
    id: "narrative2",
    title: {
      en: "Folklore of the Lepcha People",
      ne: "लेप्चा मानिसहरूको लोककथा",
      hi: "लेप्चा लोगों की लोककथा",
      es: "Folclore del Pueblo Lepcha",
      fr: "Folklore du Peuple Lepcha",
      de: "Folklore des Lepcha-Volkes",
      zh: "雷布查人的民间传说",
      ja: "レプチャ族の民間伝承",
      ru: "Фольклор народа лепча",
      pt: "Folclore do Povo Lepcha",
      bn: "লেপচা জনগণের লোককাহিনী",
      bo: "ལེབ་ཅའི་མི་རིགས་ཀྱི་དམངས་ཁྲོད་རིག་གནས།",
      dz: "ལེབ་ཅའི་མི་རིགས་ཀྱི་དམངས་སྲོལ།"
    },
    description: {
      en: "Dive into the ancient oral traditions of Sikkim's indigenous inhabitants, the 'Rongkup'.",
      ne: "सिक्किमका आदिवासी बासिन्दा 'रोग्कूप' को पुरानो मौखिक परम्परामा डुब्नुहोस्।",
      hi: "सिक्किम के स्वदेशी निवासियों, 'रोंगकुप' की प्राचीन मौखिक परंपराओं में गोता लगाएँ।",
      es: "Sumérgete en las antiguas tradiciones orales de los habitantes indígenas de Sikkim, los 'Rongkup'.",
      fr: "Plongez dans les anciennes traditions orales des habitants indigènes du Sikkim, les 'Rongkup'.",
      de: "Tauchen Sie ein in die alten mündlichen Überlieferungen der Ureinwohner Sikkims, der 'Rongkup'.",
      zh: "深入了解锡金土著居民“Rongkup”的古老口头传统。",
      ja: "シッキムの先住民である「ロングクップ」の古代口承伝統に飛び込んでください。",
      ru: "Погрузитесь в древние устные традиции коренных жителей Сиккима, 'Ронгкуп'.",
      pt: "Mergulhe nas antigas tradições orais dos habitantes indígenas de Sikkim, os 'Rongkup'.",
      bn: "সিকিমের আদিবাসী বাসিন্দা 'রংকুপ'-এর প্রাচীন মৌখিক ঐতিহ্যের মধ্যে ডুব দিন।",
      bo: "Dive into the ancient oral traditions of Sikkim's indigenous inhabitants, the 'Rongkup'.",
      dz: "Dive into the ancient oral traditions of Sikkim's indigenous inhabitants, the 'Rongkup'."
    },
    imageId: "narrative-2",
  },
  {
    id: "narrative3",
    title: {
      en: "The Chogyals of Sikkim: A Royal History",
      ne: "सिक्किमका चोग्यालहरू: एक शाही इतिहास",
      hi: "सिक्किम के चोग्याल: एक शाही इतिहास",
      es: "Los Chogyals de Sikkim: Una Historia Real",
      fr: "Les Chogyals du Sikkim : Une Histoire Royale",
      de: "Die Chogyals von Sikkim: Eine königliche Geschichte",
      zh: "锡金的却嘉王朝：一部皇家历史",
      ja: "シッキムのチョギャル：王室の歴史",
      ru: "Чогьялы Сиккима: Королевская история",
      pt: "Os Chogyals de Sikkim: Uma História Real",
      bn: "সিকিমের চোগিয়ালস: একটি রাজকীয় ইতিহাস",
      bo: "འབྲས་ལྗོངས་ཀྱི་ཆོས་རྒྱལ་རྣམས་ཀྱི་རྒྱལ་རབས།",
      dz: "འབྲས་ལྗོངས་ཀྱི་ཆོས་རྒྱལ་ཚུ་གི་རྒྱལ་རབས།"
    },
    description: {
      en: "Learn about the Namgyal dynasty that ruled Sikkim for more than 300 years.",
      ne: "सिक्किममा ३०० वर्षभन्दा बढी शासन गर्ने नामग्याल वंशको बारेमा जान्नुहोस्।",
      hi: "नामग्याल राजवंश के बारे में जानें जिसने सिक्किम पर ३०० से अधिक वर्षों तक शासन किया।",
      es: "Aprende sobre la dinastía Namgyal que gobernó Sikkim durante más de 300 años.",
      fr: "Découvrez la dynastie Namgyal qui a régné sur le Sikkim pendant plus de 300 ans.",
      de: "Erfahren Sie mehr über die Namgyal-Dynastie, die Sikkim über 300 Jahre lang regierte.",
      zh: "了解统治锡金超过300年的纳姆加尔王朝。",
      ja: "300年以上にわたってシッキムを統治したナムギャル王朝について学びましょう。",
      ru: "Узнайте о династии Намгьял, которая правила Сиккимом более 300 лет.",
      pt: "Aprenda sobre a dinastia Namgyal que governou Sikkim por mais de 300 anos.",
      bn: "নামগিয়াল রাজবংশ সম্পর্কে জানুন যা ৩০০ বছরেরও বেশি সময় ধরে সিকিম শাসন করেছিল।",
      bo: "Learn about the Namgyal dynasty that ruled Sikkim for more than 300 years.",
      dz: "Learn about the Namgyal dynasty that ruled Sikkim for more than 300 years."
    },
    imageId: "narrative-3",
  },
  {
    id: "narrative4",
    title: {
      en: "Secrets of Thangka Painting",
      ne: "थाङ्का चित्रकलाको रहस्य",
      hi: "थांगका चित्रकला के रहस्य",
      es: "Secretos de la Pintura Thangka",
      fr: "Les Secrets de la Peinture Thangka",
      de: "Geheimnisse der Thangka-Malerei",
      zh: "唐卡绘画的秘密",
      ja: "タンカ絵画の秘密",
      ru: "Секреты живописи танка",
      pt: "Segredos da Pintura Thangka",
      bn: "থাংকা চিত্রকলার গোপনীয়তা",
      bo: "ཐང་ཀའི་རི་མོའི་གསང་བ།",
      dz: "ཐང་ཀའི་རི་མོའི་གསང་བ།"
    },
    description: {
      en: "Explore the intricate art of Tibetan Buddhist scroll painting and its deep spiritual meaning.",
      ne: "तिब्बती बौद्ध स्क्रोल चित्रकलाको जटिल कला र यसको गहिरो आध्यात्मिक अर्थ अन्वेषण गर्नुहोस्।",
      hi: "तिब्बती बौद्ध स्क्रॉल पेंटिंग की जटिल कला और उसके गहरे आध्यात्मिक अर्थ का अन्वेषण करें।",
      es: "Explora el intrincado arte de la pintura de pergaminos budistas tibetanos y su profundo significado espiritual.",
      fr: "Explorez l'art complexe de la peinture sur rouleau bouddhiste tibétaine et sa profonde signification spirituelle.",
      de: "Erkunden Sie die komplizierte Kunst der tibetisch-buddhistischen Rollbildmalerei und ihre tiefe spirituelle Bedeutung.",
      zh: "探索藏传佛教卷轴画的复杂艺术及其深刻的精神意义。",
      ja: "チベット仏教の巻物絵画の複雑な芸術とその深い精神的意味を探求してください。",
      ru: "Исследуйте сложное искусство тибетской буддийской свитковой живописи и ее глубокий духовный смысл.",
      pt: "Explore a arte intrincada da pintura em rolo budista tibetana e seu profundo significado espiritual.",
      bn: "তিব্বতীয় বৌদ্ধ স্ক্রোল পেইন্টিংয়ের জটিল শিল্প এবং এর গভীর আধ্যাত্মিক অর্থ অন্বেষণ করুন।",
      bo: "Explore the intricate art of Tibetan Buddhist scroll painting and its deep spiritual meaning.",
      dz: "Explore the intricate art of Tibetan Buddhist scroll painting and its deep spiritual meaning."
    },
    imageId: "narrative-4",
  },
];


export const localCrafts = [
  {
    id: 'craft1',
    name: 'Hand-woven Lepcha Hat',
    price: '350.00',
    description: 'A traditional hat made from cane and bamboo, unique to the Lepcha community.',
    imageId: 'craft-1'
  },
  {
    id: 'craft2',
    name: 'Thangka Scroll Painting',
    price: '850.00',
    description: 'A detailed Buddhist painting on cotton, depicting a deity or mandala.',
    imageId: 'craft-2'
  },
  {
    id: 'craft3',
    name: 'Choktse Table',
    price: '950.00',
    description: 'A small, ornately carved wooden table, foldable and portable.',
    imageId: 'craft-3'
  },
  {
    id: 'craft4',
    name: 'Prayer Wheel (Handheld)',
    price: '600.00',
    description: 'A beautifully crafted prayer wheel containing mantras, for personal devotion.',
    imageId: 'craft-4'
  },
  {
    id: 'craft5',
    name: 'Sikkimese Carpet',
    price: '750.00',
    description: 'A hand-knotted wool carpet featuring traditional dragon and floral motifs.',
    imageId: 'craft-5'
  },
  {
    id: 'craft6',
    name: 'Singing Bowl Set',
    price: '550.00',
    description: 'A set of hand-hammered metal bowls that produce serene, meditative sounds.',
    imageId: 'craft-6'
  },
];

export const mapPois = [
  { id: 'poi1', name: 'Rumtek Monastery', top: '27.2747', left: '88.5638', description: 'One of the largest and most significant monasteries in Sikkim.' },
  { id: 'poi2', name: 'Tsomgo Lake', top: '27.3747', left: '88.7621', description: 'A glacial lake in East Sikkim, known for its changing colors.' },
  { id: 'poi3', name: 'Gangtok', top: '27.3389', left: '88.6065', description: 'The capital city, offering a blend of tradition and modernity.' },
  { id: 'poi4', name: 'Pelling', top: '27.3167', left: '88.2333', description: 'A town famous for its breathtaking views of Khangchendzonga.' },
  { id: 'poi5', name: 'Yumthang Valley', top: '27.8333', left: '88.6833', description: 'The "Valley of Flowers", a stunning alpine meadow.' },
  { id: 'poi6', name: 'Gurudongmar Lake', top: '28.0257', left: '88.7097', description: 'One of the highest lakes in the world, considered sacred.' },
];

export const eventTickets = [
  {
    id: 'ticket-event-1',
    name: 'Losar Festival Experience',
    price: '450.00',
    date: 'Feb 10-12, 2025',
    imageId: 'ticket-event-1'
  },
  {
    id: 'ticket-event-2',
    name: 'Saga Dawa Full Moon Observation',
    price: '300.00',
    date: 'May 23, 2025',
    imageId: 'ticket-event-2'
  },
  {
    id: 'ticket-event-3',
    name: 'Pang Lhabsol Warrior Dance',
    price: '425.00',
    date: 'Aug 20, 2025',
    imageId: 'ticket-event-3'
  },
  {
    id: 'ticket-event-4',
    name: 'Losoong Archery Competition',
    price: '350.00',
    date: 'Dec 28, 2025',
    imageId: 'ticket-event-4'
  }
];

export const placeTickets = [
  {
    id: 'ticket-place-1',
    name: 'Rumtek Monastery Entry',
    price: '300.00',
    type: 'Monastery',
    imageId: 'ticket-place-1'
  },
  {
    id: 'ticket-place-2',
    name: 'Tsomgo Lake Permit',
    price: '500.00',
    type: 'Natural Attraction',
    imageId: 'ticket-place-2'
  },
  {
    id: 'ticket-place-3',
    name: 'Yumthang Valley Access',
    price: '750.00',
    type: 'Natural Attraction',
    imageId: 'ticket-place-3'
  },
  {
    id: 'ticket-place-4',
    name: 'Khangchendzonga National Park',
    price: '950.00',
    type: 'National Park',
    imageId: 'ticket-place-4'
  }
];

export const hotelBookings = [
  {
    id: 'hotel-1',
    name: 'The Elgin Nor-Khill',
    pricePerNight: '950.00',
    type: 'Heritage Hotel, Gangtok',
    imageId: 'booking-hotel-1'
  },
  {
    id: 'hotel-2',
    name: 'Mayfair Spa Resort & Casino',
    pricePerNight: '1000.00',
    type: 'Luxury Resort, Gangtok',
    imageId: 'booking-hotel-2'
  },
  {
    id: 'hotel-3',
    name: 'Yankhang Residency',
    pricePerNight: '450.00',
    type: 'Boutique Hotel, Pelling',
    imageId: 'booking-hotel-3'
  },
  {
    id: 'hotel-4',
    name: 'The Golden Crest',
    pricePerNight: '350.00',
    type: 'Modern Hotel, Gangtok',
    imageId: 'booking-hotel-4'
  }
];

export const restaurantBookings = [
  {
    id: 'restaurant-1',
    name: 'Taste of Tibet',
    cuisine: 'Tibetan & Chinese, Gangtok',
    priceRange: '₹₹ - ₹₹₹',
    reservationFee: '100.00',
    imageId: 'booking-restaurant-1'
  },
  {
    id: 'restaurant-2',
    name: 'Nimtho',
    cuisine: 'Authentic Sikkimese, Gangtok',
    priceRange: '₹₹ - ₹₹₹',
    reservationFee: '150.00',
    imageId: 'booking-restaurant-2'
  },
  {
    id: 'restaurant-3',
    name: 'The Coffee Shop',
    cuisine: 'Multi-Cuisine, Pelling',
    priceRange: '₹₹₹',
    reservationFee: '200.00',
    imageId: 'booking-restaurant-3'
  },
  {
    id: 'restaurant-4',
    name: 'Cafe Live & Loud',
    cuisine: 'Cafe & Bar, Gangtok',
    priceRange: '₹₹ - ₹₹₹',
    reservationFee: '120.00',
    imageId: 'booking-restaurant-4'
  }
];

export const transportBookings = [
  {
    id: 'transport-1',
    name: 'Private Cab (Full Day)',
    price: '900.00',
    description: 'Explore Gangtok and nearby areas at your own pace.',
    imageId: 'booking-transport-1'
  },
  {
    id: 'transport-2',
    name: 'Shared Taxi to Pelling',
    price: '400.00',
    description: 'Economical option for traveling between major towns.',
    imageId: 'booking-transport-2'
  },
  {
    id: 'transport-3',
    name: 'Motorbike Rental (Per Day)',
    price: '800.00',
    description: 'For the adventurous, explore Sikkim on two wheels.',
    imageId: 'booking-transport-3'
  },
  {
    id: 'transport-4',
    name: 'Airport Transfer (Pakyong)',
    price: '550.00',
    description: 'Hassle-free transfer from Pakyong Airport to your hotel.',
    imageId: 'booking-transport-4'
  }
];

    
