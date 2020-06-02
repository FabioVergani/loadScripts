var loadScripts=(deps,opt={})=>{
	if(deps.length){
		const { async=true, onload:handle=null }=opt,
		d=document,
		P=Promise,
		n=Infinity,
		m=[];
		let f=(b,c)=>{for(const a of b){if('s'!==(typeof a)[0]){f(a[1],[c,a[0]])}else{m[m.length]=[c,a]}}};
		f(deps);
		f=new DocumentFragment();
		m.forEach((v,i,m)=>{
			const s=v.flat(n).join('');
			(m[i]=new P((a,b)=>{
				const e=f.appendChild(d.createElement('script')),r=[i,s,e];
				e.onload=()=>{e.onload=e.onerror=null;a(r)};
				e.onerror=()=>{b(r)};
				e.src=s
			})).then(handle)
		});
		if(async){for(const e of f.children){e.async=true}};
		d.head.append(f);
		return m
	};
	return []
};
