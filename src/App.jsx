import React, { useState } from 'react';
import { Music, User, MapPin, Facebook, Download, Image, ChevronLeft, ChevronRight, X } from 'lucide-react';

// --- STATIC ASSETS ---
// These paths work after placing files in /public folder
const PROFILE_PHOTO = "/images/profile.jpg";
const CV_FILE = "/files/CV_Jiaying_He.pdf";
const BACKGROUND_IMAGE = "/images/background.jpg";

const CONCERT_PHOTOS = [
  { id: 1, url: "/images/concert-1.jpg", caption: "WDR Sinfonieorchester - Musik der Zeit, Köln 2026" },
  { id: 2, url: "/images/concert-2.jpg", caption: "Bergische Symphoniker - Premiere with Conductor Prof. Oliver Leo Schmidt" },
  { id: 3, url: "/images/concert-3.jpg", caption: "Bergische Symphoniker - Und doch bewegt sich, Oberhausen 2025" },
];

// --- BIOGRAPHY DATA ---
const BIO_CONTENT = {
  en: [
    "Jiaying He (born 1997) is a Chinese composer currently based in Germany. Her work focuses on contemporary music, integrating instrumental composition, electronics, and interdisciplinary practices such as dance, video, and performance.",
    "She is currently pursuing a Master of Music in Composition at the Conservatoire de Paris (CNSMDP), studying instrumental composition with Frédéric Durieux and electronic composition with Yan Maresz and Roque Rivas. In parallel, she is enrolled in a Master of Arts in Musicology with Elisabeth Schmierer and Hanna Fink and Music Theory with Matthias Schlothfeldt at the Folkwang University of the Arts in Essen. She completed her Bachelor of Music in Integrative Composition with Günter Steinke at Folkwang University, where she studied instrumental, pop, electroacoustic, and audiovisual composition.",
    "Jiaying He has participated in numerous international festivals, academies, and workshops, including Impuls – International Ensemble and Composer Academy for Contemporary Music (2023/25), Wittener Tage für neue Kammermusik (2025), blurred edges Festival (2025), Now! Festival Essen (2025), and the Next Generation program of the Donaueschinger Musiktage (2022). She has worked with ensembles and institutions such as the IEMA Ensemble, Ensemble Sillages, Ensemble MotoContrario, Ensemble Catinblack and Quatuor Diotima, and has attended masterclasses with composers including Marco Stroppa, Chaya Czernowin, Mark Andre, Clara Iannotta, and Carola Bauckholt.",
    "Her recent and upcoming projects include orchestral compositions selected by the SWR and WDR Symphony Orchestras, as well as works for the Bergische Symphoniker. Her music has been performed at festivals and concert venues across Germany, France, Italy, Spain, and Austria, often exploring themes of perception, repetition, and spatial experience through the interaction of acoustic instruments and electronics.",
    "Jiaying He has received several awards and scholarships, including prizes from international composition competitions, artist scholarships from the State of North Rhine-Westphalia, and the Foundation Prix Monique Gabus scholarship. She has also been supported by the DAAD through the PROMOS program. In addition to her compositional work, she has experience as a student assistant at the Folkwang University of the Arts, contributing to concert organization and educational outreach programs."
  ],
  de: [
    "Jiaying He (*1997) ist eine chinesische Komponistin, die derzeit in Deutschland lebt. Ihr Schaffen konzentriert sich auf zeitgenössische Musik und verbindet instrumentale Komposition, Elektronik sowie interdisziplinäre Praktiken wie Tanz, Video und Performance.",
    "Sie absolviert derzeit einen Master of Music in Komposition am Conservatoire de Paris (CNSMDP), wo sie instrumentale Komposition bei Frédéric Durieux sowie elektronische Komposition bei Yan Maresz und Roque Rivas studiert. Parallel dazu ist sie in einem Master of Arts in Musikwissenschaft bei Elisabeth Schmierer und Hanna Fink sowie in Musiktheorie bei Matthias Schlothfeldt an der Folkwang Universität der Künste in Essen eingeschrieben. Ihren Bachelor of Music in Integrativer Komposition schloss sie bei Günter Steinke an der Folkwang Universität ab, wo sie instrumentale, Pop-, elektroakustische und audiovisuelle Komposition studierte.",
    "Jiaying He nahm an zahlreichen internationalen Festivals, Akademien und Workshops teil, darunter Impuls – Internationale Ensemble- und Komponistenakademie für zeitgenössische Musik (2023/25), Wittener Tage für neue Kammermusik (2025), blurred edges Festival (2025), Now! Festival Essen (2025) sowie das Next Generation-Programm der Donaueschinger Musiktage (2022). Sie arbeitete mit Ensembles und Institutionen wie dem IEMA Ensemble, Ensemble Sillages, Ensemble MotoContrario, Ensemble Catinblack und dem Quatuor Diotima zusammen und besuchte Meisterkurse bei Komponisten wie Marco Stroppa, Chaya Czernowin, Mark Andre, Clara Iannotta und Carola Bauckholt.",
    "Zu ihren aktuellen und kommenden Projekten zählen Orchesterwerke, die vom SWR Symphonieorchester und WDR Sinfonieorchester ausgewählt wurden, sowie Kompositionen für die Bergischen Symphoniker. Ihre Musik wurde bei Festivals und in Konzertsälen in Deutschland, Frankreich, Italien, Spanien und Österreich aufgeführt und erforscht häufig Themen wie Wahrnehmung, Wiederholung und Raumerfahrung durch die Interaktion von akustischen Instrumenten und Elektronik.",
    "Jiaying He erhielt mehrere Auszeichnungen und Stipendien, darunter Preise bei internationalen Kompositionswettbewerben, Künstlerstipendien des Landes Nordrhein-Westfalen sowie das Stipendium der Fondation Prix Monique Gabus. Darüber hinaus wurde sie vom DAAD im Rahmen des PROMOS-Programms gefördert. Neben ihrer kompositorischen Tätigkeit verfügt sie über Erfahrung als studentische Hilfskraft an der Folkwang Universität der Künste, wo sie zur Konzertorganisation und zu musikpädagogischen Vermittlungsprogrammen beitrug."
  ],
  fr: [
    "Jiaying He (née en 1997) est une compositrice chinoise actuellement établie en Allemagne. Son travail se concentre sur la musique contemporaine, intégrant la composition instrumentale, l'électronique et des pratiques interdisciplinaires telles que la danse, la vidéo et la performance.",
    "Elle poursuit actuellement un Master de Musique en Composition au Conservatoire de Paris (CNSMDP), où elle étudie la composition instrumentale avec Frédéric Durieux et la composition électronique avec Yan Maresz et Roque Rivas. Parallèlement, elle est inscrite en Master of Arts en Musicologie auprès d'Elisabeth Schmierer et Hanna Fink ainsi qu'en Théorie musicale auprès de Matthias Schlothfeldt à la Folkwang Universität der Künste à Essen. Elle a obtenu son Bachelor of Music en Composition Intégrative auprès de Günter Steinke à la Folkwang Universität, où elle a étudié la composition instrumentale, pop, électroacoustique et audiovisuelle.",
    "Jiaying He a participé à de nombreux festivals, académies et ateliers internationaux, notamment Impuls – Académie internationale d'ensemble et de composition pour la musique contemporaine (2023/25), les Wittener Tage für neue Kammermusik (2025), le blurred edges Festival (2025), le Now! Festival Essen (2025) et le programme Next Generation des Donaueschinger Musiktage (2022). Elle a collaboré avec des ensembles et institutions tels que l'IEMA Ensemble, l'Ensemble Sillages, l'Ensemble MotoContrario, l'Ensemble Catinblack et le Quatuor Diotima, et a suivi des masterclasses avec des compositeurs tels que Marco Stroppa, Chaya Czernowin, Mark Andre, Clara Iannotta et Carola Bauckholt.",
    "Ses projets récents et à venir comprennent des compositions orchestrales sélectionnées par les orchestres symphoniques du SWR et du WDR, ainsi que des œuvres pour les Bergische Symphoniker. Sa musique a été interprétée lors de festivals et dans des salles de concert en Allemagne, en France, en Italie, en Espagne et en Autriche, explorant souvent des thèmes liés à la perception, à la répétition et à l'expérience spatiale à travers l'interaction entre instruments acoustiques et électronique.",
    "Jiaying He a reçu plusieurs prix et bourses, notamment des distinctions lors de concours internationaux de composition, des bourses d'artiste du Land de Rhénanie-du-Nord-Westphalie et la bourse de la Fondation Prix Monique Gabus. Elle a également bénéficié du soutien du DAAD dans le cadre du programme PROMOS. Outre son activité de compositrice, elle possède une expérience en tant qu'assistante étudiante à la Folkwang Universität der Künste, contribuant à l'organisation de concerts et à des programmes de médiation musicale."
  ]
};

