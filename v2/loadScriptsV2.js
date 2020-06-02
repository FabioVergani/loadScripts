var loadScripts=(deps,opt={})=>{
	if(deps.length){
		const { async=true, onload:handle=null }=opt,
    f=new DocumentFragment(),
		n=Infinity,
		P=Promise,
		d=document,
		m=[],
		g=(e,s)=>{
			const t=v=>'s'!==(typeof v)[0];
			if(t(e)){
				for(const x of e){
					const v=[s,x];
					if(t(x)){
						if(x.length){
							v[1]=x[0];g(x[1],v)
						}else{
							m[m.length]=v
						}
					}else{
						m[m.length]=v
					}
				}
			}else{
				 m[m.length]=e
			}
		};
		g(deps,'');
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
