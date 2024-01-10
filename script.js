const arr=[1, 2, 3 ,4];
const out= document.getElementById('output');

 const promi= new Promise((resolve, reject)=>{
        setTimeout(()=>{

          const odd= arr.filter((item)=>{
            if(item % 2 == 0){
              return item;
            }
        })
	     out.innerHtml=odd;
        }, 1000)

        setTimeout(()=>{
          const even= arr.filter((item)=>{
            if(item%2 !=0){
              return item
            }
          })
         out.innerHtml=even;
          resolve()
          console.log(promi)
        }, 3000)
    })