const CV_DATA = {
  awards: {
    en: [
      "4th International Composer Competition New Music Generation 2022 – Horror Diploma Prize, Chamber Composition 2nd Division (21-27 years old)",
      "European Composer Competition Vienna/Austria – 3rd Category Chamber Music, 2nd Prize (2021)"
    ],
    de: [
      "4. Internationaler Kompositionswettbewerb New Music Generation 2022 – Horror Diploma Preis, Kammermusik 2. Kategorie (21-27 Jahre)",
      "European Composer Competition Wien/Österreich – 3. Kategorie Kammermusik, 2. Preis (2021)"
    ],
    fr: [
      "4e Concours international de composition New Music Generation 2022 – Prix Horror Diploma, Composition de chambre 2e division (21-27 ans)",
      "European Composer Competition Vienne/Autriche – 3e catégorie Musique de chambre, 2e Prix (2021)"
    ]
  },
  scholarships: {
    en: [
      "DAAD \"PROMOS\" Scholarship 2023 – Impuls 13th International Ensemble and Composer Academy for Contemporary Music",
      "Artist Scholarship \"Auf geht's\" 2022 – Ministry of Culture and Science of the State of North Rhine-Westphalia",
      "Artist Scholarship \"Auf geht's\" 2021 – Ministry of Culture and Science of the State of North Rhine-Westphalia"
    ],
    de: [
      "DAAD \"PROMOS\" Stipendium 2023 – Impuls 13. Internationale Ensemble- und Komponistenakademie für zeitgenössische Musik",
      "Künstlerstipendium \"Auf geht's\" 2022 – Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen",
      "Künstlerstipendium \"Auf geht's\" 2021 – Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen"
    ],
    fr: [
      "Bourse DAAD \"PROMOS\" 2023 – Impuls 13e Académie internationale d'ensemble et de composition pour la musique contemporaine",
      "Bourse d'artiste \"Auf geht's\" 2022 – Ministère de la Culture et des Sciences du Land de Rhénanie-du-Nord-Westphalie",
      "Bourse d'artiste \"Auf geht's\" 2021 – Ministère de la Culture et des Sciences du Land de Rhénanie-du-Nord-Westphalie"
    ]
  },
  festivals: {
    en: [
      "Kompositionswerkstatt des SWR (2026)",
      "Musik der Zeit, Kompositionswerkstatt des WDR und des Landesmusikrats NRW (2026)",
      "Now! Festival Essen (Oct./Nov. 2025)",
      "blurred edges Festival für aktuelle Musik Hamburg (2025)",
      "Wittener Tage für neue Kammermusik (2025)",
      "Impuls 14th International Ensemble and Composer Academy for Contemporary Music, Graz (Feb. 2025)",
      "Composition and Sound Experimentation Workshop Mixtur (Oct. 2024)",
      "MotoContrario Festival and International Composition Masterclass with Malin Bang (Aug. 2024)",
      "Impuls 13th International Ensemble and Composer Academy for Contemporary Music (Aug. 2023)",
      "Next Generation Donaueschinger Musiktage (Oct. 2022)",
      "Next_generation 9.0 in Zentrum für Kunst und Medien (ZKM) (June 2022)"
    ],
    de: [
      "Kompositionswerkstatt des SWR (2026)",
      "Musik der Zeit, Kompositionswerkstatt des WDR und des Landesmusikrats NRW (2026)",
      "Now! Festival Essen (Okt./Nov. 2025)",
      "blurred edges Festival für aktuelle Musik Hamburg (2025)",
      "Wittener Tage für neue Kammermusik (2025)",
      "Impuls 14. Internationale Ensemble- und Komponistenakademie für zeitgenössische Musik, Graz (Feb. 2025)",
      "Composition and Sound Experimentation Workshop Mixtur (Okt. 2024)",
      "MotoContrario Festival und Internationale Kompositions-Meisterklasse mit Malin Bang (Aug. 2024)",
      "Impuls 13. Internationale Ensemble- und Komponistenakademie für zeitgenössische Musik (Aug. 2023)",
      "Next Generation Donaueschinger Musiktage (Okt. 2022)",
      "Next_generation 9.0 im Zentrum für Kunst und Medien (ZKM) (Juni 2022)"
    ],
    fr: [
      "Kompositionswerkstatt des SWR (2026)",
      "Musik der Zeit, Kompositionswerkstatt des WDR und des Landesmusikrats NRW (2026)",
      "Now! Festival Essen (oct./nov. 2025)",
      "blurred edges Festival für aktuelle Musik Hamburg (2025)",
      "Wittener Tage für neue Kammermusik (2025)",
      "Impuls 14e Académie internationale d'ensemble et de composition pour la musique contemporaine, Graz (fév. 2025)",
      "Composition and Sound Experimentation Workshop Mixtur (oct. 2024)",
      "MotoContrario Festival et Masterclass internationale de composition avec Malin Bang (août 2024)",
      "Impuls 13e Académie internationale d'ensemble et de composition pour la musique contemporaine (août 2023)",
      "Next Generation Donaueschinger Musiktage (oct. 2022)",
      "Next_generation 9.0 au Zentrum für Kunst und Medien (ZKM) (juin 2022)"
    ]
  }
};

