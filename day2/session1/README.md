# Session 1 – VS Code Fundamentals + Extensions

## 🎯 Objectives

- Explore the VS Code User Interface (UI).
- Learn and use the **Command Palette**.
- Enable and configure **Settings Sync**.
- Install and explore extensions:
  - Prettier
  - Live Server
  - ESLint
- Configure default formatter and enable **formatOnSave**.

---

## 🖥️ VS Code Fundamentals

1. **User Interface (UI) Overview**

   - Activity Bar: Explorer, Search, Source Control, Run & Debug, Extensions.
   - Side Bar: Displays contents of selected activity.
   - Status Bar: Information on Git branch, errors, encoding, etc.
   - Editor Groups: Split editors for multitasking.

2. **Command Palette**

   - Shortcut: `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac).
   - Access all VS Code commands quickly.

3. **Settings Sync**
   - Sync extensions, themes, keyboard shortcuts, and settings using your GitHub or Microsoft account.

---

## ⚙️ Extensions

### 1. Prettier - Code Formatter

- Formats code for consistency.
- Configure as the default formatter in `settings.json`.

### 2. Live Server

- Launch a local development server.
- Provides live reload for HTML/CSS/JS changes.

### 3. ESLint

- Analyzes JavaScript/TypeScript code.
- Identifies and fixes linting issues based on defined rules.

---

## ⚡ Configuration

Add this to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```
