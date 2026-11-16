# BiPC JUNIOR COLLEGE — WEBSITE DOCUMENTATION

A premium, modern, fully responsive, multi-page frontend website for a generic Indian Intermediate BiPC Junior College (Botany, Zoology, Physics, Chemistry).

---

## 1. Project Overview

This website represents a generic Indian Junior College specializing in the **Intermediate BiPC stream** (Class 11 & Class 12 / Junior & Senior Inter). It is architected for prospective students completing Class 10 and parents seeking rigorous biological sciences education, hands-on laboratory learning, and optional NEET-UG medical entrance preparation.

### Strict Architectural Principles
* **Pure Native Technologies**: 100% HTML5, CSS3, and Vanilla JavaScript.
* **No External Frameworks**: Zero dependencies on React, Next.js, Bootstrap, Tailwind, jQuery, or Node.js.
* **Static Hosting Ready**: Built specifically for instant deployment on **Hostinger Static Hosting** or any standard static file web server.
* **Generic Academic Identity**: Strictly generic branding (*BiPC JUNIOR COLLEGE*, *Intermediate Education*) with zero fabricated real or fictional college names, affiliations, cutoffs, or guarantees.
* **Safe Image Workflow**: 37 custom-generated educational and campus images stored in `images/` (and mirrored in `assets/images/`), styled with responsive aspect-ratio frames and subtle hover elevation.
* **Streamlined Header Navigation**: Minimalist, clean 4-item top-level navigation bar (`Home`, `About ▾`, `Academics ▾`, `Admissions ▾` + `Enquire Now` CTA) with categorized dropdown menus housing all 15 pages.

---

## 2. Color Palette & Visual System

* **Deep Navy**: `#142B45` (Primary brand color, text headings, institutional trust)
* **Medical Green**: `#16866A` (Primary accent, biology theme, primary buttons)
* **Teal**: `#159A91` (Secondary accent, subtle highlights)
* **Soft Mint**: `#E8F5EF` (Background tags, cards, subtle hover states)
* **White**: `#FFFFFF` (Card surfaces, clean contrast)
* **Light Background**: `#F4F8F7` (Body background)
* **Dark Text**: `#202B3C` (High readability body typography)
* **Accent Gold**: `#E7AD48` (Highlights, awards, and CTA callouts)

---

## 3. Website Page Directory

The project includes 15 interconnected HTML pages:

1. **`index.html`** — Homepage (13 sections: Hero, Welcome, BiPC Program, Why Choose BiPC, 6-Stage Learning Journey, Facilities, Student Development, Activities, NEET Preview, Career Pathways, Testimonials, Admission CTA, Footer).
2. **`about.html`** — About Junior College (Vision, Mission, Educational Philosophy, Teaching Methodology, Academic Discipline).
3. **`academics.html`** — Academic Programs (Two-year Intermediate curriculum, First-Year & Second-Year structures, Board Exam notice, Sample Timetable).
4. **`subjects.html`** — BiPC Subjects Overview (Botany, Zoology, Physics, Chemistry cards, Interdisciplinary synergy).
5. **`botany.html`** — Dedicated Botany Page (Hero, 12 illustrative learning areas, Microscopic study, Herbarium & Lab activities).
6. **`zoology.html`** — Dedicated Zoology Page (Hero, 14 illustrative learning areas, Human anatomy, Physiological systems, Lab demonstrations).
7. **`physics.html`** — Dedicated Physics Page (Hero, 14 illustrative learning areas, Numerical problem solving, Mechanics, Optics lab).
8. **`chemistry.html`** — Dedicated Chemistry Page (Hero, Physical, Organic, and Inorganic Chemistry pillars, Titration & Lab safety).
9. **`laboratories.html`** — Science Laboratories (Dedicated Botany, Zoology, Physics, and Chemistry practical setups).
10. **`faculty.html`** — Teaching Faculty & Academic Mentors (7 generic faculty roles: Botany 01/02, Zoology 01/02, Physics 01, Chemistry 01, Academic Mentor 01).
11. **`neet-preparation.html`** — NEET-UG Guidance (NCERT methodology, test series, sample diagnostic performance dashboard).
12. **`admissions.html`** — Admissions (Eligibility, 4-step process, documents checklist, interactive demo enquiry form, FAQ accordion).
13. **`campus-life.html`** — Campus Life (Exhibitions, Science Expos, Workshops, Quizzes, Sports & Fitness).
14. **`career-guidance.html`** — Career Opportunities (Medical, Allied Health, Pharmacy, Biotechnology, Agriculture, Pure Sciences & Entrance exams).
15. **`contact.html`** — Contact Us (Dummy contact details, working hours, interactive counselling form with frontend validation, map placeholder).

