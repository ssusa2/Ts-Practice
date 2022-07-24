/** @format */
/** @format */

const EveryTypes: React.FC = () => {
	let myName: string = 'Alice';

	//함수 매개변수 타입 지정
	function greet(name: string) {
		// console.log('Hello, ' + name.toLocaleLowerCase() + '!!');
	}

	// greet(44); 오류

	//반환 타입 표기
	function getUrl(): string {
		return 'jung';
	}

	//객체 타입
	function printCoord(pt: { x: number; y: number }) {}

	printCoord({ x: 3, y: 2 });

	//옵셔널 프로퍼티
	function printName(obj: { first: string; last?: string }) {
		// 오류 - `obj.last`의 값이 제공되지 않는다면 프로그램이 멈추게 됩니다!

		if (obj.last !== undefined) {
			// OK
			// console.log(obj.last.toUpperCase());
		}

		// 최신 JavaScript 문법을 사용하였을 때 또 다른 안전한 코드
		// console.log(obj.last?.toUpperCase());
	}

	//유니온 타입 조합
	function printID(id: number | string) {
		// console.log('your ID is ' + id);
	}

	printID(200);
	printID('문자열');

	// 유니언 좁히기

	function printUi(id: number | string) {
		if (typeof id === 'string') {
			console.log(id.toUpperCase());
		} else {
			console.log(id);
		}
	}
	printUi('abc');
	printUi(22);

	// 유니온 좁히기 2

	function useArray(id: string[] | string) {
		if (Array.isArray(id)) {
			console.log('hello, ' + id.join(' and '));
		}
	}

	useArray(['a', 'b', 'c', 'd']);

	// 타입 별칭
	type Point = {
		x: number;
		y: number;
	};
	//위에서 사용했던 예제 함수를 이렇게 활용할 수 있다
	// function printCoord(pt: { x: number; y: number }) {}.
	function printCord(pt: Point) {
		console.log('x is ' + pt.x);
		console.log('y is ' + pt.y);
	}

	printCord({ x: 100, y: 2 });

	// 인터페이스 선언
	interface Y {
		x: number;
		y: number;
	}

	function printCrd(pt: Y) {
		console.log(`x is ${pt.x}, y is ${pt.y}`);
	}

	printCrd({ x: 2000, y: 1 });

	// 인터페이스 확장하기
	interface Animal {
		name: string;
	}

	interface Bear extends Animal {
		honey: boolean;
	}

	// 리터럴 타입

	let changingString = 'Hello';
	changingString = '안녕';

	const Cont = '촤';

	// 리터럴 보다 쓸모 있게
	function PrintText(s: string, alignment: 'left' | 'right' | 'center') {
		console.log(`my name is ${s}, my desk on your ${alignment}`);
	}

	PrintText('suin', 'left');

	// 숫자 리터럴
	function compare(a: string, b: string): -1 | 0 | 1 {
		console.log(a === b ? 0 : a > b ? 1 : -1);
		return a === b ? 0 : a > b ? 1 : -1;
	}

	compare('aaaa', 'aaa');

	// 리터럴이 아닌 타입과 함께 사용하기
	interface Options {
		width: number;
	}
	function configure(x: Options | 'auto') {
		console.log(`width is ${x}`);
	}

	configure('auto');

	return (
		<div>
			<div>EveryTypes 컴포넌트</div>
			<h3>원시타입 : string, number, boolean</h3>
			문자열과 숫자, 불리언 값은 대문자가 아닌 소문자 값을 사용해야한다
			<h3>배열</h3>
			숫자로 이루어진 배열 [1,2,3]과 같은 경우는{' '}
			<div className='code'>number[]</div>구문을 사용할 수 있다. 문자로 이루어진
			배열은 <div className='code'>string[]</div>
			<h3>any</h3>
			특정 값으로 인하여 타입 검사 오류가 발생하는 것을 원하지 않을 때, 사용
			값의 타입이 any이면, 임의의 속성에 접근 가능, 구문적으로 유효한 것이라면
			가능
			<h3>변수에 대한 타입 표기</h3>
			변수의 타비을 명시적으로 지정하기 위하여 타입 표기를 추가할 수 있다.
			선택사항 / 타입 표기는 항상 타입의 대상 뒤에 위치한다.
			<h3>함수</h3>
			함수의 입력 및 출력 타입을 지정할 수 있습니다. 함수를 선언할때, 함수가
			허용할 매개변수 타입을 선언하기 위하여 각 매개변수 뒤에 타입을 표기한다.
			매개변수에 타입을 표기하지 않았더라도 여전히 타입스크립트는 올바른 개수의
			인자가 전달되었는지 여부를 검사합니다.
			<h4>반환 타입 표기</h4>
			반환 타입은 매개변수 목록 뒤에 표기한다. 변수 타입 표기와 같이 반환 타입은
			표기하지 않아도 된다.
			<h3>객체 타입</h3>
			원시 타입을 제외하고 가장 많이 마주치는 타입 객체 타입을 정의하려면 해당
			객체의 프로퍼티와 각 프로퍼티의 타입들을 나열하기만 하면 됩니다.
			프로퍼티의 타입 표기는 선택 사항 안하면{' '}
			<div className='code'> any 타입</div>으로 간주함.
			<h4>옵셔널 프로퍼티</h4>
			객체의 일부 값, 혹은 모든 값에 선택적인 타입을 지정할 수 있다. 프로퍼티
			이름 뒤에<div className='code'>?</div> 를 붙히면 된다. 존재하지 않는 값에
			접근시, <div className='code'>undefined</div> 값을 얻게됨.
			<h3>유니온 타입</h3>
			기존의 타입을 기반으로 다양한 연산자를 사용하여 새로운 타입을 만들 수
			있다.
			<h4>유니온 타입 정의하기</h4>
			<h5>1. 유니온 타입 정의</h5>
			서로 다른 두 개 이상의 타입들을 사용하는 것 값은 타입 조합에 사용된 타입
			중 무엇이든 하나를 타입으로 가질 수 있다. 조합에 사용된 각 타입을 유니언
			타입의 멤버라고 부른다.
			<h5>2. 유니온 타입 사용 </h5>
			유니언을 다룰땐, 타입의 모든 멤버에 대하여 유효한 작업일때만 허용된다.
			타입이 <div className='code'> number | string</div>이라면 문자열에만
			해당하는 메서드는 사용할 수 없다. ex) toUpperCase() 이를 해결하기 위해서는
			유니언을 좁혀야한다. 분기처리로 이를 해결할 수 있다. 해결하는 방법 2
			<div className='code'> Array.isArray</div> 사용하기 때로는 유니언의 멤버가
			공통점을 가질 수도 있습니다. 예를 들어{' '}
			<div className='code'>배열과 문자열을 모두 slice()를 내장한다.</div>
			어떤 프로퍼티를 유니언의 모든 멤버가 공통으로 가진다면, 좁히기 없이 해당
			프로퍼티를 사용할 수 있게 된다.
			<h3>타입 별칭</h3>
			객체 타입과 유니온 타입을 사용할 때, 해당 타입을 직접적으로 표기하였다.
			재사용하거나 또 다른 이름으로 부르고 싶을 때는 이렇게 하자.
			<h4>유니온 타입 타입 별칭</h4>
			<div className='code'>type ID = number | string</div>
			<h3>인터페이스 interface</h3>
			인터페이스 선언은 객체 타입을 만드는 또 다른 방법이다. 타입 별칭을
			사용했을 때, 마치 타입이 없는 임의의 익명 객체를 사용하는 것처럼
			동작합니다. Ts는 오직 전달된 값의 구조에만 관심을 가진다. 즉, 예측된
			프로퍼티를 가졌는지 여부만을 따진다
			<h4>타입 별칭과 인터페이스의 차이점</h4>
			둘은 매우 유사하다. 대부분의 경우 둘 중 하나를 자유롭게 선택하여 사용할 수
			있다. 인터페이스가 가지는 기능은 type에서도 동일하게 사용 가능 핵심적인
			차이점 타입은 새 프로퍼티를 추가하도록 개방될 수 없다 하지만, 인터페이스는
			항상 확장될 수 있다는 점이다. 우선 인터페이스를 사용할 것, 문제가 생길
			시에 type사용
			<h3>타입 단언</h3>
			ts보다 코드 작성자가 값의 타입에 대한 정보를 더 잘 알 경우
			<div className='code'>
				const myCanvas = document.getElementById("main_canvas") as
				HTMLCanvasElement;
			</div>
			타입 단언은 컴파일러에 의하여 제거되며 단언이 틀렸다라도 예외나 null이
			생성되지 않는다.
			<h3>리터럴 타입</h3>
			구체적인 문자열과 숫자 값을 타입 위치에서 지정할 수 있다. 변수를 선언할
			때의 경우를 떠올려보자. let과 var는 변수에 값의 종류를 변경할 수 있지만
			const는 이게 불가능하다. 이러한 특징들은 Ts가 리터럴 값을 위한 타입을
			생성하는 방식에 그대로 반영된다. 리터럴 타입은 그 자체만으로는 유의미하지
			않다. 단 하나의 값만을 가지는 변수는 쓸모가 없다. 하지만 리터럴과 유니언을
			함께 사용하면 보다 쓸모있는 개념을 표현할 수 있다.
			<h4>불 리터럴 타입</h4>
			불리언 값으로 하는 리터럴
			<h4>리터럴 추론</h4>
			<a href='https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html'>
				리터럴 추론부터 다시 보기
			</a>
		</div>
	);
};

export default EveryTypes;