// --- CALENDAR DATA ---
const EVENTS_DATA = {
  upcoming: [
    { id: 1, date: "2026-03-27", city: "Stuttgart, Germany", venue: "SWR", title: "troublemaker", ensemble: "SWR Sinfonieorchester", description: "Orchestration: 2222/4231/2perc.1pauken/Harfe/14121086" },
  ],
  archive: [
    { id: 2, date: "2026-01-14", city: "Köln, Germany", venue: "Musik der Zeit # ATELIER", title: "vacuum travel: 55 days", ensemble: "WDR Sinfonieorchester", description: "Conductor: Baldur Brönnimann" },
    { id: 3, date: "2025-12-18", city: "Oberhausen, Germany", venue: "Oberhausen Orchestra Concert", title: "Und doch bewegt es sich", ensemble: "Bergische Symphoniker", description: "Accordion: Yilin Han, Conductor: Prof. Oliver Leo Schmidt" },
    { id: 4, date: "2025-12-05", city: "Essen, Germany", venue: "Szene 10 Theater", title: "Cette porte ne s'ouvre pas", ensemble: "Ensemble Catinblack", description: "Commissioned by Ensemble Catinblack" },
    { id: 5, date: "2025-11-08", city: "Essen, Germany", venue: "Now! Festival 2025", title: "Elements Chaos I/II", ensemble: "Interdisciplinary Composition", description: "Video: Doyeon Kim, Director: Roman Pfeifer. Funded by Essen Philharmonic, Folkwang University of Arts" },
    { id: 6, date: "2025-11-01", city: "Essen, Germany", venue: "Now! Festival 2025 / Philharmonie Essen", title: "ligne de fuite", ensemble: "Percussion Ensemble Splash (8-10 percussionists)", description: "Commissioned by Landesmusikrat NRW" },
    { id: 7, date: "2025-07", city: "Essen, Germany", venue: "Bachelor Abschluss Konzert", title: "Just last one beat (ca. 45 min)", ensemble: "Electronic Tape & Ensemble", description: "Fl, Cl, Sax, Perc, E-Guitar, Piano, Keyboard, Vln, Vla, E-Cello" },
    { id: 8, date: "2025-06", city: "Hamburg, Germany", venue: "blurred edges Festival für aktuelle Musik", title: "I am acc...", ensemble: "Violin: Anja Gaettens, Piano: Jannifer Hymer", description: "" },
    { id: 9, date: "2025-04", city: "Essen, Germany", venue: "Mini Resident GNMR", title: "Endless labyrinths (Kafka - das Schloss)", ensemble: "Dance, Electronics, Viola", description: "Funded by Gesellschaft für Neue Musik Ruhr e.V. (GNMR)" },
    { id: 10, date: "2025-03", city: "Witten, Germany", venue: "Wittener Tage für neue Kammermusik 2025", title: "Wunderland", ensemble: "IEMA Ensemble 2024/25", description: "Conductor: Yannick Mayaud" },
    { id: 11, date: "2025-02", city: "Graz, Austria", venue: "Impuls Akademie/Festival 2025", title: "Doppelwendeltreppe/Hofgasse 15", ensemble: "Performance: Jiaying He, Eva Aguilar, Julia Marczuk-Macidlowska", description: "Coached by Carola Bauckholt" },
    { id: 12, date: "2024-10", city: "Barcelona, Spain", venue: "Mixtur Festival", title: "vacuum travel II", ensemble: "Ensemble Sillages", description: "Fl, Cl, Tenor Sax & Video" },
    { id: 13, date: "2024-10-05", city: "Münster, Germany", venue: "KLANGZEIT Festival für Neue Musik", title: "I am addicted", ensemble: "Violin: Anja Gaettens, Piano: Jannifer Hymer", description: "Premiered and commissioned by GNM Münster, funded by Zonta Club Münster" },
    { id: 14, date: "2024-09", city: "Düsseldorf, Germany", venue: "Düsseldorf Festival! 2024", title: "11000 Saiten (G.F. Haas)", ensemble: "Ensemble Klangforum Wien", description: "As pianist" },
    { id: 15, date: "2024-08-26", city: "Trento, Italy", venue: "MotoContrario Festival", title: "I can't live without", ensemble: "Ensemble MotoContrario", description: "" },
    { id: 16, date: "2024", city: "Essen, Germany", venue: "Folkwang Modern", title: "When I am with you", ensemble: "Large Ensemble", description: "" },
    { id: 17, date: "2023-11-14", city: "Essen, Germany", venue: "Barbara Mauer 60. Geburtstag", title: "if only", ensemble: "Large Ensemble", description: "" },
    { id: 18, date: "2023-11", city: "Essen, Germany", venue: "2nd West meet East Festival", title: "Silver lining", ensemble: "Piano, Violin, Viola", description: "Violin: Muzi Lyu, Viola: Margot de Moin, Piano: Lina Zhang" },
    { id: 19, date: "2023", city: "Essen, Germany", venue: "Folkwang University", title: "Purpur", ensemble: "Mezzosoprano and Ensemble", description: "" },
    { id: 20, date: "2023-01", city: "Essen, Germany", venue: "Dancing Piano", title: "ONISM", ensemble: "Dance & Choreography: Clara Gremont", description: "Funded by DH.NRW Curriculum 4.0.nrw" },
    { id: 21, date: "2022-11", city: "Essen, Germany", venue: "1st West meet East Festival", title: "whisper drops", ensemble: "String Quartet", description: "" },
    { id: 23, date: "2021", city: "Essen, Germany", venue: "Folkwang University", title: "Lava", ensemble: "Flute, Clarinet, Cello, Piano", description: "" }
  ]
};

