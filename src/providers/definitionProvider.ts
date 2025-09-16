import * as vscode from 'vscode';

/**
 * Definition provider for SIC/EX assembly labels and symbols
 */
export function createDefinitionProvider(): vscode.DefinitionProvider {
	return {
		provideDefinition(document: vscode.TextDocument, position: vscode.Position): vscode.Definition | undefined {
			// TODO: 라벨과 심볼의 정의 찾기 구현
			// TODO: 현재 위치의 단어가 라벨인지 확인
			// TODO: 문서 전체에서 라벨 정의 검색
			// TODO: 다중 파일 지원 (프로젝트 내 다른 .sic/.xe 파일)
			// TODO: 심볼 테이블 생성 및 관리
			// TODO: 정의 위치로 이동할 수 있는 Location 객체 반환
			return undefined;
		}
	};
}