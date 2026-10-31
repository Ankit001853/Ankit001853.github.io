# Ankit001853.github.io
Personal portfolio website showcasing my projects and skills, built with HTML, CSS, and JavaScript.
# Ankit Dhakal — Portfolio Website

**Live site:** https://Ankit001853.github.io/ 
**Repository:** https://github.com/Ankit001853/Ankit001853.github.io

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Target Audience](#2-target-audience)
3. [Content Strategy](#3-content-strategy)
4. [Information Organization](#4-information-organization)
5. [Visual Design](#5-visual-design)
6. [Interaction / Functionality](#6-interaction--functionality)
7. [Technical Overview](#7-technical-overview)
8. [Timeline / Project Milestones](#8-timeline--project-milestones)
9. [Design Questions & Answers](#9-design-questions--answers)
10. [External Resources](#10-external-resources)

---

## 1. Project Overview
This is my personal portfolio website. Its purpose is to present who I am as a computer science student and aspiring software developer, show the skills I have built, and showcase the projects I have worked on. It gives employers and internship recruiters one clear place to learn about me and get in touch.

## 2. Target Audience
- **Primary:** Employers and internship recruiters looking for software development candidates.
- **Secondary:** Students, developers, and other professionals who want to connect or collaborate.

## 3. Content Strategy
| Content | Purpose |
|---|---|
| Name, title, and short bio | Immediately tells visitors who I am and what I do |
| Skills section | Shows my technical abilities at a glance |
| Featured project (SubTrack) | Demonstrates my largest, most current work |
| Smaller projects | Show range and consistent practice |
| Achievements | Hackathon participation and ongoing builds |
| Contact form + GitHub link | Gives visitors an easy way to reach me |

**Tone:** Professional, clear, and concise. Each project includes a short description, the technologies used, and links to the code (and a live demo where available).

## 4. Information Organization
The site uses four sections reachable from a fixed navigation bar:

```
Home ──► About ──► Projects ──► Contact
```

- **Home:** Name, title, one-line bio, and two buttons: "View Projects" and "Contact Me."
- **About:** Longer bio, career goal, skills grouped by category, and achievements.
- **Projects:** Featured project (SubTrack) displayed larger, followed by a grid of smaller project cards.
- **Contact:** Contact form and GitHub link.

## 5. Visual Design

### Wireframe

images/wirefram.png

Text version of the layout:

```
+--------------------------------------------------+
| Ankit Dhakal        Home  About  Projects Contact|  <- fixed nav bar
+--------------------------------------------------+
|                                                  |
|              ANKIT DHAKAL                        |  <- hero (Home)
|     Computer Science Student | Aspiring Dev      |
|   [ View Projects ]   [ Contact Me ]             |
|                                                  |
+--------------------------------------------------+
| ABOUT                                            |
| Bio paragraph            | Skills (grouped tags) |
| Achievements                                     |
+--------------------------------------------------+
| PROJECTS                                         |
| +------------------ SubTrack -------------------+|  <- featured, full width
| | description | tech tags | [Code] [Demo]       ||
| +-----------------------------------------------+|
| [ To-Do List ] [ Calculator ] [ This Portfolio ] |  <- card grid
+--------------------------------------------------+
| CONTACT                                          |
| Name [______]  Email [______]                    |
| Message [_____________________]   [ Send ]       |
| GitHub icon                                      |
+--------------------------------------------------+
| © 2026 Ankit Dhakal                              |  <- footer
+--------------------------------------------------+
```

On mobile, the nav collapses into a menu button and all columns stack vertically.

### Color Scheme
| Role | Color | Hex |
|---|---|---|
| Primary (headings, nav, buttons) | Dark navy blue | `#1B2A41` |
| Background | Light grey | `#F4F5F7` |
| Text | Near-black | `#222222` |
| Accent (links, hover states) | Medium blue | `#3A6EA5` |
| Cards | White | `#FFFFFF` |

Dark blue communicates professionalism and trust, and light grey keeps the layout calm and minimal so the content stands out. All text/background combinations are checked to meet a contrast ratio of at least 4.5:1 (WCAG AA).

### Typography
- **Headings:** *Merriweather* (serif): a modern, screen-friendly alternative to Times New Roman that keeps a classic, professional feel.
- **Body text:** *Inter* (sans-serif): highly readable on screens at small sizes.
- Base font size of 16px with a line height of 1.6.

### Icons and Images
Simple line icons (Font Awesome) are used for skills, project links, and GitHub. Each project card includes a screenshot. Visuals add personality without cluttering the minimalist layout.

### Consistency
All pages share the same color variables, fonts, spacing scale, button styles, and card styles, defined once in CSS custom properties (`:root`).

### Accessibility
- Text contrast meets WCAG AA (4.5:1 minimum).
- Minimum 16px body text; headings sized in a clear hierarchy.
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Every image has descriptive `alt` text.
- Every form field has a visible `<label>`.
- All interactive elements are keyboard-accessible with a visible focus outline.

### Responsiveness
The layout uses Flexbox and CSS Grid with media queries so it works on phones, tablets, and desktops. Project cards change from three columns to one on small screens, and the navigation becomes a toggle menu.

## 6. Interaction / Functionality
| Feature | How it works | Why it helps |
|---|---|---|
| Fixed navigation bar | Stays at the top while scrolling; links smooth-scroll to sections | Visitors can jump anywhere instantly |
| Active link highlight | The current section's nav link is highlighted while scrolling | Visitors always know where they are |
| Mobile menu toggle | Hamburger button opens/closes the menu | Keeps navigation usable on small screens |
| Call-to-action buttons | "View Projects" and "Contact Me" in the hero | Guides visitors to the most important actions |
| Hover effects | Buttons and project cards change on hover/focus | Shows what is clickable |
| Contact form | Sends messages via Formspree; validated with JavaScript | Lets visitors reach me without leaving the site |
| Form feedback | Inline error messages for empty/invalid fields; success message after sending | Users know immediately whether the action worked |
| Back-to-top button | Appears after scrolling down | Quick return to the top on long pages |

## 7. Technical Overview
- **Languages:** HTML5, CSS3, JavaScript 
- **Hosting:** GitHub Pages
- **Form handling:** Formspree 
- **Fonts and icons:** Google Fonts, Font Awesome
- **Version control:** Git and GitHub

### File Structure
```
/
├── index.html        # Main page (all sections)
├── css/
│   └── style.css     # All styles, organized by section
├── js/
│   └── script.js     # Navigation, form validation, interactions
├── images/           # Project screenshots, wireframe, icons
└── README.md         # This design document
```

## 8. Timeline / Project Milestones
| Milestone | Tasks | Target date |
|---|---|---|
| 1. Planning | Answer design questions, write README, draw wireframe | 10/30/26 |
| 2. Structure | Build HTML for all sections with semantic tags | 10/30/26 |
| 3. Styling | Add CSS colors, fonts, layout, and responsiveness | 10/30/26 |
| 4. Interactivity | Add JavaScript for nav, form validation, and effects | 10/30/26 |
| 5. Content | Write project descriptions, add screenshots |10/30/26 |
| 6. Testing | Test on mobile and desktop, check contrast and keyboard use | 10/30/26 |
| 7. Deployment | Publish on GitHub Pages and submit links | 10/30/26 |

---

## 9. Design Questions & Answers

### Part 1: Content

**1. What is your full name as you want it displayed professionally?**
Ankit Dhakal

**2. What is the purpose of your portfolio website?**
To present my skills, projects, and professional profile in one place, so employers and recruiters can quickly understand what I can do and contact me.

**3. Who is the target audience?**
Employers and internship recruiters are my primary audience. Students, developers, and other professionals who want to connect or collaborate are my secondary audience.

**4. What skills do you want to highlight?**
- **Languages:** Java, Python, JavaScript
- **Web development:** HTML, CSS
- **Tools:** Git, GitHub, VS Code
- **Other:** Problem solving, debugging, teamwork

**5. What projects or work will you showcase?**
- **SubTrack** (featured, in progress): A privacy-first mobile app for tracking recurring subscriptions. Users log their own charges — the app never asks for bank or card credentials — and see what they spend, what renews next, and what a plan costs once a trial converts.
- **To-Do List App:** (in progress) A task manager that lets users add, complete, and delete tasks.
- **Calculator App** (in progress): A calculator that performs basic arithmetic operations.
- **This Portfolio Website:** A responsive personal site built with HTML, CSS, and JavaScript.

**6. How will you describe yourself in a short professional bio?**
"I'm Ankit Dhakal, a computer science student who enjoys solving problems and turning ideas into working software. I build projects in Java, Python, and web technologies, and I'm looking for opportunities to grow as a software developer."

**7. What pages will your site include?**
Home, About, Projects, and Contact.

**8. What is your career goal or desired role?**
To work as a software developer, starting with an internship where I can apply my skills to real-world projects and keep learning.

**9. What technologies or tools do you have experience with?**
Java, Python, HTML, CSS, JavaScript, Git, GitHub, and VS Code.

**10. What achievements or experiences are worth highlighting?**
Participating in a hackathon, and independently building SubTrack and several smaller applications.

**11. What call-to-action should visitors take?**
View my projects and contact me. Both appear as buttons on the home section.

**12. Will you include a resume? In what format?**
 The site itself presents my skills, projects, and achievements in place of one.

**13. What social or professional links will you include?**
GitHub and Email

### Part 2: Design

**1. What overall style will best represent you?**
Minimalist and professional.

**2. What color scheme will you use and why?**
Dark navy blue (`#1B2A41`) as the primary color and light grey (`#F4F5F7`) as the background, with a medium blue accent (`#3A6EA5`). Dark blue conveys professionalism and trust, and light grey keeps the design clean so the content stands out.

**3. What fonts will you use for headings and body text?**
Merriweather (serif) for headings, giving a classic, professional look similar to Times New Roman but designed for screens. Inter (sans-serif) for body text, because it is easy to read at small sizes.

**4. How will your design reflect your personality or field?**
The simple, uncluttered design reflects how I approach problems: break them down and find the clearest solution. Clean structure and consistent spacing mirror the organization expected in good code.

**5. What layout will your homepage follow?**
A single scrolling page with a fixed navigation bar and four sections in order: Home (hero), About, Projects, and Contact, followed by a footer.

**6. How will you organize project sections visually?**
SubTrack appears first as a full-width featured card. Smaller projects follow in a grid of cards, each with a screenshot, short description, technology tags, and links to the code and live demo.

**7. Will the site be mobile-friendly? How will you ensure responsiveness?**
Yes. I will use Flexbox, CSS Grid, and media queries so the layout adapts to phones, tablets, and desktops. Columns stack on small screens and the navigation becomes a toggle menu.

**8. What visual hierarchy will guide visitors?**
My name is the largest element at the top, followed by my title and short bio, then the call-to-action buttons. Below that, section headings, project cards, and body text decrease in size and weight so visitors scan from most to least important.

**9. How will consistency be maintained across pages?**
By using the same fonts, color palette, spacing, button styles, and card styles everywhere, all defined once as CSS variables.

**10. How will accessibility be considered?**
Text meets a WCAG AA contrast ratio of at least 4.5:1, body text is at least 16px, and the HTML uses semantic tags. Images have alt text, form fields have labels, and all interactive elements work with a keyboard and show a visible focus outline.

**11. Will you use icons, images, or illustrations? Why?**
Yes. Simple icons for skills and links, and screenshots for each project. They add visual interest and help visitors understand projects quickly without cluttering the design.

**12. What portfolio websites inspired your design?**
Lynn Fisher
Web Designer
A creative portfolio with experimental layouts, illustrations, and CSS-driven design.  
Adham Dannaway
UI/UX Designer
A minimal, polished portfolio showcasing product design and UX case studies

### Part 3: Interactivity

**1. What interactive elements will your site include?**
A fixed navigation menu with smooth scrolling, a mobile menu toggle, call-to-action buttons, hover effects on cards and buttons, a contact form, and a back-to-top button.

**2. Will your site include a contact form? How will it work?**
Yes. Visitors enter their name, email, and message. JavaScript checks that all fields are filled in and the email is valid, and Formspree delivers the message to my email.

**3. What JavaScript features will you implement?**
- Smooth scrolling and active link highlighting in the navigation
- Mobile menu toggle
- Contact form validation with error and success messages
- Back-to-top button that appears on scroll

**4. How will users receive feedback from interactions?**
Buttons and links change color on hover and focus, the current section is highlighted in the navigation, and the contact form shows inline error messages for missing or invalid fields and a confirmation message after a successful send.

**5. How does interactivity improve the user experience?**
It makes the site easy to navigate on any device, shows users what is clickable, and confirms that their actions worked. Visitors can find information and get in touch quickly and without confusion.

---

## 10. External Resources
- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Google Fonts](https://fonts.google.com/): Merriweather and Inter
- [Font Awesome](https://fontawesome.com/): icons
- [Formspree](https://formspree.io/): contact form handling
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/): accessibility testing
- [MDN Web Docs](https://developer.mozilla.org/): HTML, CSS, and JavaScript reference
