// *** Bài 24: Câu điều kiện cơ bản ***
// Conditional : điều kiện

// if ==> else
// if (conditional (nếu là đúng thì trả lại true còn sai thì false ) ) {
// your code here;
// } else :(là ngược lại điều kiện của IF){
// }

const isRich = false;
const myMoney = 1000000000;

if (isRich) {
    console.log("I will buy a new car"); // điều kiện sai thì ko in ra để trống
} else {
    console.log("i will save my money"); // điều kiện đứng thì in i will save my money
} // ==> i will save my money

if (!isRich) {
    console.log("I will buy a new car"); // điều kiện của dấu phủ định đúng thì in ra I will buy a new car
} else {
    console.log("i will save my money"); // điều kiện của dấu phủ định sai thì ko in ra
} // ==> I will buy a new car

// else ==> if
// else if (conditional) {
// your code here;
// }

const isRichs = true;
const myMoneys = 100;

if (!isRichs) {
    console.log("I will buy a new car");
} else if (myMoneys > 1000) {
    console.log("i will give some money");
} else {
    console.log("i poor");
} // ==> i poor

const isRichss = true;
const myMoneyss = 10000;

if (!isRichs) {
    console.log("I will buy a new car");
} else if (myMoneyss > 1000) {
    console.log("i will give some money");
} else {
    console.log("i poor"); // ==> i poor
} // ==> i will give some money

// *** Bài 25: alert, prompt và confirm ***

// *** alert, prompt và confirm ***

// *** alert (là hiện ra một thông báo cho trang website) ***
// alert("Your website has been hacked"); cảnh báo khi trang hiện ra

// *** prompt (bắt chúng ta nhập vào) ***
// const youName = prompt("Xin vui long nhap ten cua ban", "");
// console.log(youName);

// *** confirm (xác nhận đúng hay sai) ***
const isYouMoney = confirm("Đây có phải tiền của bạn hay không");
console.log(isYouMoney); // ==> bấm ok thì in ra true, còn bấm canel thì in ra false

// const 1abc = "bay", ==> ko đặt số trước biến khai
// const abc-xyz = "buom"; ==> ko đc đặt dấu - vào trong biến
// const new = 123; ==> new là biến của hệ thống và nhiều nữa

// *** Dưới đây là danh sách các từ dành riêng:
// abstract	arguments	await*	boolean
// break	byte	case	catch
// char	class*	const	continue
// debugger	default	delete	do
// double	else	enum*	eval
// export*	extends*	false	final
// finally	float	for	function
// goto	if	implements	import*
// in	instanceof	int	interface
// let*	long	native	new
// null	package	private	protected
// public	return	short	static
// super*	switch	synchronized	this
// throw	throws	transient	true
// try	typeof	var	void
// volatile	while	with	yield

// *** Nên tránh sử dụng tên của các đối tượng, thuộc tính, phương thức được xây dựng sẵn:
// Array	Date	eval	function
// hasOwnProperty	Infinity	isFinite	isNaN
// isPrototypeOf	length	Math	NaN
// name	Number	Object	prototype
// String	toString	undefined	valueOf

// *** JavaScript có thể được sử dụng như một ngôn ngữ lập trình trong nhiều ứng dụng. Do đó, chúng ta cũng nên tránh sử dụng tên của các đối tượng và thuộc tính của HTML và Window:
// alert	all	anchor	anchors
// area	assign	blur	button
// checkbox	clearInterval	clearTimeout	clientInformation
// close	closed	confirm	constructor
// crypto	decodeURI	decodeURIComponent	defaultStatus
// document	element	elements	embed
// embeds	encodeURI	encodeURIComponent	escape
// event	fileUpload	focus	form
// forms	frame	innerHeight	innerWidth
// layer	layers	link	location
// mimeTypes	navigate	navigator	frames
// frameRate	hidden	history	image
// images	offscreenBuffering	open	opener
// option	outerHeight	outerWidth	packages
// pageXOffset	pageYOffset	parent	parseFloat
// parseInt	password	pkcs11	plugin
// prompt	propertyIsEnum	radio	reset
// screenX	screenY	scroll	secure
// select	self	setInterval	setTimeout
// status	submit	taint	text
// textarea	top	unescape	untaint
// window


// *** Bài Tập ***

// Bài 1: Nhập vào số tuổi
// 