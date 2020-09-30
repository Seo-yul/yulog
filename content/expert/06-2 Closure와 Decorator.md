# 6-2 Closure와 Decorator

함수 내 (함수 스코프 안)에서 변수를 체크 한다. 변수가 지역 스코프 내에 없는데 전역 변수에 있으면 전역 변수를 이용한다. 만일 같은 변수가 있다면 `지역변수`가 `우선된다` 하지만 인터프리터는 유무 만 체크하기 때문에 사용이 먼저 된다면 에러가 발생한다. 아래와 같다.

```python
b = 10
def func_v1(a):
	print(a)
	print(b)

func_v1(10) # 에러 발생하지 않는다.
# 결과
# 10
# 10

b = 5
def func_v2(a):
	print(a)
	print(b)

func_v2(5) # 에러가 발생한다.
# 결과
# 에러
```

## Closure  클로저

반환되는 내부 함수에 대해서 선언 된 연결 데이터를 가지고 참조하는 방식으로 

반환 당시 함수 유효범위를 벗어난 변수 또는 메소드에 직접 접근이 가능하다.

```python
a = 10
print(a + 10) # 20
print(a+ 100) # 110

# 결과를 누적 시킬 수 있을까??
print(sum(range(1, 51))   # 1275
print(sum(range(51, 101)) # 3775
# sum 함수를 이용해서만 가능할까?  

# 클래스를 이용
class Averager():
	 def __init__(self):
			 self._series = []

	 def __call__(self, v):
			 self._series.append(v)

# 클로저를 사용!!

def closure_avg1():
    # Free variable
    # 자유 변수 영역이라고 함
    series = []
    # 클로저 영역
    def averager(v):
        # series = [] # 여기 있으면 유지 불가.
        series.append(v)
        print('def >>> {} / {}'.format(series, len(series)))
        return sum(series) / len(series)
    
    return averager

avg_closure1 = closure_avg1()

print(avg_closure1(15))
print(avg_closure1(35))
print(avg_closure1(40))
```

클로저를 남용하게 되면 메모리 공간의 낭비가 발생 할 수 있다.

```python
# 클로저 변수를 사용하는데 함수에서 같은 이름을 사용할 때!
# nonlocal 키워드를 사용한다!

def closure_avg2():
    # Free variable
    cnt = 0
    total = 0
    # 클로저 영역
    def averager(v):
        nonlocal cnt, total  # 밑에서 할당하는 cnt, total 이 초기값이 없어서 에러 생김
        cnt += 1
        total += v
        return total / cnt
    
    return averager

avg_closure2 = closure_avg2()

print(avg_closure2(15))
print(avg_closure2(35))
print(avg_closure2(40))
```

# Decorator 데코레이터

데코레이터를 이용하면 중복 코드를 줄이고 코드가 간결해진다. 또한, 클로저 보다 문법이 간단하다.

하지만, 디버깅이 어렵고 에러를 찾기 힘들어진다.

데코레이터는 여러개 사용 가능하며, 위에서부터 차례대로 작동한다.

```python
import time

def perf_clock(func):
    def perf_clocked(*args):
        # 시작 시간 
        st = time.perf_counter() 
        result = func(*args)
        # 종료 시간
        et = time.perf_counter() - st 
        # 함수명
        name = func.__name__
        # 매개변수 
        arg_str = ', '.join(repr(arg) for arg in args)
        # 출력
        print('[%0.5fs] %s(%s) -> %r' % (et, name, arg_str, result)) 
        return result 
    return perf_clocked

# @를 이용해서 함수를 작동하기 전에 데코레이터 함수가 아래 함수를 파라미터로 받아 실행하는 형태
@perf_clock
def time_func(seconds):
    time.sleep(seconds)

@perf_clock
def sum_func(*numbers):
    return sum(numbers)

@perf_clock
def fact_func(n):
    return 1 if n < 2 else n * fact_func(n-1)

time_func(0.5)
sum_func(10, 15, 25, 30, 35)
fact_func(10)

```

## 데코레이터 예제

```python
"""
아래와 같은 기능을 하는 데코레이터 함수를 구현하시오. 함수를 구현하는 데에 필요한 모듈을 import하는 코드를 답안에 반드시 포함하시오.

데코레이터 함수의 이름은 wrapper_func으로 한다.
데코레이터가 적용될 함수의 입력 인자의 개수는 임의의 개수에 대해서 동작해야 한다.
데코레이터는 함수를 실행하기 전에 아래와 같은 동작을 한다.
함수의 이름과 함수에 입력된 인자의 개수를 출력한다.
함수를 실행할 때에 모든 입력 인자가 정상적으로 전달되어야 한다.
데코레이터는 함수를 실행한 후에 아래와 같은 동작을 한다.
함수를 실행한 후에, 함수가 실행되는데 걸린 시간을 출력한다.
함수가 10초 이상 동작한 경우, 경고 메세지를 출력한다.
데코레이터를 적용하더라도 함수의 반환값은 정상적으로 반환되어야 한다.
"""
import time
import logging

def wrapper_func(func):

    def deco_closer_func(*args):
        name = func.__name__
        args_len = len(args)
        print('함수의 이름: {}\n인자의 개수: {}'.format(name, args_len))

        start_time = time.perf_counter()
        func_result = func(*args)
        end_time = time.perf_counter()

        calc_time = (end_time - start_time)*100/100
        print('실행 소요 시간 : {}'.format(calc_time))

        if calc_time >= 10:
            logging.warning('실행시간이 10초를 넘었습니다!')
        

        return func_result

    return deco_closer_func

@wrapper_func
def time_func(seconds):
    time.sleep(seconds)
    return print('time_func 끝')

time_func(11)
```