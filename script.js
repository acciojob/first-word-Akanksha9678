function firstWord(s) {
  // your code here
	s=s.trim();
	let str=""
	for(let i=0;i<s.length;i++){
		if(s[i]==" ")
			break;
		else{
			str+=s[i]
		}
	}
	return str
}

// Do not change the code belo

const s = prompt("Enter String:");
alert(firstWord(s));