// --- SCORES DATA ---
const SCORES_DATA = [
  { id: 1, title: "Troublemaker", year: 2025, instrumentation: "Orchestra", duration: "ca. 8'", pdfUrl: "/files/partitur troublemaker 14.pdf" },
  { id: 2, title: "ligne de fuite", year: 2025, instrumentation: "Ensemble", duration: "ca. 6'30\"", pdfUrl: "/files/ligne de fuite.pdf" },
  { id: 3, title: "Und doch bewegt es sich", year: 2025, instrumentation: "Orchestra", duration: "ca. 9'", pdfUrl: "/files/Und doch bewegt es sich 17.pdf" },
  { id: 4, title: "vacuum travel: 55 days", year: 2025, instrumentation: "Orchestra", duration: "ca. 8'55\"", pdfUrl: "/files/vacuum travel 14.pdf" },
  { id: 5, title: "Wunderland", year: 2025, instrumentation: "Ensemble & Tape", duration: "ca. 7'55\"", pdfUrl: "/files/Wunderland 15.pdf" },
  { id: 6, title: "When I am with you", year: 2024, instrumentation: "Ensemble", duration: "ca. 12'30\"", pdfUrl: "/files/when i am with you 25.pdf" },
  { id: 7, title: "Purpur", year: 2023, instrumentation: "Mezzo-Soprano & Ensemble", duration: "ca. 9'", pdfUrl: "/files/prupur jiayinghe .pdf" },
  { id: 8, title: "Cette porte ne s'ouvre pas", year: 2025, instrumentation: "Ensemble Catinblack", duration: "ca. 8'", pdfUrl: "/files/CatinBlack Ensemble 3.pdf" },
  { id: 9, title: "I am acc...", year: 2025, instrumentation: "Duo", duration: "ca. 7'30\"", pdfUrl: "/files/I am acc... 2.pdf" },
  { id: 10, title: "Hallo World!", year: 2025, instrumentation: "Ensemble & Tape", duration: "ca. 11'30\"", pdfUrl: "/files/hallo world!  2025 9.pdf" },
  { id: 11, title: "Peekaboo", year: 2025, instrumentation: "Trio", duration: "ca. 4'", pdfUrl: "/files/peekaboo 2025 3.pdf" },
  { id: 12, title: "sieh hinüber …", year: 2022, instrumentation: "Ensemble", duration: "ca. 8'25\"", pdfUrl: "/files/sieh hinüber... (2022) 15.pdf" },
  { id: 13, title: "Silver lining", year: 2023, instrumentation: "Trio", duration: "ca. 8'", pdfUrl: "/files/silver lining 11.pdf" },
  { id: 14, title: "whisper drops", year: 2022, instrumentation: "Streichquartett", duration: "ca. 9'47\"", pdfUrl: "/files/whisper drops.pdf" },
];

