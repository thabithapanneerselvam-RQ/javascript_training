
            const btn=document.getElementById("load");
            const userlist=document.getElementById("list");

            async function fetchingData(){
                try{
                    let fetchedData=await fetch("../assets/file.txt")
                    if(!fetchedData.ok){
                        throw new Error('network error')
                    }
                    const textData=await fetchedData.text()
                    console.log(textData)
                    document.getElementById("para").innerHTML=textData;
                }catch(error){
                    console.error(error)
                    document.getElementById("para").innerHTML="ERROR OCCURED"
                }  
            }

            async function postData(){
                try{
                    const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        title: "hello",
                        body: "fetch api POST",
                        userId: 1
                    })
                })
                const result=await response.json();
                console.log(result);
                }catch(error){
                    console.log(error)
                }
            }

            btn.addEventListener("click",async()=>{
                try{
                    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
                    const users=await response.json();
                    userlist.innerHTML="";

                    const tot=document.createElement("li");
                    tot.innerHTML=`<h3>total no of posts:${users.length}</h3>`;
                    userlist.appendChild(tot)

                    users.forEach(user => {
                        const li=document.createElement("li");
                        li.textContent=user.title;
                        userlist.appendChild(li)
                    });

                    
                
                }catch(error){
                    console.error("error in loading user list")
                }
            })