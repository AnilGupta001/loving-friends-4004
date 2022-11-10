

    function myfun(){
   
        let x=document.createElement("div")
        let y=document.createElement("a");
        y.setAttribute("href","index.html")
        y.innerText="Overview"
        let z=document.createElement("a");
        z.setAttribute("href","index.html")
        z.innerText="Features"
        let s=document.createElement("a");
        s.setAttribute("href","index.html")
        s.innerText="Integrations";
        let e=document.createElement("a");
        e.setAttribute("href","index.html");
        e.innerText="Marketplace";
        let d=document.createElement("a");
        d.setAttribute("href","index.html");
        d.innerText="Download Apps";
        let w=document.createElement('a');
        w.setAttribute("href","indexs.html")
        w.innerText="What's new"
        let p=document.createElement("a");
        p.setAttribute("href","index.html");
        p.innerText="Pricing"
        x.append(y,z,s,e,d,w,p);
        x.setAttribute("id","tab")
        
        
        document.querySelector("#nav").append(x)
        }
        

