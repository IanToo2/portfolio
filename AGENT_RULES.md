# Agent Execution Rules

Before performing any task, strictly follow:

1. NEVER recreate entire files unless explicitly requested.
2. Always use minimal diff-based edits.
3. Preserve UTF-8 without BOM encoding.
4. Preserve LF line endings.
5. Show the diff before applying changes.
6. Assume this is a Vite + React project.
7. If file corruption is suspected, ask before rewriting.
8. For `git push` in sandboxed sessions, use escalated permissions (`require_escalated`) by default.
9. After refactoring or extracting large blocks, ensure required imports are still present before finishing.
10. When using scripted/regex replacements, scope edits narrowly to avoid breaking top-level imports and exports.

## Windows Shell Notes (Learned)

1. In PowerShell, use `;` instead of `&&` for sequential commands.
2. If `npm` is blocked by PowerShell execution policy (`npm.ps1`), run commands via `cmd /c npm ...`.
3. On Windows, avoid passing `*.md` directly to `rg`; use `-g "*.md"` include globs instead.
4. If console output looks garbled, verify actual file encoding/content before editing (do not assume corruption from terminal rendering alone).
5. If `git push` fails with `fatal: unable to access ... port 443`, immediately rerun the same `git push` with `require_escalated` (no workaround command changes).
