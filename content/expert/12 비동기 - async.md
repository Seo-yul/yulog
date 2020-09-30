# 12 비동기 - async

## 순차 처리를 했을 경우

```python
import timeit
from urllib.request import urlopen

urls = ['http://daum.net', 'https://google.com', 'https://apple.com', 'https://tistory.com', 'https://github.com/', 'https://gmarket.co.kr/']
start = timeit.default_timer()

# 순차 실행부
for url in urls:
    print('Start', url)
    urlopen(url)
    print('Done', url)

# 완료시간 - 시작시간
duration = timeit.default_timer() - start

# 총 실행 시간
print('Total Time : ', duration)
```

## 비동기 처리, 스레드를 사용

```python
import timeit
from urllib.request import urlopen
from concurrent.futures import ThreadPoolExecutor
import threading

# 시작 시간
start = timeit.default_timer()
urls = ['http://daum.net', 'https://google.com', 'https://apple.com', 'https://tistory.com', 'https://github.com/', 'https://gmarket.co.kr/']

def fetch(url):
    print('Thread Name :', threading.current_thread().getName(), 'Start', url)
    urlopen(url)
    print('Thread Name :', threading.current_thread().getName(), 'Done', url)

def main():
    with ThreadPoolExecutor(max_workers=10) as executor:
        for url in urls:
            executor.submit(fetch, url)

if __name__ == '__main__':
    # 함수 실행
    main()
    # 완료시간 - 시작시간
    duration = timeit.default_timer() - start
    # 총 실행 시간
    print('Total Time : ', duration)
```

## 비동기 처리, 코루틴과 스레드 사용

async 가 붙은 함수만 코루틴에서 비동기로써 사용할 수 있다.

```python
# Asyncio 변환 작업

# aiohttp 사용 가능(Asyncio 지원)
import asyncio
import timeit
from urllib.request import urlopen
from concurrent.futures import ThreadPoolExecutor
import threading

# 시작 시간
start = timeit.default_timer()
urls = ['http://daum.net', 'https://google.com', 'https://apple.com', 'https://tistory.com', 'https://github.com/', 'https://gmarket.co.kr/']

    # await == yeild from 루프의 연산이 끝날때까지 위임해서 사용가능.
async def fetch(url, executor):
    # 쓰레드 이름 주목!
    print('Thread Name :', threading.current_thread().getName(), 'Start', url)
    # 실행    # urlopen은 동기함수(블럭함수)로 비동기로 사용할 수 없다. 이미 만들어진 함수 # aiohttp 모듈이 있다.
    res = await loop.run_in_executor(executor, urlopen, url)
    print('Thread Name :', threading.current_thread().getName(), 'Done', url)
    # 반환
    return res.read()[0:5]

async def main():
    # 쓰레드 풀 생성
    executor = ThreadPoolExecutor(max_workers=10)

    # asyncio.ensure_future :
    futures = [asyncio.ensure_future(fetch(url, executor)) for url in urls]
    
    # 결과 취합
    rst = await asyncio.gather(*futures)

    print()
    print('Result : ', rst)

if __name__ == '__main__':
    # 루프 생성
    loop = asyncio.get_event_loop()
    # 루프 대기
    loop.run_until_complete(main())
    # 완료시간 - 시작시간
    duration = timeit.default_timer() - start
    # 총 실행 시간
    print('Total Time : ', duration)
```