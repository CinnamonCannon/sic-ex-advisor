// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Import providers
import { createCompletionProvider } from './providers/completionProvider';
import { createFormattingProvider } from './providers/formattingProvider';
import { createDefinitionProvider } from './providers/definitionProvider';
import { configureSyntaxHighlighting, setupLanguageConfiguration } from './config/languageConfig';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sic-ex-advisor" is now active!');

	// Setup language configuration
	setupLanguageConfiguration();
	
	// Configure syntax highlighting
	configureSyntaxHighlighting();

	// Register completion provider for SIC/EX files
	const completionProvider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'sicex' },
		createCompletionProvider(),
		'.' // Trigger completion on dot
	);

	// Register formatting provider for SIC/EX files
	const formattingProvider = vscode.languages.registerDocumentFormattingEditProvider(
		{ scheme: 'file', language: 'sicex' },
		createFormattingProvider()
	);

	// Register definition provider for SIC/EX files
	const definitionProvider = vscode.languages.registerDefinitionProvider(
		{ scheme: 'file', language: 'sicex' },
		createDefinitionProvider()
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('sic-ex-advisor.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from SIC/EX advisor!');
	});

	// Add all disposables to context subscriptions
	context.subscriptions.push(
		disposable,
		completionProvider,
		formattingProvider,
		definitionProvider
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
