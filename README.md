# 기본 설정

1. Node 설치 (yarn 설치)
2. JDK 설치 및 환경변수 설정
3. Android Studio 설치
4. SDK 설치 및 환경변수 설정
5. emulator 사용 시, 사용할 device 생성

# 생성

1. `npx react-native init '프로젝트명'`
2. TypeScript 사용 설정

```
npm install typescript @types/react @types/react-native --save-dev
```

3. Eslint 설정 초기화 (없을 경우 설치)

```
npx eslint --init
```

4. `npx react-native run-android` 실행

# Navigation 사용 설정

1. `yarn add @react-navigation/native @react-navigation/native-stack` 설치
2. `yarn add react-native-screens react-native-safe-area-context` 설치

# Scanner 사용 설정

1. `yarn add react-native-document-scanner-plugin` 설치
2. `android/gradle.properties` 파일에 `org.gradle.jvmargs=-Xmx2048m` 추가