// --- HELPER FUNCTION ---
const findMatchingScore = (eventTitle) => {
  const normalizedEventTitle = eventTitle.toLowerCase().trim();
  return SCORES_DATA.find(score => {
    const normalizedScoreTitle = score.title.toLowerCase().trim();
    return score.pdfUrl && (
      normalizedEventTitle === normalizedScoreTitle ||
      normalizedEventTitle.includes(normalizedScoreTitle) ||
      normalizedScoreTitle.includes(normalizedEventTitle)
    );
  });
};

// --- COMPONENTS ---

const ModalWrapper = ({ title, children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-black/10 transition-opacity">
    <div className="relative w-full max-w-5xl h-[85vh] bg-white shadow-2xl flex flex-col overflow-hidden rounded-sm">
      <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-100">
        <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] uppercase text-gray-900">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors text-xl font-light p-2">
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
        {children}
      </div>
    </div>
  </div>
);

const BioContent = () => {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: { en: 'Biography', de: 'Biografie', fr: 'Biographie' } },
    { id: 'festivals', label: { en: 'Festivals', de: 'Festivals', fr: 'Festivals' } },
    { id: 'awards', label: { en: 'Awards', de: 'Auszeichnungen', fr: 'Prix' } },
    { id: 'scholarships', label: { en: 'Scholarships', de: 'Stipendien', fr: 'Bourses' } }
  ];

  return (
    <div className="max-w-3xl mx-auto pb-10">
      {/* Profile Photo */}
      <div className="flex justify-center mb-10">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gray-100 shadow-lg">
          <img src={PROFILE_PHOTO} alt="Jiaying He" className="w-full h-full object-cover object-top" />
        </div>
      </div>

      {/* Language Switcher */}
      <div className="flex justify-center gap-6 mb-8">
        {['en', 'de', 'fr'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-xs uppercase tracking-widest transition-all ${lang === l ? 'text-black font-bold border-b border-black pb-1' : 'text-gray-400 hover:text-black'}`}
          >
            {l === 'en' ? 'English' : l === 'de' ? 'Deutsch' : 'Français'}
          </button>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-gray-100 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all ${activeTab === tab.id ? 'bg-black text-white' : 'text-gray-400 hover:text-black border border-gray-100'}`}
          >
            {tab.label[lang]}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'bio' && (
        <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
          {BIO_CONTENT[lang].map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}

      {activeTab === 'festivals' && (
        <ul className="space-y-4">
          {CV_DATA.festivals[lang].map((item, idx) => (
            <li key={idx} className="text-gray-700 font-light leading-relaxed pl-4 border-l-2 border-gray-100 hover:border-black transition-colors">
              {item}
            </li>
          ))}
        </ul>
      )}

      {activeTab === 'awards' && (
        <ul className="space-y-6">
          {CV_DATA.awards[lang].map((award, idx) => (
            <li key={idx} className="text-gray-700 font-light leading-relaxed pl-4 border-l-2 border-gray-100 hover:border-black transition-colors">
              {award}
            </li>
          ))}
        </ul>
      )}

      {activeTab === 'scholarships' && (
        <ul className="space-y-6">
          {CV_DATA.scholarships[lang].map((item, idx) => (
            <li key={idx} className="text-gray-700 font-light leading-relaxed pl-4 border-l-2 border-gray-100 hover:border-black transition-colors">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CalendarContent = ({ onViewScore }) => {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Upcoming</h3>
        <div className="grid gap-4">
          {EVENTS_DATA.upcoming.map(evt => {
            const matchedScore = findMatchingScore(evt.title);
            return (
              <div key={evt.id} className="group flex flex-col md:flex-row md:items-start bg-gray-50 p-6 transition-all hover:bg-black hover:text-white">
                <div className="md:w-40 mb-2 md:mb-0 flex-shrink-0 text-xl font-light tracking-tighter group-hover:text-white/80">{evt.date}</div>
                <div className="flex-1">
                  {matchedScore ? (
                    <h4 
                      onClick={() => onViewScore(matchedScore)}
                      className="text-xl font-normal mb-1 uppercase tracking-wider cursor-pointer underline decoration-1 underline-offset-4 hover:decoration-2"
                    >
                      {evt.title} →
                    </h4>
                  ) : (
                    <h4 className="text-xl font-normal mb-1 uppercase tracking-wider">{evt.title}</h4>
                  )}
                  <p className="font-light opacity-80">{evt.ensemble}</p>
                  <p className="text-sm mt-1 opacity-60">@ {evt.venue}</p>
                  {evt.description && <p className="text-xs mt-3 italic opacity-50">{evt.description}</p>}
                </div>
                <div className="md:w-48 text-right flex items-center justify-end gap-2 mt-4 md:mt-0 opacity-50 text-xs uppercase tracking-widest">
                  <MapPin size={12} /> {evt.city}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Archive</h3>
        <div className="grid gap-2">
          {EVENTS_DATA.archive.map(evt => {
            const matchedScore = findMatchingScore(evt.title);
            return (
              <div key={evt.id} className="flex flex-col md:flex-row md:items-center p-4 border-b border-gray-100 text-gray-500 hover:bg-gray-50 transition-colors">
                <div className="md:w-28 font-mono text-xs flex-shrink-0">{evt.date}</div>
                <div className="flex-1 text-sm font-light">
                  {matchedScore ? (
                    <span 
                      onClick={() => onViewScore(matchedScore)}
                      className="font-medium text-gray-800 cursor-pointer underline decoration-1 underline-offset-2 hover:decoration-2 hover:text-black"
                    >
                      {evt.title} →
                    </span>
                  ) : (
                    <span className="font-medium text-gray-800">{evt.title}</span>
                  )}
                  <span className="text-gray-400"> / {evt.ensemble}</span>
                  {evt.description && <span className="text-gray-300 text-xs block mt-1">{evt.description}</span>}
                </div>
                <div className="md:w-40 text-right text-[10px] uppercase tracking-widest mt-2 md:mt-0">{evt.city}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ScoresContent = ({ initialScoreId }) => {
  const [selectedScore, setSelectedScore] = useState(() => {
    if (initialScoreId) {
      return SCORES_DATA.find(s => s.id === initialScoreId) || null;
    }
    return null;
  });
  const years = [...new Set(SCORES_DATA.map(s => s.year))].sort((a, b) => b - a);
  const [filterYear, setFilterYear] = useState('all');

  const filteredScores = filterYear === 'all' 
    ? SCORES_DATA 
    : SCORES_DATA.filter(s => s.year === parseInt(filterYear));

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 italic">Scores are available for viewing only. Downloads are disabled to protect copyright.</p>
      </div>

      {/* Year Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setFilterYear('all')}
          className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${filterYear === 'all' ? 'bg-black text-white' : 'border border-gray-200 text-gray-500 hover:border-black'}`}
        >
          All
        </button>
        {years.map(year => (
          <button
            key={year}
            onClick={() => setFilterYear(year.toString())}
            className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${filterYear === year.toString() ? 'bg-black text-white' : 'border border-gray-200 text-gray-500 hover:border-black'}`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="grid gap-3">
        {filteredScores.map(score => (
          <div key={score.id} data-score-id={score.id} className="group flex flex-col md:flex-row md:items-center p-4 border border-gray-100 hover:border-black transition-colors">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{score.title}</h4>
              <p className="text-sm text-gray-500">{score.instrumentation}</p>
            </div>
            <div className="flex items-center gap-4 mt-3 md:mt-0">
              {score.duration && <span className="text-xs text-gray-400">{score.duration}</span>}
              <span className="text-xs text-gray-300">{score.year}</span>
              {score.pdfUrl && (
                <button 
                  onClick={() => setSelectedScore(score)}
                  className="px-3 py-1.5 text-xs uppercase tracking-wider bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  View Score
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Score Viewer Modal */}
      {selectedScore && selectedScore.pdfUrl && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] m-4">
            <button 
              onClick={() => setSelectedScore(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
            
            {/* Watermark */}
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
              <div className="text-white/10 text-6xl font-bold rotate-[-30deg] select-none tracking-widest">
                © JIAYING HE
              </div>
            </div>
            
            <div className="w-full h-full bg-white rounded overflow-hidden">
              <iframe 
                src={`${selectedScore.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full"
                title={selectedScore.title}
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded text-sm">
              {selectedScore.title} • View Only
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PhotosContent = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const navigatePhoto = (direction) => {
    if (selectedPhotoIndex === null) return;
    const newIndex = selectedPhotoIndex + direction;
    if (newIndex >= 0 && newIndex < CONCERT_PHOTOS.length) {
      setSelectedPhotoIndex(newIndex);
    }
  };

  return (
    <div className="space-y-8">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONCERT_PHOTOS.map((photo, index) => (
          <div 
            key={photo.id} 
            className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-100"
            onClick={() => setSelectedPhotoIndex(index)}
          >
            <img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
              <p className="text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhotoIndex !== null && CONCERT_PHOTOS[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center">
          <button 
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <X size={28} />
          </button>
          
          {selectedPhotoIndex > 0 && (
            <button 
              onClick={() => navigatePhoto(-1)}
              className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={36} />
            </button>
          )}
          
          {selectedPhotoIndex < CONCERT_PHOTOS.length - 1 && (
            <button 
              onClick={() => navigatePhoto(1)}
              className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={36} />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] mx-4">
            <img 
              src={CONCERT_PHOTOS[selectedPhotoIndex].url} 
              alt={CONCERT_PHOTOS[selectedPhotoIndex].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white/80 text-center mt-4 text-sm">
              {CONCERT_PHOTOS[selectedPhotoIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactContent = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-16 py-12">
    <div className="space-y-4">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Direct Inquiries</h3>
      <a href="mailto:jiayinghe.music@gmail.com" className="text-xl md:text-3xl font-light hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1">
        jiayinghe.music@gmail.com
      </a>
    </div>

    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
      {[
        { label: 'SoundCloud', icon: <Music size={20} />, url: 'https://soundcloud.com/8ghtlom8bgsd' },
        { label: 'Instagram', icon: <User size={20} />, url: 'https://www.instagram.com/jiaying_he_' },
        { label: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/share/1GERdRK27j' }
      ].map((social) => (
        <a 
          key={social.label}
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 text-gray-400 hover:text-black transition-all"
        >
          <div className="p-5 border border-gray-100 rounded-full group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
            {social.icon}
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">{social.label}</span>
        </a>
      ))}
    </div>
  </div>
);

// --- MAIN APP ---
export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedScoreId, setSelectedScoreId] = useState(null);

  const handleViewScoreFromCalendar = (score) => {
    setSelectedScoreId(score.id);
    setActiveSection('scores');
  };
  
  return (
    <div className="relative w-full min-h-screen font-sans text-gray-900 overflow-hidden bg-black select-none">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50 grayscale"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply" />

      {/* CV Download Button */}
      <a 
        href={CV_FILE}
        download="CV_Jiaying_He.pdf"
        className="fixed top-6 right-6 z-20 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest flex items-center gap-2 border border-white/20"
      >
        <Download size={14} /> CV
      </a>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-white">
        
        {/* Name */}
        <div className={`transition-all duration-1000 ${activeSection ? 'opacity-0 -translate-y-20 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.2em] text-center uppercase leading-tight mb-4">
            Jiaying<br/>He
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/40">
            <div className="h-px w-8 bg-white/20"></div>
            <p className="tracking-[0.5em] text-[10px] md:text-xs uppercase font-light">
              Contemporary Music
            </p>
            <div className="h-px w-8 bg-white/20"></div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`mt-20 md:mt-32 flex flex-wrap justify-center gap-6 md:gap-10 transition-all duration-1000 delay-200
          ${activeSection ? 'opacity-0 translate-y-20 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          {[
            { id: 'bio', label: 'Biography' },
            { id: 'calendar', label: 'Calendar' },
            { id: 'scores', label: 'Scores' },
            { id: 'photos', label: 'Photos' },
            { id: 'contact', label: 'Contact' }
          ].map(nav => (
            <button 
              key={nav.id}
              onClick={() => {
                setSelectedScoreId(null);
                setActiveSection(nav.id);
              }}
              className="group relative px-4 py-2 text-sm tracking-[0.4em] uppercase font-light text-white/70 hover:text-white transition-colors"
            >
              {nav.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div className={`fixed bottom-8 w-full text-center z-10 text-white/20 text-[9px] tracking-[0.4em] uppercase transition-opacity duration-1000 ${activeSection ? 'opacity-0' : 'opacity-100'}`}>
        <div>© 2026 Jiaying He • Composer</div>
        <div className="mt-1">Website by Ziheng Sun</div>
      </div>

      {/* Modals */}
      {activeSection === 'bio' && (
        <ModalWrapper title="Biography" onClose={() => setActiveSection(null)}>
          <BioContent />
        </ModalWrapper>
      )}
      {activeSection === 'calendar' && (
        <ModalWrapper title="Calendar" onClose={() => setActiveSection(null)}>
          <CalendarContent onViewScore={handleViewScoreFromCalendar} />
        </ModalWrapper>
      )}
      {activeSection === 'scores' && (
        <ModalWrapper title="Scores" onClose={() => { setActiveSection(null); setSelectedScoreId(null); }}>
          <ScoresContent initialScoreId={selectedScoreId} />
        </ModalWrapper>
      )}
      {activeSection === 'photos' && (
        <ModalWrapper title="Concert Photos" onClose={() => setActiveSection(null)}>
          <PhotosContent />
        </ModalWrapper>
      )}
      {activeSection === 'contact' && (
        <ModalWrapper title="Contact" onClose={() => setActiveSection(null)}>
          <ContactContent />
        </ModalWrapper>
      )}

      {/* Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9f9f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e0e0e0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #000;
        }
      `}} />

    </div>
  );
}
