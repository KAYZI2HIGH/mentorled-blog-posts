# 📰 Blog Post Viewer

A simple and responsive blog post viewer built with **Next.js** and **TypeScript** for the MentorLed internship task.

## 📌 Task Overview

**Brief:**  
Build a blog post viewer that allows users to browse and read articles with a clean UI.

## ✨ Features

- 🔎 **Search Filter** – Filter posts by title in real-time
- 📄 **Card Layout** – Neatly display each post with title, snippet, and image
- 🔗 **Optional Routing** – Click a post card to view the full content (via modal or separate route)
- 📁 **Static JSON** – Blog post data is loaded from a local JSON file
- 📱 **Fully Responsive** – Works perfectly across mobile and desktop
- 🎨 **Design Match** – Layout follows the provided Figma/mockup

## 🛠 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Static JSON data**

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/blog-post-viewer.git
   cd blog-post-viewer
Install dependencies:

bash
Copy
Edit
npm install
Run the dev server:

bash
Copy
Edit
npm run dev
Visit http://localhost:3000

📂 Folder Structure (Optional)
bash
Copy
Edit
/app
  ├─ /posts             # Page for listing blog posts
  ├─ /[slug]            # (optional) Page for full post view
/data
  └─ posts.json         # Static blog post data
/components
  ├─ PostCard.tsx
  └─ SearchBar.tsx
