 var keys = {
 	0:[1,2,3,4,5,6,7,8,9,0],
 	1:['q','w','e','r','t','y','u','i','o','p'],
 	2:['a','s','d','f','g','h','j','k','l'],
 	3:['z','x','c','v','b','n','m'],
 	length:4
 }
var hash = {
	q:'qq.com',
	w:'weibo.com',
	e:'ele.me',
	r:'renren.com',
	t:'tianya.com',
	u:'uc.com',
	i:'iqiyi.com',
	o:'opera.com',
	a:'alibaba.com',
	s:'sohu.com',
	z:'zhihu.com'
}
//取出对应的hash
var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') ||'null')
			if(hashInlocalStorage){
				hash = hashInlocalStorage
			}
var index = 0
while(index<keys.length){
	var div1 = document.createElement('div')
	div1.className = 'row'
	main1.appendChild(div1)
	var row = keys[index]
	var index2 = 0
	while(index2<row.length){
		var kbd1 = document.createElement('kbd')
		kbd1.className = 'key'
		var span = document.createElement('span')
		span.textContent = row[index2]
		kbd1.appendChild(span)
		span.className = 'text'
		div1.appendChild(kbd1)
		var button1 = document.createElement('button')
		kbd1.appendChild(button1)
		button1.textContent = "编辑"
		button1.id = row[index2]
		var img = document.createElement('img')
		img.src ='http://'+ hash[row[index2]] + '/favicon.ico'
		kbd1.appendChild(img)
		button1.onclick = function(button2){
			key = button2['target']['id']
			x = prompt('请输入网址')
			hash[key] = x
			localStorage.setItem('zzz',JSON.stringify(hash))
		}
		index2++
	}
	index++
}


document.onkeypress = function(key1){
	var key = key1.key
	var website = hash[key]
	window.open('http://' + website,'_blank')
}

