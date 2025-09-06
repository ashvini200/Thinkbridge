# Session 2 – Git Basics: Local Workflow

## 🎯 Objectives

- Initialize and configure a Git repository.
- Understand and practice the local Git workflow.
- Write meaningful commit messages.
- Create and use a `.gitignore` file.
- Explore essential Git commands (`log`, `diff`, `restore`).
- Configure Git user identity and default branch.

---

## 🛠️ Git Local Workflow

### 1. Initialize Repository

```bash
git init
Creates a new local Git repository.

2. Configure Git
bash
Copy code
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
3. Stage & Commit Changes
bash
Copy code
git add .
git commit -m "feat: initial commit with project setup"
4. .gitignore
Excludes files/folders from version control.

Example:

bash
Copy code
node_modules/
.env
*.log
5. View History & Changes
View commit history:

bash
Copy code
git log --oneline --graph --decorate
View changes not staged:

bash
Copy code
git diff
Restore files:

bash
Copy code
git restore <index.html>>
📦 Deliverables
Repository web-playground created.

.gitignore file included.

Initial commits with meaningful messages.

Commit convention documented in this README.

📝 Commit Convention
We follow Conventional Commits:

feat: a new feature

fix: a bug fix

docs: documentation changes

style: formatting (no code change)

refactor: code restructuring

test: adding or fixing tests

chore: maintenance tasks

Example:

bash
Copy code
git commit -m "feat: add homepage layout"
git commit -m "fix: correct CSS path for header"
📚 Resources
Pro Git - Git Basics

gitignore documentation

Atlassian Git Tutorials

Git - Getting a Git Repository
```
