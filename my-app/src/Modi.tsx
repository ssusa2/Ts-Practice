/** @format */

const Modi: React.FC = () => {
	const message: string = 'hello world';
	// console.log(message);

	let count = 0; //숫자
	count += 1;
	// count = '문자열'; // 에러

	const done: boolean = true; // 불리언

	const numbers: number[] = [1, 2, 3]; //numbers는 숫자로만 이루어진 배열값을 가진다

	const messages: string[] = ['hi', 'hello']; // messages는 문자열로만 이루어진 배열값을 가진다.

	// messages.push(1);  이러면 오류
	messages.push('안녕');
	// console.log(messages);

	let mightBeUndefined: string | undefined = undefined; // 문자열일 수도, 언디파인드일 수 도 있음
	let nullableNumber: number | null = null; // 숫자일 수도 널일 수 도 있음.

	let color: 'red' | 'orange' | 'yellow'; //레드 아니면 오렌지 아니면 엘로우 일 수도 있다.

	// console.log((color = 'red'));
	// console.log((color = 'orange'));

	return <div>Modi 컴포넌트</div>;
};

export default Modi;
