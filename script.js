const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];
const languageButtons = [...document.querySelectorAll(".lang-btn")];
const zoomButtons = [...document.querySelectorAll(".zoomable-image")];
const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("figcaption");
const lightboxCloseControls = [
  lightbox?.querySelector(".lightbox-backdrop"),
  lightbox?.querySelector(".lightbox-close"),
].filter(Boolean);
const revealItems = [
  ...document.querySelectorAll(
    ".section-heading, .role-facts, .portrait-card, .education-card, .timeline article, .skills-panel, .project-card, .publication-card, .achievement-panel"
  ),
];

const activeById = new Map(
  links.map((link) => [link.getAttribute("href").replace("#", ""), link])
);

const translations = {
  en: {
    skip: "Skip to content",
    brand_subtitle: "AI & Computer Systems Portfolio",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_research: "Research/Awards",
    nav_contact: "Contact",
    hero_eyebrow: "AI Engineer / Computer Systems Developer",
    hero_role: "I build practical systems that connect AI, data, and real-world operations.",
    hero_lead:
      "I have experience in computer vision, OCR, Thai NLP, speech processing, and full-stack AI applications. My work focuses on systems that can be delivered and used in real environments, from a hospital queue management system to AI quality inspection platforms and award-winning machine learning research.",
    open_cv: "Open CV PDF",
    email_me: "Email",
    profile_label: "Profile",
    profile_summary:
      "An AI Engineer with a mechatronics engineering background, comfortable across research, model development, and production-facing system delivery.",
    fact_focus_label: "Focus",
    fact_focus_value: "Applied AI & Computer Systems",
    fact_degree_label: "Education",
    fact_degree_value: "M.Eng. Mechatronics Engineering",
    fact_english_label: "English",
    education_eyebrow: "Education",
    education_title: "Education",
    master_thesis:
      "Thesis: Sound Classification for Non-Destructive Diagnosis of Basal Stem Rot Disease based on Stem Density in Oil Palm Trunks",
    bachelor_project: "Senior Project: Game Controller for Rehabilitation Using IR and Gyro Sensors",
    experience_eyebrow: "Experience",
    experience_title: "Work Experience",
    exp_baksters:
      "Developed AI tools for process optimization and quality control, including defect detection, OCR, panel reading, object tracking, Thai sentiment analysis, summarization, and real-time speech pipelines.",
    exp_psu:
      "Conducted research in sound classification, NLP, and data analysis for health and rehabilitation systems, including machine learning models for acoustic diagnosis.",
    exp_freelance:
      "Analyzed SROI data and developed machine learning models to predict impact from independent variables.",
    skills_eyebrow: "Technical Skills",
    skills_title: "Core Skills",
    tools_workflow: "Git, Linux, basic Docker, Jupyter, Ollama, vLLM, AWS EC2/S3, Windows deployment",
    projects_eyebrow: "Selected Projects",
    projects_title: "Highlighted Projects",
    projects_intro:
      "Selected work showing system development, applied AI, and delivery in real operating environments.",
    view_image: "View image",
    qq_desc:
      "A dual-screen queue management system for service counters, separating an operator panel from a patient display. It supports offline operation, embedded Thai MP3 announcements, multiple service counters, numpad shortcuts, and a Windows launcher for dual-monitor use.",
    qq_li_1: "Deployed at the Diagnostic Radiology Department, Surat Thani Hospital",
    qq_li_2: "Synchronizes operator and patient displays with the BroadcastChannel API",
    qq_li_3: "Stores state with localStorage so the system can resume after closing the screen",
    qq_li_4:
      "Designed for real service workflows: queue range, service counters, recall, complete, stop announcement, and logs",
    smartdigest_desc:
      "A real-time Thai/English speech transcription, translation, and summarization system. It supports adaptive audio chunking, sentence-boundary handling, chunk-level transcription and translation, and post-session summaries for faster review.",
    smartdigest_li_1: "Supports real-time ASR with adaptive chunking",
    smartdigest_li_2: "Shows chunk-level transcription, translation, and latency",
    smartdigest_li_3: "Generates Thai and English summaries after each session",
    manavis_desc:
      "A Baksters computer vision analytics system that turns CCTV video into customer-density, zone time-spent, journey, and time-based behavior insights, helping teams identify bottlenecks and optimize workflows.",
    manavis_li_1: "Analyzes customer density by zone and time period",
    manavis_li_2: "Summarizes visitor journeys, time-spent, and peak days",
    manavis_li_3: "Turns CCTV footage into decision-ready operational dashboards",
    speech_desc:
      "A real-time Thai/English speech-to-text and translation system integrating speech enhancement, ASR, and vLLM-based translation.",
    speech_li_2: "Whisper ASR for Thai language",
    speech_li_3: "Approximately 1.5-second pipeline latency",
    staff_desc:
      "A YOLO11m-based system for detecting and classifying staff members in retail environments, including a custom annotation tool and multi-location video processing pipeline.",
    staff_li_3: "Designed for behavior analysis in real physical spaces",
    research_eyebrow: "Research",
    research_title: "Research & Publication",
    research_intro:
      "My main research focuses on non-destructive diagnosis of Basal Stem Rot disease in oil palm trunks using sound classification and machine learning.",
    publication_detail:
      "Published in the Journal of Advanced Research in Applied Mechanics, ISSN: 2289-7895, accepted on 9 May 2024.",
    awards_eyebrow: "Awards",
    awards_title: "Awards",
    award_detail:
      "Awarded by the National Research Council of Thailand for a machine learning tool for diagnosing Basal Stem Rot disease in oil palm trees.",
    contact_eyebrow: "Contact",
    contact_role: "AI Engineer / Computer Systems Developer",
  },
  th: {
    skip: "ข้ามไปยังเนื้อหา",
    brand_subtitle: "AI & Computer Systems Portfolio",
    nav_education: "การศึกษา",
    nav_experience: "ประสบการณ์",
    nav_projects: "โปรเจกต์",
    nav_research: "งานวิจัย/รางวัล",
    nav_contact: "ติดต่อ",
    hero_eyebrow: "AI Engineer / Computer Systems Developer",
    hero_role: "นักพัฒนาระบบที่เชื่อม AI, ข้อมูล และงานหน้างานจริงให้ใช้งานได้",
    hero_lead:
      "ผมมีประสบการณ์ด้าน computer vision, OCR, Thai NLP, speech processing และ full-stack AI application โดยเน้นการสร้างระบบที่ใช้งานจริงได้ ตั้งแต่ระบบเรียกคิวโรงพยาบาล ระบบตรวจสอบคุณภาพด้วย AI ไปจนถึงงานวิจัย machine learning ที่ได้รับรางวัลและตีพิมพ์ในวารสารวิชาการ",
    open_cv: "เปิด CV PDF",
    email_me: "ส่งอีเมล",
    profile_label: "Profile",
    profile_summary:
      "AI Engineer ที่มีพื้นฐานวิศวกรรมเมคคาทรอนิกส์ ทำงานได้ทั้งงานวิจัย การพัฒนาโมเดล และการส่งมอบระบบให้ผู้ใช้จริง",
    fact_focus_label: "Focus",
    fact_focus_value: "Applied AI & Computer Systems",
    fact_degree_label: "Education",
    fact_degree_value: "M.Eng. Mechatronics Engineering",
    fact_english_label: "English",
    education_eyebrow: "Education",
    education_title: "ประวัติการศึกษา",
    master_thesis:
      "Thesis: Sound Classification for Non-Destructive Diagnosis of Basal Stem Rot Disease based on Stem Density in Oil Palm Trunks",
    bachelor_project: "Senior Project: Game Controller for Rehabilitation Using IR and Gyro Sensors",
    experience_eyebrow: "Experience",
    experience_title: "ประวัติการทำงาน",
    exp_baksters:
      "พัฒนา AI tools สำหรับ process optimization และ quality control เช่น defect detection, OCR, panel reading, object tracking, Thai sentiment analysis, summarization และ real-time speech pipeline",
    exp_psu:
      "วิจัยด้าน sound classification, NLP และ data analysis สำหรับระบบสุขภาพและ rehabilitation รวมถึงการพัฒนาโมเดล machine learning สำหรับงาน acoustic diagnosis",
    exp_freelance: "วิเคราะห์ข้อมูล SROI และพัฒนาโมเดล machine learning เพื่อคาดการณ์ผลกระทบจากตัวแปรอิสระ",
    skills_eyebrow: "Technical Skills",
    skills_title: "ทักษะหลัก",
    tools_workflow: "Git, Linux, Docker พื้นฐาน, Jupyter, Ollama, vLLM, AWS EC2/S3, Windows deployment",
    projects_eyebrow: "Selected Projects",
    projects_title: "โปรเจกต์เด่น",
    projects_intro: "ตัวอย่างงานที่สะท้อนทั้งการพัฒนาระบบ การใช้ AI แก้ปัญหา และการส่งมอบให้ใช้งานจริง",
    view_image: "ขยายภาพ",
    qq_desc:
      "ระบบเรียกคิวสำหรับเคาน์เตอร์บริการที่ทำงานแบบสองหน้าจอ แยกแผงควบคุมสำหรับเจ้าหน้าที่และจอแสดงผลสำหรับผู้รับบริการ รองรับการใช้งานแบบ offline, เสียงประกาศภาษาไทยจาก MP3 ที่ฝังไว้ในระบบ, หลายช่องบริการ, shortcut ผ่าน numpad และ launcher สำหรับเปิดแบบ dual monitor บน Windows",
    qq_li_1: "นำไปใช้งานที่แผนกรังสีวินิจฉัย โรงพยาบาลสุราษฎร์ธานี",
    qq_li_2: "ซิงก์สถานะระหว่าง operator display และ patient display ด้วย BroadcastChannel API",
    qq_li_3: "บันทึกสถานะด้วย localStorage เพื่อให้ระบบกลับมาทำงานต่อได้หลังปิดหน้าจอ",
    qq_li_4: "ออกแบบ UI สำหรับงานบริการจริง: ช่วงบัตรคิว, ช่องบริการ, เรียกซ้ำ, เสร็จสิ้น, หยุดประกาศ และ log",
    smartdigest_desc:
      "ระบบถอดเสียง แปลภาษา และสรุปเนื้อหาแบบ real-time สำหรับภาษาไทย/อังกฤษ ออกแบบให้แบ่งเสียงเป็นช่วงอัตโนมัติ ตรวจจับขอบเขตประโยค แสดง transcript พร้อม translation และสร้าง session summary เพื่อทบทวนเนื้อหาได้เร็วขึ้น",
    smartdigest_li_1: "รองรับ ASR แบบ real-time พร้อม adaptive chunking",
    smartdigest_li_2: "แสดงผล transcription และ translation ราย chunk พร้อม latency",
    smartdigest_li_3: "สรุปเนื้อหาเป็นภาษาไทยและอังกฤษหลังจบ session",
    manavis_desc:
      "ระบบ computer vision ของ Baksters สำหรับนำวิดีโอจากกล้องวงจรปิดมาวิเคราะห์ความหนาแน่นลูกค้า เวลาใช้บริการในแต่ละโซน เส้นทางการเดิน และพฤติกรรมตามช่วงเวลา เพื่อช่วยทีมมองเห็นคอขวดและปรับ workflow ให้ลื่นไหลขึ้น",
    manavis_li_1: "วิเคราะห์ customer density แยกตามโซนและช่วงเวลา",
    manavis_li_2: "สรุป visitor journey, time-spent และ peak day เพื่อเข้าใจพฤติกรรมลูกค้า",
    manavis_li_3: "แปลงข้อมูลจาก CCTV เป็น dashboard ที่ใช้ประกอบการตัดสินใจได้",
    speech_desc:
      "ระบบถอดเสียงและแปลภาษาไทย/อังกฤษแบบ real-time โดยรวม speech enhancement, ASR และ vLLM-based translation เข้าด้วยกัน",
    speech_li_2: "Whisper ASR สำหรับภาษาไทย",
    speech_li_3: "pipeline latency ประมาณ 1.5 วินาที",
    staff_desc:
      "ระบบตรวจจับและจำแนกพนักงานในพื้นที่ค้าปลีกด้วย YOLO11m พร้อมเครื่องมือ annotation และ pipeline ประมวลผลวิดีโอจากหลายสาขา",
    staff_li_3: "ออกแบบเพื่อวิเคราะห์พฤติกรรมในพื้นที่จริง",
    research_eyebrow: "Research",
    research_title: "งานวิจัยและผลงานตีพิมพ์",
    research_intro:
      "งานวิจัยหลักของผมอยู่ที่การจำแนกเสียงสำหรับการวินิจฉัยโรคลำต้นเน่าของปาล์มน้ำมันแบบไม่ทำลาย โดยใช้ machine learning วิเคราะห์สัญญาณเสียงจากลำต้น",
    publication_detail:
      "ตีพิมพ์ใน Journal of Advanced Research in Applied Mechanics, ISSN: 2289-7895, accepted 9 May 2024",
    awards_eyebrow: "Awards",
    awards_title: "รางวัลที่ได้รับ",
    award_detail:
      "ได้รับรางวัลจากสำนักงานการวิจัยแห่งชาติ จากผลงานเครื่องมือ machine learning สำหรับวินิจฉัยโรคลำต้นเน่าของปาล์มน้ำมัน",
    contact_eyebrow: "Contact",
    contact_role: "AI Engineer / Computer Systems Developer",
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.th;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.textContent = dict[key];
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
  localStorage.setItem("portfolio-language", lang);
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach((link) => link.classList.remove("is-active"));
    activeById.get(visible.target.id)?.classList.add("is-active");
  },
  {
    rootMargin: "-30% 0px -55% 0px",
    threshold: [0.2, 0.4, 0.6],
  }
);

sections.forEach((section) => observer.observe(section));

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!motionQuery.matches) {
  revealItems.forEach((item) => item.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

let activeZoomButton = null;

function openLightbox(button) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  activeZoomButton = button;
  lightboxImage.src = button.dataset.lightboxSrc;
  lightboxImage.alt = button.dataset.lightboxAlt || "";
  lightboxCaption.textContent = button.dataset.lightboxCaption || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  lightbox.querySelector(".lightbox-close")?.focus({ preventScroll: true });
}

function closeLightbox() {
  if (!lightbox || !lightboxImage || !lightboxCaption || !lightbox.classList.contains("is-open")) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
  activeZoomButton?.focus({ preventScroll: true });
}

zoomButtons.forEach((button) => {
  button.addEventListener("click", () => openLightbox(button));
});

lightboxCloseControls.forEach((control) => {
  control.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

applyLanguage(localStorage.getItem("portfolio-language") || "th");
