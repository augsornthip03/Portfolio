<!doctype html>
<html lang="th">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Chalatorn Augsornthip | Portfolio</title>
    <meta
      name="description"
      content="Portfolio of Chalatorn Augsornthip - AI Engineer and Computer Systems Developer"
    >
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <a class="skip-link" href="#main" data-i18n="skip">ข้ามไปยังเนื้อหา</a>

    <header class="site-header" aria-label="Navigation">
      <nav class="nav">
        <a class="brand" href="#top" aria-label="Back to top">
          <span class="brand-mark">CA</span>
          <span>
            <strong>Chalatorn</strong>
            <small data-i18n="brand_subtitle">AI & Computer Systems Portfolio</small>
          </span>
        </a>
        <div class="nav-actions">
          <div class="nav-links" aria-label="Main navigation">
            <a href="#education" data-i18n="nav_education">การศึกษา</a>
            <a href="#experience" data-i18n="nav_experience">ประสบการณ์</a>
            <a href="#projects" data-i18n="nav_projects">โปรเจกต์</a>
            <a href="#research" data-i18n="nav_research">งานวิจัย/รางวัล</a>
            <a href="#contact" data-i18n="nav_contact">ติดต่อ</a>
          </div>
          <div class="language-toggle" aria-label="Language">
            <button type="button" class="lang-btn is-active" data-lang="th">TH</button>
            <button type="button" class="lang-btn" data-lang="en">EN</button>
          </div>
        </div>
      </nav>
    </header>

    <main id="main">
      <section class="hero section-band" id="top">
        <div class="hero-inner intro-layout">
          <div class="hero-copy">
            <p class="eyebrow" data-i18n="hero_eyebrow">AI Engineer / Computer Systems Developer</p>
            <h1>Chalatorn Augsornthip</h1>
            <p class="role-line" data-i18n="hero_role">นักพัฒนาระบบที่เชื่อม AI, ข้อมูล และงานหน้างานจริงให้ใช้งานได้</p>
            <p class="hero-lead" data-i18n="hero_lead">
              ผมมีประสบการณ์ด้าน computer vision, OCR, Thai NLP, speech processing และ full-stack AI application
              โดยเน้นการสร้างระบบที่ใช้งานจริงได้ ตั้งแต่ระบบเรียกคิวโรงพยาบาล ระบบตรวจสอบคุณภาพด้วย AI
              ไปจนถึงงานวิจัย machine learning ที่ได้รับรางวัลและตีพิมพ์ในวารสารวิชาการ
            </p>
            <div class="hero-actions" aria-label="Important links">
              <a class="button primary" href="assets/Chalatorn_Augsornthip_CV.pdf" target="_blank" rel="noreferrer" data-i18n="open_cv">เปิด CV PDF</a>
              <a class="button secondary" href="mailto:augsornthip03@gmail.com" data-i18n="email_me">ส่งอีเมล</a>
              <a class="button ghost" href="https://github.com/augsornthip03" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <aside class="portrait-card" aria-label="Profile">
            <img class="profile-photo" src="assets/profile-photo.jpg" alt="Portrait of Chalatorn Augsornthip">
            <div class="portrait-info">
              <p class="eyebrow" data-i18n="profile_label">Profile</p>
              <h2>Chalatorn Augsornthip</h2>
              <p data-i18n="profile_summary">
                AI Engineer ที่มีพื้นฐานวิศวกรรมเมคคาทรอนิกส์ ทำงานได้ทั้งงานวิจัย การพัฒนาโมเดล และการส่งมอบระบบให้ผู้ใช้จริง
              </p>
            </div>
          </aside>
        </div>

        <div class="role-facts" aria-label="Quick facts">
          <div>
            <span data-i18n="fact_focus_label">Focus</span>
            <strong data-i18n="fact_focus_value">Applied AI & Computer Systems</strong>
          </div>
          <div>
            <span data-i18n="fact_degree_label">Education</span>
            <strong data-i18n="fact_degree_value">M.Eng. Mechatronics Engineering</strong>
          </div>
          <div>
            <span data-i18n="fact_english_label">English</span>
            <strong>TOEIC 885</strong>
          </div>
        </div>
      </section>

      <section class="section-band light" id="education">
        <div class="section-inner">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="education_eyebrow">Education</p>
            <h2 data-i18n="education_title">ประวัติการศึกษา</h2>
          </div>
          <div class="education-grid">
            <article class="education-card">
              <span>August 2020 - February 2024</span>
              <h3>M.Eng. in Mechatronics Engineering</h3>
              <p>Prince of Songkla University</p>
              <p data-i18n="master_thesis">Thesis: Sound Classification for Non-Destructive Diagnosis of Basal Stem Rot Disease based on Stem Density in Oil Palm Trunks</p>
            </article>
            <article class="education-card">
              <span>August 2016 - May 2020</span>
              <h3>B.Eng. in Mechatronics Engineering</h3>
              <p>Prince of Songkla University</p>
              <p data-i18n="bachelor_project">Senior Project: Game Controller for Rehabilitation Using IR and Gyro Sensors</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section-band" id="experience">
        <div class="section-inner two-column">
          <div>
            <div class="section-heading compact">
              <p class="eyebrow" data-i18n="experience_eyebrow">Experience</p>
              <h2 data-i18n="experience_title">ประวัติการทำงาน</h2>
            </div>
            <div class="timeline">
              <article>
                <span>May 2024 - March 2026</span>
                <h3>AI Researcher / Engineer, Baksters Co., Ltd</h3>
                <p data-i18n="exp_baksters">
                  พัฒนา AI tools สำหรับ process optimization และ quality control เช่น defect detection,
                  OCR, panel reading, object tracking, Thai sentiment analysis, summarization และ real-time speech pipeline
                </p>
              </article>
              <article>
                <span>January 2020 - October 2023</span>
                <h3>Research Assistant, Prince of Songkla University</h3>
                <p data-i18n="exp_psu">
                  วิจัยด้าน sound classification, NLP และ data analysis สำหรับระบบสุขภาพและ rehabilitation
                  รวมถึงการพัฒนาโมเดล machine learning สำหรับงาน acoustic diagnosis
                </p>
              </article>
              <article>
                <span>February 2024</span>
                <h3>Freelance Data Scientist</h3>
                <p data-i18n="exp_freelance">วิเคราะห์ข้อมูล SROI และพัฒนาโมเดล machine learning เพื่อคาดการณ์ผลกระทบจากตัวแปรอิสระ</p>
              </article>
            </div>
          </div>

          <aside class="skills-panel" aria-label="Technical skills">
            <p class="eyebrow" data-i18n="skills_eyebrow">Technical Skills</p>
            <h2 data-i18n="skills_title">ทักษะหลัก</h2>
            <div class="skill-group">
              <h3>Programming & Web</h3>
              <p>Python, C, SQL, HTML, CSS, FastAPI, Flask, Streamlit, Gradio</p>
            </div>
            <div class="skill-group">
              <h3>AI / ML / Vision</h3>
              <p>PyTorch, TensorFlow, scikit-learn, YOLOv8/v11, OpenCV, MediaPipe, PaddleOCR, Tesseract</p>
            </div>
            <div class="skill-group">
              <h3>Thai NLP & Speech</h3>
              <p>WangchanBERTa, ThaiBERT, Typhoon, Whisper, Wav2Vec, ASR, TTS, topic modeling</p>
            </div>
            <div class="skill-group">
              <h3>Tools & Workflow</h3>
              <p data-i18n="tools_workflow">Git, Linux, Docker พื้นฐาน, Jupyter, Ollama, vLLM, AWS EC2/S3, Windows deployment</p>
            </div>
          </aside>
        </div>
      </section>

      <section class="section-band muted" id="projects">
        <div class="section-inner">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="projects_eyebrow">Selected Projects</p>
            <h2 data-i18n="projects_title">โปรเจกต์เด่น</h2>
            <p data-i18n="projects_intro">ตัวอย่างงานที่สะท้อนทั้งการพัฒนาระบบ การใช้ AI แก้ปัญหา และการส่งมอบให้ใช้งานจริง</p>
          </div>

          <div class="project-grid">
            <article class="project-card case-study">
              <div class="case-copy">
                <span class="card-kicker">Hospital System</span>
                <h3>QQ Queue Management System</h3>
                <p data-i18n="qq_desc">
                  ระบบเรียกคิวสำหรับเคาน์เตอร์บริการที่ทำงานแบบสองหน้าจอ แยกแผงควบคุมสำหรับเจ้าหน้าที่
                  และจอแสดงผลสำหรับผู้รับบริการ รองรับการใช้งานแบบ offline, เสียงประกาศภาษาไทยจาก MP3
                  ที่ฝังไว้ในระบบ, หลายช่องบริการ, shortcut ผ่าน numpad และ launcher สำหรับเปิดแบบ dual monitor บน Windows
                </p>
                <ul>
                  <li data-i18n="qq_li_1">นำไปใช้งานที่แผนกรังสีวินิจฉัย โรงพยาบาลสุราษฎร์ธานี</li>
                  <li data-i18n="qq_li_2">ซิงก์สถานะระหว่าง operator display และ patient display ด้วย BroadcastChannel API</li>
                  <li data-i18n="qq_li_3">บันทึกสถานะด้วย localStorage เพื่อให้ระบบกลับมาทำงานต่อได้หลังปิดหน้าจอ</li>
                  <li data-i18n="qq_li_4">ออกแบบ UI สำหรับงานบริการจริง: ช่วงบัตรคิว, ช่องบริการ, เรียกซ้ำ, เสร็จสิ้น, หยุดประกาศ และ log</li>
                </ul>
              </div>
              <div class="case-media" aria-label="QQ screenshots">
                <figure>
                  <button class="zoomable-image" type="button" data-lightbox-src="assets/qq-operator-live.png" data-lightbox-alt="Operator panel of QQ Queue Management System" data-lightbox-caption="Operator panel">
                    <img src="assets/qq-operator-live.png" alt="Operator panel of QQ Queue Management System">
                    <span data-i18n="view_image">ขยายภาพ</span>
                  </button>
                  <figcaption>Operator panel</figcaption>
                </figure>
                <figure>
                  <button class="zoomable-image" type="button" data-lightbox-src="assets/qq-patient-live.png" data-lightbox-alt="Patient display of QQ Queue Management System" data-lightbox-caption="Patient display">
                    <img src="assets/qq-patient-live.png" alt="Patient display of QQ Queue Management System">
                    <span data-i18n="view_image">ขยายภาพ</span>
                  </button>
                  <figcaption>Patient display</figcaption>
                </figure>
              </div>
            </article>

            <article class="project-card case-study alternate">
              <div class="case-copy">
                <span class="card-kicker">Speech AI</span>
                <h3>SmartDigest ASR</h3>
                <p data-i18n="smartdigest_desc">
                  ระบบถอดเสียง แปลภาษา และสรุปเนื้อหาแบบ real-time สำหรับภาษาไทย/อังกฤษ
                  ออกแบบให้แบ่งเสียงเป็นช่วงอัตโนมัติ ตรวจจับขอบเขตประโยค แสดง transcript พร้อม translation
                  และสร้าง session summary เพื่อทบทวนเนื้อหาได้เร็วขึ้น
                </p>
                <ul>
                  <li data-i18n="smartdigest_li_1">รองรับ ASR แบบ real-time พร้อม adaptive chunking</li>
                  <li data-i18n="smartdigest_li_2">แสดงผล transcription และ translation ราย chunk พร้อม latency</li>
                  <li data-i18n="smartdigest_li_3">สรุปเนื้อหาเป็นภาษาไทยและอังกฤษหลังจบ session</li>
                </ul>
              </div>
              <div class="case-media" aria-label="SmartDigest screenshots">
                <figure>
                  <button class="zoomable-image" type="button" data-lightbox-src="assets/smartdigest-asr.png" data-lightbox-alt="SmartDigest ASR interface showing transcriptions and translations" data-lightbox-caption="Live transcription table">
                    <img src="assets/smartdigest-asr.png" alt="SmartDigest ASR interface showing transcriptions and translations">
                    <span data-i18n="view_image">ขยายภาพ</span>
                  </button>
                  <figcaption>Live transcription table</figcaption>
                </figure>
                <figure>
                  <button class="zoomable-image" type="button" data-lightbox-src="assets/smartdigest-summary.png" data-lightbox-alt="SmartDigest session summary interface" data-lightbox-caption="Thai and English summary">
                    <img src="assets/smartdigest-summary.png" alt="SmartDigest session summary interface">
                    <span data-i18n="view_image">ขยายภาพ</span>
                  </button>
                  <figcaption>Thai and English summary</figcaption>
                </figure>
              </div>
            </article>

            <article class="project-card case-study manavis-study">
              <div class="case-copy">
                <span class="card-kicker">Computer Vision Analytics</span>
                <h3>Manavis Customer Flow Analytics</h3>
                <p data-i18n="manavis_desc">
                  ระบบ computer vision ของ Baksters สำหรับนำวิดีโอจากกล้องวงจรปิดมาวิเคราะห์ความหนาแน่นลูกค้า
                  เวลาใช้บริการในแต่ละโซน เส้นทางการเดิน และพฤติกรรมตามช่วงเวลา เพื่อช่วยทีมมองเห็นคอขวด
                  และปรับ workflow ให้ลื่นไหลขึ้น
                </p>
                <ul>
                  <li data-i18n="manavis_li_1">วิเคราะห์ customer density แยกตามโซนและช่วงเวลา</li>
                  <li data-i18n="manavis_li_2">สรุป visitor journey, time-spent และ peak day เพื่อเข้าใจพฤติกรรมลูกค้า</li>
                  <li data-i18n="manavis_li_3">แปลงข้อมูลจาก CCTV เป็น dashboard ที่ใช้ประกอบการตัดสินใจได้</li>
                </ul>
              </div>
              <div class="case-media three-up" aria-label="Manavis screenshots">
                <figure>
                  <button class="zoomable-image" type="button" data-lightbox-src="assets/manavis-overall-clean.png" data-lightbox-alt="Manavis visitor time-spent dashboard" data-lightbox-caption="Overall time-spent">
                    <img src="assets/manavis-overall-clean.png" alt="Manavis visitor time-spent dashboard">
                    <span data-i18n="view_image">ขยายภาพ</span>
                  </button>
                  <figcaption>Overall time-spent</figcaption>
                </figure>
                <figure>
                  <button class="zoomable-image" type="button" data-lightbox-src="assets/manavis-zone-clean.png" data-lightbox-alt="Manavis zone time-spent dashboard" data-lightbox-caption="Zone time-spent">
                    <img src="assets/manavis-zone-clean.png" alt="Manavis zone time-spent dashboard">
                    <span data-i18n="view_image">ขยายภาพ</span>
                  </button>
                  <figcaption>Zone time-spent</figcaption>
                </figure>
                <figure>
                  <button class="zoomable-image" type="button" data-lightbox-src="assets/manavis-vip-clean.png" data-lightbox-alt="Manavis VIP area analytics dashboard" data-lightbox-caption="VIP area and journey">
                    <img src="assets/manavis-vip-clean.png" alt="Manavis VIP area analytics dashboard">
                    <span data-i18n="view_image">ขยายภาพ</span>
                  </button>
                  <figcaption>VIP area and journey</figcaption>
                </figure>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section-band warm" id="research">
        <div class="section-inner two-column">
          <div>
            <div class="section-heading compact">
              <p class="eyebrow" data-i18n="research_eyebrow">Research</p>
              <h2 data-i18n="research_title">งานวิจัยและผลงานตีพิมพ์</h2>
              <p data-i18n="research_intro">
                งานวิจัยหลักของผมอยู่ที่การจำแนกเสียงสำหรับการวินิจฉัยโรคลำต้นเน่าของปาล์มน้ำมันแบบไม่ทำลาย
                โดยใช้ machine learning วิเคราะห์สัญญาณเสียงจากลำต้น
              </p>
            </div>
            <div class="publication-card">
              <span>SCOPUS Indexed Publication</span>
              <h3>Sound Classification for Non-Destructive Diagnosis of Basal Stem Rot Disease based on Stem Density in Oil Palm Trunks</h3>
              <p data-i18n="publication_detail">
                ตีพิมพ์ใน Journal of Advanced Research in Applied Mechanics, ISSN: 2289-7895, accepted 9 May 2024
              </p>
            </div>
          </div>

          <div class="achievement-panel">
            <p class="eyebrow" data-i18n="awards_eyebrow">Awards</p>
            <h2 data-i18n="awards_title">รางวัลที่ได้รับ</h2>
            <article>
              <h3>Thailand New Gen Inventors Award 2025 - Gold Medal</h3>
              <p data-i18n="award_detail">
                ได้รับรางวัลจากสำนักงานการวิจัยแห่งชาติ จากผลงานเครื่องมือ machine learning
                สำหรับวินิจฉัยโรคลำต้นเน่าของปาล์มน้ำมัน
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <div class="lightbox" id="image-lightbox" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Large project image view">
      <button class="lightbox-backdrop" type="button" aria-label="ปิดภาพ"></button>
      <figure class="lightbox-content">
        <img alt="">
        <figcaption></figcaption>
        <button class="lightbox-close" type="button" aria-label="ปิดภาพ">×</button>
      </figure>
    </div>

    <footer class="site-footer" id="contact">
      <div class="footer-inner">
        <div>
          <p class="eyebrow" data-i18n="contact_eyebrow">Contact</p>
          <h2>Chalatorn Augsornthip</h2>
          <p data-i18n="contact_role">AI Engineer / Computer Systems Developer</p>
        </div>
        <address class="contact-list">
          <a href="mailto:augsornthip03@gmail.com">augsornthip03@gmail.com</a>
          <a href="tel:+66915276857">+66 91 527 6857</a>
          <a href="https://linkedin.com/in/chalatorn-augsornthip-69339b254" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/augsornthip03" target="_blank" rel="noreferrer">GitHub</a>
        </address>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
