Array.prototype.shuffle = function () {
	var i = this.length, j, temp;
	if (i == 0) return this;
	while (--i) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};

const vacilao = "CglhYnN0cmFjdCwKCWFzc2VydCwKCWJvb2xlYW4sCglicmVhaywKCWJ5dGUsCgljYXNlLAoJc3dpdGNoLAoJZGVmYXVsdCwKCWNhdGNoLAoJdHJ5LAoJZmluYWxseSwKCWNoYXIsCgljbGFzcywKCU9iamVjdCwKCWNvbnRpbnVlLAoJZG8sCgl3aGlsZSwKCXRydWUsCglmYWxzZSwKCWRvdWJsZSwKCWVsc2UsCglpZiwKCWVudW0sCglFbnVtLAoJZXhwb3J0cywKCWV4dGVuZHMsCglmaW5hbCwKCXJldHVybiwKCWZsb2F0LAoJZm9yLAoJSXRlcmFibGUsCglpbXBsZW1lbnRzLAoJaW1wb3J0LAoJc3RhdGljLAoJaW5zdGFuY2VvZiwKCWludCwKCWludGVyZmFjZSwKCXN0YXRpYyBmaW5hbCwKCWxvbmcsCgltb2R1bGUsCgluYXRpdmUsCgluZXcsCglwYWNrYWdlLAoJcHJpdmF0ZSwKCXByb3RlY3RlZCwKCXB1YmxpYywKCXJlcXVpcmVzLAoJc2hvcnQsCglzdHJpY3RmcCwKCXN1cGVyLAoJc3luY2hyb25pemVkLAoJQ2xhc3MsCgl0aGlzLAoJdGhyb3csCgl0aHJvd3MsCglSdW50aW1lRXhjZXB0aW9uLAoJdHJhbnNpZW50LAoJdm9pZCwKCXZvbGF0aWxlLAoJbnVsbCwKCXZhcg==";
const keyWords = atob(vacilao)
	.split(',')
	.map(v => v.replace(/[^a-zA-Z]/g, ''))
	.shuffle();