---

## 4. Project Folder Structure

```
bipc-junior-college/
│
├── index.html
├── about.html
├── academics.html
├── subjects.html
├── botany.html
├── zoology.html
├── physics.html
├── chemistry.html
├── laboratories.html
├── faculty.html
├── neet-preparation.html
├── admissions.html
├── campus-life.html
├── career-guidance.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css          # Responsive design system & image placeholder styles
│   ├── js/
│   │   └── script.js         # Mobile nav, dropdowns, accordions, form validation
│   ├── images/               # Destination folder for generated .webp images
│   └── icons/                # Inline SVG icons are embedded directly in HTML
│
├── IMAGE-GENERATION-GUIDE.md # Complete image inventory & 37 Google Flow prompts
└── README.md                 # Deployment & setup documentation
```

---

## 5. Local Preview Instructions

You can run and inspect the website locally using any of the following methods:

### Method A: Directly Open in Browser
Double-click `index.html` or drag and drop any of the HTML files into your web browser (Chrome, Edge, Firefox, Safari).

### Method B: Using Python Local Server
Open your terminal in the `bipc-junior-college` folder and execute:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Method C: VS Code Live Server
1. Open the `bipc-junior-college` folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 6. How to Deploy on Hostinger Static Hosting

Deploying this static website to Hostinger takes less than 3 minutes:

1. **Log into Hostinger hPanel**:
   * Navigate to **Websites** → Select your domain or subdomain.
2. **Open File Manager**:
   * Go to **Files** → **File Manager** (`public_html`).
3. **Upload Files**:
   * Upload all files and folders inside the `bipc-junior-college` directory directly into `public_html/`:
     * All `.html` files (`index.html`, `about.html`, etc.) in the root of `public_html/`.
     * The `assets/` folder with `assets/css/` and `assets/js/`.
4. **Ensure File Structure**:
   ```
   public_html/
   ├── index.html
   ├── about.html
   ...
   └── assets/
       ├── css/style.css
       └── js/script.js
   ```
5. **Verify Live**:
   * Open your domain in any browser. The website will load instantly with HTTPS, full responsiveness, and zero server latency.

---

## 7. Replacing Image Placeholders with Real Images

1. Consult **`IMAGE-GENERATION-GUIDE.md`** for the complete list of 37 copy-ready Google Flow prompts.
2. Generate each image and save it under its exact filename (e.g. `hero-bipc-college.webp`).
3. Place all generated `.webp` files in `assets/images/`.
4. In the HTML files, replace the `.img-placeholder` `<div>` with standard `<img>` tags:
   ```html
   <img src="assets/images/hero-bipc-college.webp" alt="BiPC Junior College science learning" class="img-fluid" loading="lazy">
   ```

---

## 8. Dummy Contact Details Verification

Throughout the website, only standardized generic demo data is used:
* **Phone Number**: `0000000000`
* **Alternative Phone**: `0000000000`
* **Email Address**: `demo@example.com`
* **Campus Address**: `Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000.`
* **Working Hours**: `Monday–Saturday, 9:00 AM – 5:00 PM`
* **Forms**: Frontend validation demo only (no external server calls).
