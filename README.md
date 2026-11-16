# Livith Web

모두가 라이브를 통해 빛나는 순간. React·TypeScript·Vite 기반 웹 서비스와 앱 웹뷰 화면을 제공한다.

## 실행·검증

기존 npm 스크립트는 다음과 같다. 로컬 환경 설정은 비밀값을 저장소에 넣지 않고 준비한다.

```bash
npm ci
npm run dev
npm run build
npm run lint
npm run storybook
npm run build-storybook
```

명령별 검증 범위와 설정 확인이 필요한 항목은 [Web 지침](docs/rules/platform.md)을 확인한다. 이 목록은 이번 문서 정비에서 실행 성공을 보증하는 결과가 아니다.

## 개발 안내

- [규칙 진입점](AGENTS.md)
- [Git·이슈·PR](docs/rules/git.md)
- [계획·기록](docs/rules/plan.md)
- [구조·명명·검증·배포](docs/rules/platform.md)
- [의사결정 기록](docs/adr/README.md)

React Query·Recoil·React Router·Tailwind CSS·Storybook 등 기존 기술과 FSD 구조를 사용한다. 배포·의존성 설정 변경은 별도 작업으로 다룬다.
