var loadScripts=(deps,opt={})=>{
	if(deps.length){
		const { async=true, onload:handle=null }=opt,
		frag=new DocumentFragment(),
		P=Promise,
		d=document,
		m=[],
		f=(b,c)=>{
			for(const a of b){
				if('s'!==(typeof a)[0]){
					f(a[1],[c,a[0]])
				}else{
					m[m.length]=[c,a]
				}
			}
		};
		f(deps);
		m.forEach((v,i,m)=>{
			const src=v.flat(Infinity).join('');
			(m[i]=new P((a,b)=>{
				const e=frag.appendChild(d.createElement('script')),r=[i,src,e];
				e.onload=()=>{e.onload=e.onerror=null;a(r)};
				e.onerror=()=>{b(r)};
				e.src=src
			})).then(handle)
		});
		if(async){for(const e of frag.children){e.async=true}};
		d.head.append(frag);
		return deps
	};
	return []
};
