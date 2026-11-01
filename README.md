# EduTech Solutions Recruitment Website

A responsive and accessible static recruitment website created by **GoatBH** for the Applied Web Project. The website represents a fictional educational technology company that develops inclusive digital learning products and is recruiting new team members.

The project is built entirely with **HTML5 and CSS3** and is intended to be checked with the W3C validators. It does not use JavaScript, Bootstrap, or another front-end framework.

- **Repository:** [NguyenPham023/GoatBH-WebProject](https://github.com/NguyenPham023/GoatBH-WebProject)
- **Live website:** [GitHub Pages deployment](https://nguyenpham023.github.io/GoatBH-WebProject/)
- **Project management:** [Jira-GotaBH](https://student-team-goatbh.atlassian.net/?continue=https%3A%2F%2Fstudent-team-goatbh.atlassian.net%2Fwelcome%2Fsoftware%3FprojectId%3D10000&atlOrigin=eyJpIjoiMDcxZGUyNjI2YTNiNDE1OWI3Njc3OWNlYzE1ODM2ZjgiLCJwIjoiamlyYS1zb2Z0d2FyZSJ9) - Jira Scrum board used for user stories, backlog items, and sprint tracking

## Website purpose

EduTech Solutions needs a recruitment website that allows prospective applicants to:

- Learn about the company, mission, values, and team.
- Browse realistic vacancies in the educational technology industry.
- Review responsibilities, salaries, reporting lines, and requirements.
- Submit a structured job application using HTML5 form validation.
- Navigate the website with accessible and responsive controls.

## CSS Architecture

The project strictly organizes styles into three external files alongside selective embedded and inline styling to meet assessment criteria:

1. **`css/style.css` (Global & Base Styles):** Universal CSS resets, base typography (fonts, sizes, colors), global CSS custom variables, reset patterns, and element defaults.
2. **`css/layout.css` (Structural & Layout System):** Grid system, flexbox container definitions, page sections, sticky headers, multi-column form rows, and overall layout positioning.
3. **`css/dl.css` (Components & UI Elements):** Cards, interactive form fields, pure-CSS state toggles (`:checked` / `:focus-within`), button styles, tags, error messages, and custom dynamic hints.

### Styling Implementation Scope

* **External Stylesheets:** All core layout, typography, base rules, and UI components are imported via external `.css` files across all pages.
* **Embedded CSS:** Minimal, page-specific `<style>` tags applied in `apply.html` for local form container overrides and page-level adjustments.
* **Inline CSS:** Applied sparingly using `style="..."` attributes on specific elements (such as page banners and form action button wrappers) to meet assessment demonstration guidelines.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | [`index.html`](index.html) | Introduces the company, highlights benefits, provides vacancy search links, and presents roles at a glance. |
| Jobs | [`jobs.html`](jobs.html) | Provides detailed descriptions for the available positions. |
| Apply | [`apply.html`](apply.html) | Contains the validated job application form required by the assessment. |
| About | [`about.html`](about.html) | Describes the company story, group information, team members, contributions, quotes, and fun facts. |

All four pages share a common navigation menu, footer, logo, colour system, and external stylesheets.

## Available roles

| Reference | Position |
| --- | --- |
| `WD101` | Front-End Developer |
| `UX202` | UX/UI Designer |
| `AQ303` | Accessibility QA Specialist |
| `LC404` | Learning Content Developer |

## Main features

- Responsive layouts for desktop, tablet, and mobile screens.
- Semantic HTML5 elements and logical heading structure.
- Shared navigation and footer across every page.
- CSS-only vacancy search and direct links to job descriptions.
- Detailed job descriptions with responsibilities and requirements.
- HTML5 application form with required fields and pattern validation.
- Team profiles, group photograph, contribution descriptions, and tables.
- Acknowledgement of Country and inclusive employment statement.
- External, embedded, and limited inline CSS examples as required by the assessment.

## Accessibility and ethical design

Accessibility was treated as a core project requirement. The website includes:

- Skip-to-content links.
- Descriptive image alternative text.
- Semantic navigation and page landmarks.
- `aria-label`, `aria-labelledby`, and `aria-current` where appropriate.
- Properly associated form labels.
- `fieldset` and `legend` elements for grouped form questions.
- Keyboard-accessible links, controls, and visible focus styles.
- Colour choices designed with readable contrast in mind.
- Responsive text and layouts that do not depend on JavaScript.

The site includes a meaningful Acknowledgement of Country and encourages applications from Aboriginal and Torres Strait Islander peoples. Applicant information is not stored locally by this static website; the assessment form posts to the prescribed Swinburne test endpoint.

Automated tools such as the W3C validators and WAVE should support-not replace-manual accessibility review.

## Technology

- HTML5
- CSS3
- Git and GitHub
- Jira Scrum board

## Project structure

```text
GoatBH-WebProject/
├── index.html
├── jobs.html
├── apply.html
├── about.html
├── css/
│   ├── style.css
│   ├── layout.css
│   └── dl.css
├── images/
├── .gitignore
└── README.md
```

## Running the website locally

No installation or build process is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/NguyenPham023/GoatBH-WebProject.git
   ```

2. Open the project directory:

   ```bash
   cd GoatBH-WebProject
   ```

3. Open `index.html` in a browser, or use WebStorm's built-in browser preview.

## Team

| Member | Project role | Main responsibility |
| --- | --- | --- |
| Pham Phuong Nguyen | Content Specialist & QA Lead | Informational pages, semantic structure, media optimisation, validation, and accessibility review. |
| Dao Duy Kha | Front-End Lead & Infrastructure Developer | Homepage architecture, shared components, Acknowledgement of Country, and Jira tracking. |
| Phung Ngoc Anh Thu | Form Engineer & Git Administrator | Application form, CSS layout, repository workflow, and deployment support. |
