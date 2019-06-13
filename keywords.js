Array.prototype.shuffle = function () { var t, h, r = this.length; if (0 == r) return this; for (; --r;)t = Math.floor(Math.random() * (r + 1)), h = this[r], this[r] = this[t], this[t] = h; return this };
const qualFoiVacilaoSaiDaqui = "YWJzdHJhY3QsCmNvbnRpbnVlLApmb3IsCm5ldywKc3dpdGNoLAphc3NlcnQsCmRlZmF1bHQsCnBhY2thZ2UsCnN5bmNocm9uaXplZCwKYm9vbGVhbiwKZG8sCmlmLApwcml2YXRlLAp0aGlzLApicmVhaywKZG91YmxlLAppbXBsZW1lbnRzLApwcm90ZWN0ZWQsCnRocm93LApieXRlLAplbHNlLAppbXBvcnQsCnB1YmxpYywKdGhyb3dzLApjYXNlLAplbnVtLAppbnN0YW5jZW9mLApyZXR1cm4sCnRyYW5zaWVudCwKY2F0Y2gsCmV4dGVuZHMsCmludCwKc2hvcnQsCnRyeSwKY2hhciwKZmluYWwsCmludGVyZmFjZSwKc3RhdGljLAp2b2lkLApjbGFzcywKZmluYWxseSwKbG9uZywKc3RyaWN0ZnAsCnZvbGF0aWxlLApmbG9hdCwKbmF0aXZlLApzdXBlciwKd2hpbGU=";

const keyWords = atob(qualFoiVacilaoSaiDaqui)
	.split(',')
	.map(v => v.replace(/[^a-zA-Z]/g, ''))
	.shuffle();
