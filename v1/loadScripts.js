var loadScripts=(deps,opt={})=>{
	if(deps.length){
		const { async=true, onload:handle=null }=opt, frag=new DocumentFragment(), d=document, P=Promise;
		deps.forEach((v,i,m)=>{
			(m[i]=new P(
				(a,b)=>{
					const e=frag.appendChild(d.createElement('script')),r=[i,v,e];
					e.onload=()=>{e.onload=e.onerror=null;a(r)};
					e.onerror=()=>{b(r)};
					e.src=v
				}
			)).then(handle)
		});
		if(async){
			for(const e of frag.children){
				e.async=true
			}
		};
		d.head.append(frag);
		return deps
	};
	return []
};
