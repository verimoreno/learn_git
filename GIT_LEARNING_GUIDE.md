# 🚀 Git Mastery Action Plan

Welcome! This guide will take you from Git beginner to confident user through hands-on exercises.

---

## 📋 Table of Contents

1. [Level 1: Setup & Basics](#level-1-setup--basics)
2. [Level 2: Daily Workflow](#level-2-daily-workflow)
3. [Level 3: Branching & Merging](#level-3-branching--merging)
4. [Level 4: Undoing Things](#level-4-undoing-things)
5. [Level 5: Remote Repositories](#level-5-remote-repositories)
6. [Level 6: Advanced Commands](#level-6-advanced-commands)
7. [Quick Reference Cheat Sheet](#-quick-reference-cheat-sheet)

---

## Level 1: Setup & Basics
**⏱️ Time: 15 minutes**

### Exercise 1.1: Configure Git (Do this once)

```bash
# Set your name (appears in commits)
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Verify your settings
git config --list
```

### Exercise 1.2: Initialize a Repository

```bash
# Navigate to your project folder
cd /home/veridiano/Documents/2026/CTO/learn_git

# Initialize Git (creates hidden .git folder)
git init

# Verify it worked
ls -la
# You should see a .git folder
```

### Exercise 1.3: Check Status (Your Best Friend!)

```bash
# Always start with status - shows what's happening
git status
```

**Expected output:** You'll see "Untracked files" - these are files Git sees but isn't tracking yet.

### ✅ Level 1 Checkpoint
- [ ] Git is configured with your name/email
- [ ] Repository is initialized
- [ ] You understand `git status`

---

## Level 2: Daily Workflow
**⏱️ Time: 30 minutes**

### The Golden Triangle: `add` → `commit` → `push`

### Exercise 2.1: Stage Files for Commit

```bash
# Check what files are available
git status

# Add a single file to staging
git add index.html

# Check status again - file should be green now
git status

# Add multiple files
git add styles.css app.js

# Or add ALL files at once
git add .

# Check status - all files should be green (staged)
git status
```

### Exercise 2.2: Make Your First Commit

```bash
# Commit staged files with a message
git commit -m "Initial commit: add HTML, CSS, and JS files"

# Check status - should say "nothing to commit"
git status

# View your commit history
git log
```

### Exercise 2.3: The Edit → Stage → Commit Cycle

**Now practice the daily workflow:**

1. **Edit a file** - Open `index.html` and change the `<h1>` text to something else

2. **Check what changed:**
```bash
git status
# Shows index.html as modified

git diff
# Shows exactly what lines changed (red = removed, green = added)
```

3. **Stage the change:**
```bash
git add index.html
```

4. **Commit the change:**
```bash
git commit -m "Update homepage title"
```

5. **View history:**
```bash
git log --oneline
# Compact view of all commits
```

### Exercise 2.4: Practice More Commits

Make these changes and commit each one:

1. **Change 1:** Edit `about.html` - change the hero text
   ```bash
   git add about.html
   git commit -m "Update about page hero section"
   ```

2. **Change 2:** Add a new feature to `app.js` - add a new function
   ```bash
   git add app.js
   git commit -m "Add new helper function"
   ```

3. **Change 3:** Update colors in `styles.css`
   ```bash
   git add styles.css
   git commit -m "Adjust color scheme"
   ```

### Exercise 2.5: View History

```bash
# Full log
git log

# Compact one-line format
git log --oneline

# Show last 5 commits
git log -5

# Show commits with file changes
git log --stat

# Beautiful graph view
git log --oneline --graph --all
```

### ✅ Level 2 Checkpoint
- [ ] You can stage files with `git add`
- [ ] You can commit with `git commit -m "message"`
- [ ] You can view differences with `git diff`
- [ ] You can view history with `git log`

---

## Level 3: Branching & Merging
**⏱️ Time: 45 minutes**

Branches let you work on features without affecting the main code.

### Exercise 3.1: Understanding Branches

```bash
# See all branches (* = current branch)
git branch

# You're on "main" or "master" branch
```

### Exercise 3.2: Create a New Branch

```bash
# Create AND switch to a new branch
git checkout -b feature-dark-mode

# Verify you're on the new branch
git branch

# Alternative (newer syntax):
git switch -c feature-dark-mode
```

### Exercise 3.3: Work on Your Branch

1. **Make changes for dark mode** - Edit `styles.css`:

Add this at the end of the file:
```css
/* Dark Mode Styles */
.dark-mode {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.dark-mode .hero,
.dark-mode .feature,
.dark-mode header {
    background: rgba(30, 30, 50, 0.95);
    color: #e0e0e0;
}
```

2. **Commit on your branch:**
```bash
git add styles.css
git commit -m "feat: add dark mode styles"
```

3. **Make another change** - Edit `app.js`, add dark mode toggle:
```javascript
// Add this function
function enableDarkMode() {
    document.body.classList.toggle('dark-mode');
    console.log('Dark mode toggled!');
}
```

4. **Commit again:**
```bash
git add app.js
git commit -m "feat: add dark mode toggle function"
```

### Exercise 3.4: Switch Between Branches

```bash
# Go back to main branch
git checkout main
# Or: git switch main

# Notice: your dark mode changes are GONE! (they're safe on the other branch)

# Check the CSS file - no dark mode code
cat styles.css

# Switch back to feature branch
git checkout feature-dark-mode

# Check again - dark mode code is back!
cat styles.css
```

### Exercise 3.5: Merge Your Branch

```bash
# First, go to the branch you want to merge INTO (main)
git checkout main

# Merge the feature branch into main
git merge feature-dark-mode

# View the result
git log --oneline --graph

# Your dark mode code is now in main!
```

### Exercise 3.6: Delete Merged Branch

```bash
# Delete branch (only after merging!)
git branch -d feature-dark-mode

# Verify it's gone
git branch
```

### Exercise 3.7: Practice - Create Another Feature

Try this on your own:

1. Create branch: `git checkout -b feature-contact-form`
2. Edit `contact.html` - add a simple form
3. Commit your changes
4. Switch to main
5. Merge the feature
6. Delete the feature branch

### ✅ Level 3 Checkpoint
- [ ] You can create branches with `git checkout -b`
- [ ] You can switch branches with `git checkout`
- [ ] You can merge with `git merge`
- [ ] You understand branches don't affect each other

---

## Level 4: Undoing Things
**⏱️ Time: 30 minutes**

Mistakes happen! Here's how to fix them.

### Exercise 4.1: Undo Unstaged Changes

```bash
# Make a bad change to index.html (delete some content)
# Then restore it:

git checkout -- index.html
# Or newer syntax:
git restore index.html

# File is back to last committed version!
```

### Exercise 4.2: Unstage a File

```bash
# Stage a file
git add index.html

# Oops! Remove from staging (but keep the changes)
git reset HEAD index.html
# Or newer syntax:
git restore --staged index.html

# File is still modified, just not staged
git status
```

### Exercise 4.3: Amend Last Commit Message

```bash
# Made a typo in your last commit message?
git commit --amend -m "Fixed: better commit message"
```

### Exercise 4.4: Amend Last Commit (Add Forgotten File)

```bash
# Forgot to include a file in last commit?
git add forgotten-file.html
git commit --amend --no-edit
# Adds to previous commit without changing message
```

### Exercise 4.5: Undo a Commit (Keep Changes)

```bash
# Undo last commit but keep the changes staged
git reset --soft HEAD~1

# Undo last commit, unstage changes (but keep them)
git reset HEAD~1
# or
git reset --mixed HEAD~1
```

### Exercise 4.6: Undo a Commit (Discard Changes) ⚠️ CAREFUL!

```bash
# DANGER: This destroys changes permanently!
git reset --hard HEAD~1
```

### Exercise 4.7: Revert a Commit (Safe for Shared History)

```bash
# Create a NEW commit that undoes a previous commit
# This is safe to use even if others have your code

git log --oneline
# Find the commit hash you want to undo

git revert <commit-hash>
# Creates new commit that reverses those changes
```

### ✅ Level 4 Checkpoint
- [ ] You can discard local changes with `git restore`
- [ ] You can unstage files with `git restore --staged`
- [ ] You can amend commits with `git commit --amend`
- [ ] You understand `reset` vs `revert`

---

## Level 5: Remote Repositories
**⏱️ Time: 30 minutes**

Connect to GitHub/GitLab to share and backup code.

### Exercise 5.1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository"
3. Name it `learn_git`
4. **Don't** initialize with README (we have files already)
5. Copy the repository URL

### Exercise 5.2: Connect Local to Remote

```bash
# Add remote (replace URL with yours)
git remote add origin https://github.com/YOUR-USERNAME/learn_git.git

# Verify remote is added
git remote -v
```

### Exercise 5.3: Push to Remote

```bash
# First push (sets upstream branch)
git push -u origin main

# After first push, just use:
git push
```

### Exercise 5.4: Pull from Remote

```bash
# Get latest changes from remote
git pull

# Or do it in two steps:
git fetch        # Download changes
git merge origin/main  # Merge them
```

### Exercise 5.5: Clone a Repository

```bash
# Clone someone else's repository (or your own from another computer)
git clone https://github.com/username/repository.git

# Clone into specific folder
git clone https://github.com/username/repository.git my-folder
```

### ✅ Level 5 Checkpoint
- [ ] You can add a remote with `git remote add`
- [ ] You can push with `git push`
- [ ] You can pull with `git pull`
- [ ] You can clone with `git clone`

---

## Level 6: Advanced Commands
**⏱️ Time: 30 minutes**

### Exercise 6.1: Stash (Save Work Temporarily)

```bash
# You're working on something but need to switch branches
# without committing half-done work

# Save current changes
git stash

# Do other work, switch branches, etc.

# Bring back your stashed changes
git stash pop

# View stashed items
git stash list

# Apply specific stash
git stash apply stash@{0}
```

### Exercise 6.2: Cherry-Pick (Copy Specific Commit)

```bash
# Copy a specific commit from another branch
git cherry-pick <commit-hash>
```

### Exercise 6.3: Interactive Rebase (Clean Up History)

```bash
# Combine/reorder last 3 commits
git rebase -i HEAD~3

# In the editor:
# - 'pick' = keep commit
# - 'squash' = combine with previous
# - 'reword' = change commit message
# - 'drop' = delete commit
```

### Exercise 6.4: Blame (Find Who Changed What)

```bash
# See who changed each line
git blame index.html

# Blame specific lines
git blame -L 10,20 index.html
```

### Exercise 6.5: Bisect (Find Bug-Introducing Commit)

```bash
# Binary search to find when a bug was introduced
git bisect start
git bisect bad          # Current version has bug
git bisect good abc123  # This commit was good

# Git checks out middle commit, you test, then:
git bisect good  # or 'git bisect bad'
# Repeat until Git finds the bad commit

git bisect reset  # Exit bisect mode
```

### Exercise 6.6: Tags (Mark Releases)

```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "Version 1.0.0 release"

# List tags
git tag

# Push tags to remote
git push --tags

# Checkout a tag
git checkout v1.0.0
```

### ✅ Level 6 Checkpoint
- [ ] You can stash work with `git stash`
- [ ] You understand cherry-pick and rebase
- [ ] You can use blame and bisect for debugging
- [ ] You can create tags for releases

---

## 📝 Quick Reference Cheat Sheet

### Setup
| Command | Description |
|---------|-------------|
| `git init` | Initialize new repository |
| `git clone <url>` | Clone a repository |
| `git config --global user.name "Name"` | Set your name |
| `git config --global user.email "email"` | Set your email |

### Daily Commands
| Command | Description |
|---------|-------------|
| `git status` | Check current status |
| `git add <file>` | Stage a file |
| `git add .` | Stage all files |
| `git commit -m "msg"` | Commit with message |
| `git diff` | Show unstaged changes |
| `git log --oneline` | Show commit history |

### Branching
| Command | Description |
|---------|-------------|
| `git branch` | List branches |
| `git checkout -b <name>` | Create & switch branch |
| `git checkout <name>` | Switch to branch |
| `git merge <branch>` | Merge branch into current |
| `git branch -d <name>` | Delete branch |

### Remote
| Command | Description |
|---------|-------------|
| `git remote add origin <url>` | Add remote |
| `git push -u origin main` | First push |
| `git push` | Push changes |
| `git pull` | Pull changes |
| `git fetch` | Fetch without merge |

### Undoing
| Command | Description |
|---------|-------------|
| `git restore <file>` | Discard changes |
| `git restore --staged <file>` | Unstage file |
| `git commit --amend` | Modify last commit |
| `git reset HEAD~1` | Undo last commit (keep changes) |
| `git revert <hash>` | Create undo commit |

### Advanced
| Command | Description |
|---------|-------------|
| `git stash` | Stash changes |
| `git stash pop` | Apply & remove stash |
| `git tag -a v1.0 -m "msg"` | Create annotated tag |
| `git blame <file>` | Show who changed what |
| `git rebase -i HEAD~n` | Interactive rebase |

---

## 🎯 Practice Challenges

After completing all levels, try these challenges:

### Challenge 1: Feature Branch Workflow
1. Create a branch for "newsletter signup"
2. Add a newsletter section to `index.html`
3. Style it in `styles.css`
4. Add form handling in `app.js`
5. Commit each file separately with good messages
6. Merge to main

### Challenge 2: Simulate Team Work
1. Make a commit
2. Then make a different commit and reset it
3. Create a commit, then revert it
4. Practice the difference between reset and revert

### Challenge 3: Resolve a Merge Conflict
1. Create two branches from main
2. Edit the SAME line in both branches
3. Commit both
4. Try to merge one into the other
5. Resolve the conflict manually

---

## 🆘 When Things Go Wrong

**"I'm on the wrong branch!"**
```bash
git stash
git checkout correct-branch
git stash pop
```

**"I committed to wrong branch!"**
```bash
git checkout correct-branch
git cherry-pick <commit-hash>
git checkout wrong-branch
git reset --hard HEAD~1
```

**"I need to undo everything!"**
```bash
git reset --hard HEAD  # Discard all uncommitted changes
```

**"I accidentally deleted a branch!"**
```bash
git reflog  # Find the commit
git checkout -b recovered-branch <commit-hash>
```

---

## 🎉 Congratulations!

You now know the essential Git commands! Keep practicing daily and you'll become a Git master in no time.

**Next Steps:**
1. Set up a GitHub account if you haven't
2. Push this project to GitHub
3. Contribute to open source projects
4. Learn about Pull Requests and Code Review

Happy coding! 🚀
