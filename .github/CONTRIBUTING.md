# Contributing to Bombastic UI

Are you interested in contributing to the Bombastic UI project? Look no further! This guide will provide you with all the necessary information to get started. Take your time to read through it carefully and make sure to follow the guidelines.

## Using GitHub Issues

The primary communication channel for reporting bugs, requesting new features, or submitting potential pull requests will be the 'Issues' section on GitHub.

When opening an issue, it is essential to provide a concise and appropriate title, along with a clear description, and of course an properly label.

We kindly request that you approach issue creation seriously and avoid any trolling behavior. Each issue will be reviewed by the core development team at some point. Please note that not receiving an immediate response does not imply that your concerns are not being taken seriously. As a team of only a few developers, we need sufficient time to address all the issues.

Furthermore, issue assignments will be limited to the developers within the core team.

## Pull Requests

Good pull requests are always welcome, provided they contain patches, improvements, or new features previously discussed in an issue.

We accept pull requests that are related to an existing issue, either created by yourself or the community, and that you wish to contribute towards.

There are two ways you can help us: through code contributions or documentation enhancements. If you choose to assist with documentation, please make modifications to the HELP.md file following the established format.

If you prefer to contribute to the codebase, follow these steps to properly set up the project in your local development environment:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/bombastic-ui.git
   # Navigate to the newly cloned directory
   cd bootstrap
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/HeyChobe/bombastic-ui
   ```

2. Get always the latest changes from upstream:

   ```bash
   git checkout develop
   git pull upstream develop
   ```

3. Create a new branch in your local repository, following the format:

- **feature/branch-name** for new features
- **hotfix/branch-name** for patches or fixes

  ```bash
   git checkout -b <format>/<topic-branch-name>
  ```

4. Make the necessary changes in your local environment, adhering to the project's coding standards and guidelines.

5. Stage the changes and commit them with a descriptive commit message using[gitemoji](https://gitmoji.dev/):

```bash
 git commit -m ":sparkles: Your commit message"
```

6. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream develop
   ```

7. Push your topic branch up to your fork:

   ```bash
   git push origin <format>/<topic-branch-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/about-pull-requests/)
   with a clear title and description against the `develop` branch. Main branch is just for realeses, so you don't must use it.

**IMPORTANT**: By submitting a patch or help with documentation, you agree to allow the project owners to license your work under the terms of the [MIT License](../LICENSE.md) (if it includes code changes or documentation changes)
