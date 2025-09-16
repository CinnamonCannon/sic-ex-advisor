import * as vscode from 'vscode';

/**
 * Completion provider for SIC/EX assembly keywords and instructions
 */
export function createCompletionProvider(): vscode.CompletionItemProvider {
	return {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] {
			// TODO: SIC/EX 명령어 자동 완성 구현
			// TODO: SIC 기본 명령어 (LDA, LDX, STA, STX, ADD, SUB, MUL, DIV, COMP, JLT, JEQ, JGT, JSUB, RSUB 등) 추가
			// TODO: SIC/XE 확장 명령어 추가
			// TODO: 레지스터 (A, X, L, B, S, T, F) 자동 완성 추가
			// TODO: 어셈블리 지시어 (START, END, BYTE, WORD, RESB, RESW, BASE, NOBASE, LTORG) 추가
			// TODO: 주소 지정 모드 (직접, 간접(@), 즉시(#), 인덱스(X)) 지원
			// TODO: 컨텍스트 기반 제안 로직 구현
			return [];
		}
	};
}