# Copilot Instructions for SIC/EX Advisor

This guide provides essential knowledge for AI coding agents working on the `sic-ex-advisor` VS Code extension project. This extension helps developers write SIC/EX assembly code with enhanced productivity features.

## Project Overview
- **Type:** VS Code extension for SIC/EX assembly language support
- **Target:** SIC (Simplified Instructional Computer) and SIC/XE assembly development
- **Main Features:** Keyword tab completion, auto formatting, go-to-definition, syntax highlighting
- **Entry Point:** `src/extension.ts`
- **File Extensions:** `.sic`, `.xe`, `.asm`

## Architecture & Patterns
- **Language Server Pattern:** Implement language features through VS Code's language server protocol
- **Completion Provider:** Register completion providers for SIC/EX keywords, registers, and directives
- **Formatting Provider:** Implement document formatting for proper label, instruction, and operand alignment
- **Definition Provider:** Enable navigation between labels and their definitions
- **Syntax Highlighting:** Configure TextMate grammar for SIC/EX assembly syntax

## Key SIC/EX Assembly Concepts
- **SIC Instructions:** LDA, LDX, STA, STX, ADD, SUB, MUL, DIV, COMP, JLT, JEQ, JGT, JSUB, RSUB, etc.
- **SIC/XE Extensions:** Additional addressing modes, registers (A, X, L, B, S, T, F), extended format instructions
- **Assembly Directives:** START, END, BYTE, WORD, RESB, RESW, BASE, NOBASE, LTORG
- **Addressing Modes:** Direct, indirect (@), immediate (#), indexed (X), PC-relative, base-relative
- **Format:** Label field, instruction field, operand field, comment field

## Developer Workflows
- **Build/Watch:** Use `npm run watch` for TypeScript compilation with file watching
- **Test:** Run extension tests using VS Code extension test runner
- **Debug:** Use F5 to launch extension development host for testing
- **Package:** Use `vsce package` to create .vsix file for distribution

## Extension-Specific Patterns
- **Language Registration:** Register language ID for SIC/EX files in `package.json`
- **Provider Registration:** Register language feature providers in `activate()` function
- **Command Registration:** Register extension commands for manual operations
- **Configuration:** Define extension settings for customization (if needed)

## File Structure Conventions
```
src/
  extension.ts          # Main activation logic
  providers/           # Language feature providers
    completionProvider.ts
    definitionProvider.ts
    formattingProvider.ts
  grammar/             # Syntax highlighting rules
    sic-ex.tmGrammar.json
  test/                # Extension tests
    extension.test.ts
```

## Implementation Examples
- **Completion Provider:**
  ```ts
  vscode.languages.registerCompletionItemProvider('sicex', {
    provideCompletionItems(document, position) {
      // Return SIC/EX instruction completions
    }
  });
  ```
- **Definition Provider:**
  ```ts
  vscode.languages.registerDefinitionProvider('sicex', {
    provideDefinition(document, position) {
      // Find label definitions
    }
  });
  ```

## Key Files
- `src/extension.ts`: Main entry point and provider registration
- `package.json`: Extension manifest, language configuration, commands
- `syntaxes/`: TextMate grammar files for syntax highlighting
- `src/providers/`: Language feature implementations

## External Dependencies
- **VS Code API:** Core extension functionality
- **TextMate Grammars:** For syntax highlighting rules
- **Language Server Protocol:** For advanced language features (if implemented)

---
When adding new language features, follow VS Code's language extension patterns and ensure proper provider registration in the activate function.