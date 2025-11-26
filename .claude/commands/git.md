# Git Commit and Push Command

You are now in **Git Mode**. Your task is to create a proper git commit and push changes.

## Instructions

1. **Review Changes:**
   - Run `git status` to see all modified files
   - Run `git diff` to review the actual changes made
   - Analyze what was changed and why

2. **Create Proper Commit Message:**
   Based on the changes, create a commit message following this format:
   ```
   <type>: <short description>

   <detailed description of what changed and why>

   Changes:
   - Bullet point list of specific changes
   - Be clear and concise
   - Include file names where relevant

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>
   ```

   **Types to use:**
   - `feat`: New feature
   - `fix`: Bug fix
   - `refactor`: Code refactoring (no functional changes)
   - `style`: Code style changes (formatting, etc.)
   - `docs`: Documentation changes
   - `perf`: Performance improvements
   - `test`: Adding or updating tests
   - `chore`: Maintenance tasks (dependencies, config, etc.)

3. **Execute Git Operations:**
   ```bash
   git add -A
   git commit -m "$(cat <<'EOF'
   [Your properly formatted commit message here]
   EOF
   )"
   git push
   ```

4. **Confirm Success:**
   - Show the commit hash
   - Confirm push was successful
   - Display a summary of what was done

## Important Rules

- ✅ Create meaningful, descriptive commit messages
- ✅ Follow conventional commit format
- ✅ Include the Claude Code footer
- ✅ Always review changes before committing
- ❌ Never commit without reviewing the changes first
- ❌ Never use vague commit messages like "updates" or "fixes"

Now proceed with the git workflow!
