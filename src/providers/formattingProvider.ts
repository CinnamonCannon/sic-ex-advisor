import * as vscode from 'vscode';

/**
 * Formatting provider for SIC/EX assembly code alignment
 */
export function createFormattingProvider(): vscode.DocumentFormattingEditProvider {
	return {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			// TODO: SIC/EX 어셈블리 코드 자동 정렬 구현
			// TODO: 라벨 필드 정렬 (첫 번째 컬럼)
			// TODO: 명령어 필드 정렬 (두 번째 컬럼)
			// TODO: 피연산자 필드 정렬 (세 번째 컬럼)
			// TODO: 주석 필드 정렬 (네 번째 컬럼)
			// TODO: 탭/공백 설정에 따른 들여쓰기 처리
			// TODO: 빈 줄과 주석만 있는 줄 처리
			return [];
		}
	};
}