# Livith <img src="https://github.com/user-attachments/assets/367db8cb-b65e-4640-b6b3-6f886690f69e" width="100" align="left" />

모두가 라이브를 통해 빛나는 순간

<br/>

## 😎 Team

<table>
  <tr>
    <td align="center"><img src="https://github.com/ah-o-ng12.png" width="160"></td>
    <td align="center"><img src="https://github.com/cjw020607.png" width="160"></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ah-o-ng12">Web_이아영</td>
    <td align="center"><a href="https://github.com/cjw020607">Web_최지우</td>
    </tr>
</table>

<br/>

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=reactrouter&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=recoil&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

<br/>

## 📝 Git Convention

### ✨ Issue Convention

### 제목

- **[Feat] 기능명**: 기능 추가 시
- **[Fix] 기능명**: 오류/버그 발생 시
- **[Refactor] 작업 내용**: 리팩토링 시

### 내용

#### Feature :

- **작업 내용** : 작업하려는 기능 설명

#### Fix:

- **발생한 오류** : 발견된 문제 설명
- **발생한 원인** : 문제 발생 원인 설명
- **해결 방안** : 문제를 해결하기 위한 방법 제시
- **결과** : 문제 해결 후 결과 작성

#### Refactor:

- **작업 내용** : 리팩토링이 필요한 부분 설명
- **리팩토링 이유** :
  - [ ] 가독성 향상
  - [ ] 성능 최적화
- **리팩토링 결과** : 리팩토링 후 결과 작성

</br>

### ✨ Branch Convention

1. **main** : 배포용 브랜치. Pull Request를 이용해 develope 브랜치를 merge
2. **develop** : 배포하기 전 개발용 브랜치. 각자의 브랜치에서 merge
3. **feat / #이슈 번호 / 기능명** : 작업용 feature 브랜치. 새로운 기능 개발 후 develop 브랜치로 merge
4. **fix / #이슈 번호 / 기능명** : 작업용 fix 브랜치. 버그가 생겼을 때 수정 후 develop 브랜치로 merge
5. **refactor / #이슈 번호 / 작업 내용** : 작업용 refactor 브랜치. 기능에 영향을 주지 않는 구조 개선 작업 후 develop 브랜치로 merge

</br>

### ✨ Commit Convention

### 제목

**Commit type : Commit messages**

**Type ：**

1. **init** : 프로젝트 초기 생성 및 설정
2. **feat** : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
3. **fix** : 기능에 대한 버그 수정
4. **build** : 빌드 관련 수정
5. **chore** : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
6. **docs** : 문서(주석) 수정
7. **style** : 코드 스타일, 포맷팅에 대한 수정
8. **refactor** : 기능의 변화가 아닌 코드 리팩토링 ex) 변수 이름 변경

</br>

### ✨ PR(Pull Request) Convention

### 제목

**[Feat/#이슈 번호] "pr message"**

### 내용

#### 📌 이슈 번호

- Closes #이슈 번호

### 📌 PR 유형

- [ ] 새 기능 추가
- [ ] 버그 수정
- [ ] CSS 등 사용자 UI 디자인 변경
- [ ] 리팩토링

### 📌 PR 내용

1. 세부 작업 내용
2.
3.

### 📸 스크린샷 (선택)

### 🔗 참고 자료 (선택)

​
<br/>

## 💻 Coding Convention

### <a href="https://airbnb.io/javascript/react/">Airbnb React/JSX Style Guide

### Naming

- **변수 / 함수** : camelCase(카멜 케이스)
- **컴포넌트 ／ 파일명** : PascalCase(파스칼 케이스)

<br/>

## 📂 Folder Convention

### FSD(Feature-Sliced Design)

- **app** : 애플리케이션의 초기화 및 전역. (ex. 프로바이더, 라우터, 전역 스타일, 전역 타입 선언)
- **pages** : 애플리케이션의 페이지 및 화면 구성 (ex. 라우터에 연결할 수 있는 UI 컴포넌트, 데이터 패칭 및 에러 처리 로직)
- **widgets** : 독립적인 UI 컴포넌트 (기능과 엔티티의 조합)
- **features** : UI에 기능적인 부분을 포함 (ex. 비즈니스 로직, 인터랙티브 UI 요소, API 호출)
- **entities** : 도메인 데이터 및 상태
- **shared** : 비즈니즈 로직과 분리된 UI 컴포넌트 (ex. 재사용 가능한 컴포넌트와 유틸리티, 커스텀 훅)
