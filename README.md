# task-tracker
A simple CLI-Based blazingly fast [Github Activity Viewer](https://roadmap.sh/projects/github-activity) with GitHub API event endpoints as a solution to roadmap.sh projects. Built with Bun JS runtime and typescript ⚡⚡⚡

## Requirements
- [Bun](https://bun.sh/) installed

## Installation

Clone the repository:

```bash
git clone https://github.com/alifiansya/github-activity.git
cd github-activity
```

Install Dependencies:

```bash
bun install
```

Compile the source (optional):
```bash
# Linux
bun build --compile --target=bun-linux-x64 src/index.ts --outfile github-activity

# Windows
bun build --compile --target=bun-windows-x64 src/index.ts --outfile github-activity

# MacOS
bun build --compile --target=bun-darwin-x64 src/index.ts --outfile github-activity
```

Run the program
```bash
# Compiled run
./github-activity <github-username>

# From source (with bun)
bun run src/index.js <github-username>
```

Example
```bash
# Add task
./github-activity alifiansya
# Output: 
# (2025-06-04T12:27:12Z) Created alifiansya/github-activity
# (2025-06-04T10:31:07Z) Created alifiansya/alifiansya
# (2025-06-04T10:31:06Z) Created a branch main in alifiansya/alifiansya
# (2025-06-04T10:19:23Z) Pushed 1 commit to alifiansya/task-tracker
# (2025-06-04T09:49:52Z) Pushed 4 commits to alifiansya/task-tracker
# (2025-06-03T14:43:12Z) Pushed 2 commits to alifiansya/task-tracker
# (2025-06-03T10:22:22Z) Created a branch main in alifiansya/task-tracker
# (2025-06-03T10:14:57Z) Created alifiansya/task-tracker
```