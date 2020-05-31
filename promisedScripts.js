globalThis.promisedScripts||(
	globalThis.promisedScripts=((deps,options)=>{
		const {async,atLoad=()=>{}}=options;
		if(deps.length){
			const d=document,
			frag=new DocumentFragment();

			deps.forEach((v,i,m)=>{
				const e=frag.appendChild(d.createElement('script'));
				e.src=v;
				(m[i]=new Promise(f=>{e.onload=o=>{
					f([i,v,e,o])
				}})).then(atLoad)
			});

			if(async){
				for(const e of frag.children){
					e.async=true
				}
			};

			d.head.append(frag);
			return deps
		};
		return null
	})
);
