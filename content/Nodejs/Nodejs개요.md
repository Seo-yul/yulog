---
title: "Nodejs 개요"
metaTitle: "Nodej 개요"
---
# NodeJS의 개요

# Nods.js 소개

## node.js

- 2009년 Ryan Dahl 이 만들었다.
- 자바스크립트 어넝
- 크롬 V8 엔진

### 특징

- 싱글쓰레드
- 비동기I/O
- 이벤트기반(event driven)

### 비동기 I/O

- 시간이 걸리는 I/O
    - 하드디스크 접근
    - 데이터베이스 서버
    - 네트워크를 이용해서 다른 서비스 접근

### 비동기 I/O의 장점

- 아파치 vs Nginx
- 아파치는 사용량이 늘어날수록 메모리 사용 많음
- Nginx는 사용량이 일정.

### 노드JS 아키텍처

- 상위레벨 - js
- 로우레벨 - c
    - 바인딩
    - v8 엔진
    - libed : Event
    - libeio : I/O

### Node.js 재단

IBM, intel ...

## 버전 구성과 지원

- node.js 버전을 두 단계로진행
- Stable 짝수, Unstable 홀수
- LTS 버전이 주 버전으로 사용된다. 3년동안 지원

# 프로그래밍 모델

## 프로그래밍 모델

### 동기(Synchronous)

- A실행 - A결과 - B실행 - B결과
- 실행이 끝나고 다음 실행

### 비동기(Asynchornous)

- A실행 - B실행 - B결과 - A결과
- 실행이 끝나기를 기다리지 않음

## 동기식

```jsx
var fs = require('fs');
var content = fs.readFileSyng("readme.txt", "utf8");
console.log(content);
console.log('Reading file...');
```

## 비동기식

```jsx
var fs = require('fs');
fs.readFile("readme.txt", "utf8", function(err, content){
	console.log(content);
});

console.log('Reading file...');
```

## 동기/비동기 방식의 코드 차이점

### 동기식 함수 구현과 사용

```jsx
// 동기식 함수 구현
function add(i, j){
	return i + j;
}
// 동기식 함수 사용
var result = add(1,2);
console.log('Resoult:', result);
```

### 비동기식 함수 구현과 사용

```jsx
// 비동기식 함수 구현
function add(i, j, callback){
	var result = i + j;
	callback(result);
}

// 비동기식 함수 사용
add(1, 2, function(result){
	console.log('Result:', result);
});
```

## 비동기 방식의 API로 파일 읽는 코드 예

### 콜백을 이용한 파일 읽기

```jsx
fs.readFile('textFile.txt','utf8',function(err,text){
	console.log('Read File Async', text);
});
```

## 콜백 함수 형태

### 비동기 함수의 에러 처리

콜백 함수의 파라미터로 처리한다.

### 대부분의 비동기 API

```jsx
callbackFunc(arg1, arg2, function(error, result){
	if(error){
// 에러 처리
	return;
	}
// 정상처리
}
```

# 도큐먼트

## 모듈

다른언어의 라이브러리에 해당

## API 문서 보기

- API 안정도
- Stability

    0 : Deprecated 더이상 사용 금지

    1 : Experimental 실험적 모듈

    2 : Stable 안정

    3 : Locked 더이상 변경이 없음

## 모듈로딩

### 모듈 로딩

- require('모듈 이름')
- 절대 경로 혹은 상대 경로 var readline = require('readline');

### 모듈 종류

- 기본 모듈 : 미리 컴파일된 상태로 라이브러리 디렉토리 - 설치 불 필요
- 확장 모듈 : npm으로 별도 설치

## 모듈 로딩 위치

### 기본 모듈 로딩 위치

- Node.js 라이브러리 디렉토리

### 확장 모듈

- 같은 폴더
- node_modules 이름의 폴더
- 상위 폴더의 node_modules

## 모듈 로딩 - 객체 생성

### 클래스

- Interface

### 모듈 로딩과 객체 생성

```jsx
var readline = require('readline');
var rl = readline.createInterface();
```

## 객체 생성

### 객체 생성 함수 옵션

```jsx
var rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

readline.createInterface(options)
// options 에는 input, output, completer, terminal 등을 사용
```

## 메소드 사용

### 모듈 로딩, 객체 생성 후 메소드 사용

```jsx
var readlince = require('readline');
var rl = readline.createInterface();
rl.setPrompt('>>');
```

## 이벤트

### 이벤트 - 이벤트 핸들러

```jsx
.on([이벤트 이름], [리스너 함수])

rl.on('line', function (cmd) {
	console.log('typed: ' + cmd);
});
```

### 리스너 함수의 파라미터

- API 문서 참조

## 모듈 함수

### 객체 생성 없이 모듈에 직접 사용

```jsx
// 모듈 객체에 바로 함수를 사용하듯 이용
var readline = require('readline');
readline.cursorTo(process.stdout, 60, 30);
```


# 이동
