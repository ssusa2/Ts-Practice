/** @format */

const TheBasic: React.FC = () => {
	const message = 'Hello World!';

	message.toLocaleLowerCase();

	// message();  //  호출시 오류

	const user = {
		name: 'SUIN',
		age: 25,
	};

	function greet(person: string, date: Date) {
		// console.log(`Hello ${person}, today is ${date.toDateString()}`);
	}

	// console.log(greet('Maddison', new Date()));
	// user.location; // user에 정의되지 않았다는 에러 문자 출력

	let msg = 'hello there!';

	return <div>TheBasic 컴포넌트</div>;
};

export default TheBasic;
