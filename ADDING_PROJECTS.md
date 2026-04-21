# How to Add a New Project

There are two project types: **Engineering** and **Art**. Each type has a slightly different data structure and a different set of steps. Follow the section that matches your project.

---

## Project Types at a Glance

| | Engineering | Art |
|---|---|---|
| Data array | `dataPortfolio_Engineer` | `dataPortfolio_Artist` |
| URL pattern | `/projects-{id}` | `/projects-art-{n}` (rewritten to `/projects-{5,6,7...}`) |
| Page folder | `app/(routes)/projects-{id}/` | `app/(routes)/projects-{N}/` |
| Sections | Overview, Challenges, Role, Methodology, Results | Overview, Concept, Experimentation, Exhibition |

---

## Adding an Engineering Project

### Step 1 — Add images to `/public`

Place your images directly in the `/public` folder.

- **Format:** `.jpg`, `.jpeg`, or `.png`
- **Naming convention:** `proyecto-{name}{number}.ext` (e.g. `proyecto-water1.png`)
- **Recommended:** 1 image per section (overview, challenge, solution, result). Max 4 shown on the page.
- Reference them as `/proyecto-water1.png` (path starts from `/public`)

### Step 2 — Add the project entry to `data.tsx`

Open `data.tsx` and append a new object to `dataPortfolio_Engineer`. The `id` must be the next integer after the last entry.

```tsx
{
    id: 5,                          // next sequential number
    title: "Your Project Title",
    subtitle: "One-line description of what you did and how.",
    overviewImages: ["/your-image-overview.png"],
    challengeImages: ["/your-image-challenge.png"],
    solutionImages: ["/your-image-solution.png"],
    resultImages: ["/your-image-result.png"],
    overview: "Paragraph describing the project context and what you did.",
    challenges: "Paragraph describing the problem you were solving.",
    role: [
        "Action item 1",
        "Action item 2",
        "Action item 3",
    ],
    methodologyTitle: [
        "1. Phase name",
        "2. Phase name",
        "3. Phase name",
    ],
    methodologyDescription: [
        "Description of phase 1.",   // index must match methodologyTitle
        "Description of phase 2.",
        "Description of phase 3.",
    ],
    results: [
        "Result or outcome 1",
        "Result or outcome 2",
        "Result or outcome 3",
    ],
},
```

> `methodologyTitle` and `methodologyDescription` must have the same length — they are rendered paired by index.

### Step 3 — Create the page folder and file

Create a new folder and `page.tsx` inside the app routes:

```
app/(routes)/projects-5/page.tsx
```

Copy the content of an existing engineering page (e.g. `projects-4/page.tsx`) and update the array index:

```tsx
// Change this line to point to your new entry (0-indexed)
const project = dataPortfolio_Engineer[4] as Project;  // index 4 = id 5
```

No other changes are needed in the page file.

### Step 4 — Add the project to the hexagon grid (`data.tsx`)

Append a new entry to `hexagonData`:

```tsx
{
    id: 7,                              // next sequential number (continues from last)
    name: "Short Display Name",         // shown on the hexagon tile
    backgroundImage: "/your-image.png", // any of your project images
    link: "/projects-5",                // must match the folder you created
    type: "Engineering",
},
```

> The hexagon grid has 7 visible slots defined in `gridConfig` inside `hexagon.tsx`. If all slots are filled, you need to add a new `true` slot to one of the rows in `gridConfig`.

### Step 5 — (Optional) Add to the homepage slider (`data.tsx`)

To feature the project in the homepage carousel, add an entry to `serviceData`:

```tsx
{
    title: "Your Project Title",
    image: "/your-image.png",
    href: "/projects-5",
},
```

---

## Adding an Art Project

Art projects use a URL alias. The public URL is `/projects-art-{n}` and it rewrites internally to `/projects-{N}` (starting from 5 for the first art project).

Current mapping in `next.config.mjs`:
```
/projects-art-1  →  /projects-5
/projects-art-2  →  /projects-6
/projects-art-3  →  /projects-7
```

### Step 1 — Add images to `/public`

Same rules as Engineering projects. Art project images can also go in subfolders:

```
public/images/{project-name}/concept1.jpg
public/images/{project-name}/exhibition1.jpg
```

Reference them as `/images/{project-name}/concept1.jpg`.

### Step 2 — Add the project entry to `data.tsx`

Append a new object to `dataPortfolio_Artist`:

```tsx
{
    id: 4,                          // next sequential number
    title: "Your Art Project Title",
    overview: "One paragraph describing the work.",
    concept: "Extended paragraph about the concept and ideas behind it.",
    conceptImages: ["/images/your-project/concept1.jpg"],
    experiments: [
        "Experimentation step or technique 1.",
        "Experimentation step or technique 2.",
    ],
    experimentImages: ["/images/your-project/experiment1.jpg"],
    exhibition: [
        "How the work was presented.",
        "Audience interaction or format.",
    ],
    exhibitionImages: ["/images/your-project/exhibition1.jpg"],
},
```

### Step 3 — Add the URL rewrite to `next.config.mjs`

```js
{
    source: '/projects-art-4',
    destination: '/projects-8',
},
```

### Step 4 — Create the page folder and file

```
app/(routes)/projects-8/page.tsx
```

Copy an existing art page (e.g. `projects-5/page.tsx`) and update the array index:

```tsx
const project = dataPortfolio_Artist[3];  // 0-indexed; index 3 = id 4
```

### Step 5 — Add to the hexagon grid

Same as Engineering Step 4, but use `type: "Art"` and the `/projects-art-{n}` link:

```tsx
{
    id: 8,
    name: "Short Display Name",
    backgroundImage: "/your-image.jpg",
    link: "/projects-art-4",
    type: "Art",
},
```

---

## Checklist

### Engineering project
- [ ] Images added to `/public`
- [ ] Entry added to `dataPortfolio_Engineer` in `data.tsx` (correct `id`, matched `methodologyTitle`/`methodologyDescription` lengths)
- [ ] Page folder created: `app/(routes)/projects-{id}/page.tsx` with correct array index
- [ ] Entry added to `hexagonData` with matching `link`
- [ ] (Optional) Entry added to `serviceData` for homepage slider

### Art project
- [ ] Images added to `/public` or `/public/images/{name}/`
- [ ] Entry added to `dataPortfolio_Artist` in `data.tsx`
- [ ] URL rewrite added to `next.config.mjs`
- [ ] Page folder created: `app/(routes)/projects-{N}/page.tsx` with correct array index
- [ ] Entry added to `hexagonData` with `link: "/projects-art-{n}"`
- [ ] (Optional) Entry added to `serviceData` for homepage slider

---

## File Reference

| File | Purpose |
|------|---------|
| `data.tsx` | All project content (text, image paths, links) |
| `app/(routes)/projects-{id}/page.tsx` | Individual project page |
| `next.config.mjs` | URL rewrites for art projects |
| `components/hexagon.tsx` | Hexagon grid layout — update `gridConfig` if adding a slot |
| `components/sidebar-projects.tsx` | Auto-generates sidebar from `dataPortfolio_Engineer` and `dataPortfolio_Artist` — no changes needed |
| `/public/` | Static image assets |
