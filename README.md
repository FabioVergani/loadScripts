# loadScripts
A tiny async loader for head scripts

v1 e.g.:
```
Promise.all(loadScripts(
	[
		'./res/script/required/a.js',
		'./res/script/required/b.js',
		'./res/script/required/c.js'
   		//,ecc..
	],{
		onload:([index,src,node])=>{
			console.log('loaded',{index,src,node})
		}
	})
).then(
	success=>{
		console.log('complete',success)
	}
).catch(bad=>{
	console.log('wrong',bad)
});
```

v2 e.g.:
```
Promise.all(loadScripts(
	[
		[
			"./res/script/required/",
			[
				'a.js',
				'b.js',
				'c.js'
			]
		]
	],{
		onload:([index,src,node])=>{
			console.log('loaded',{index,src,node})
		}
	})
).then(
	success=>{
		console.log('complete',success)
	}
).catch(bad=>{
	console.log('wrong',bad)
});
```
