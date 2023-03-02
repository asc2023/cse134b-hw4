let posts = [];
var editing = -1;

export const createPost = ({title, date, summary}) =>{
    posts.push({title,date,summary});
    renderPost();
};

export const updatePost = (index,newPost) =>{
    console.log(typeof(index));
    posts[index] = newPost;
    renderPost();
    editing = -1;
}
export const deletePost = index => {
    posts.splice(index, 1);
    renderPost();
  };

export const showDialog = ()=>
{
window.dialog.show();
}

export const hideDialog = () =>
{
window.dialog.close();
}


export const initiateEventListeners = ()=>
{
    document.querySelector("#create-btn").addEventListener('click',()=>{
        createSetup();
        showDialog();
    })
    document.querySelector("#cancel-btn").addEventListener('click',()=>{
        hideDialog();
    })
    document.querySelector("#confirm-btn").addEventListener('click',()=>{
        myCreateParsingFunction();
    })
    
}

export const renderPost = ()=>{
    const myContent= document.querySelector("#post-container")
    const showInHtml = (element) =>
    {
        return `
            <div class ="post">
                <div class="title-container"> 
                    <h1>${element.title}</h1>
                </div>
                
                <div class="date-container">
                    <time datetime="${element.date}">${element.date}</time>
                </div>
                
                <div class="summary-container"> 
                    <p>${element.summary}</p>
                 </div>
                <div class="btn-section" style="display:flex;flex-direction:row;">
                    
                    <button class="edit-btn"><img src="../assets/images/edit.png" alt="edit"></img></button>
                    <button class="delete-btn"><img src="../assets/images/x.png" alt="edit"></img></button>
                </div>
            </div>
        `
    };
    myContent.innerHTML = "";
    for (let post of posts) {
        myContent.innerHTML += showInHtml(post);
    }
    newButtonListeners();
}
export const newButtonListeners = () =>{
    const editButtons = document.querySelectorAll(".edit-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");
    //console.log(editButtons);
    for (let [index, btn] of editButtons.entries()){
        //console.log(btn);
        btn.addEventListener("click",()=>{
            editing = index;
            editSetup(index);
            showDialog();
        }
            
        );
        //console.log("done");
        //console.log("hello");
    };
    for (let [index, btn] of deleteButtons.entries()){
        //console.log(btn);
        btn.addEventListener("click",()=>{deletePost(index);renderPost();}
        );
    };
}

export function myCreateParsingFunction()
{
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let summary = document.getElementById("summary").value;
    console.log(editing);
    console.log(title);
    if(title=="")
    {
        alert("Title is Required");
    }
    else if(date=="")
    {
        alert("Date is Required");
    }
    else if(summary=="")
    {
        alert("Summary is Required");
    }
    else{
        if(editing == -1)
        {
            createPost({title,date,summary});
            //console.log(dataArray);
            console.log(posts);
        }
        else{
            const newPost = {title,date,summary};
            updatePost(editing,newPost);
            console.log(posts);
        }
        renderPost();
        hideDialog();
    }
    
    
    
}
export function editSetup(index)
{
    //console.log(posts);
    let title = document.getElementById("title");
    let date = document.getElementById("date");
    let summary = document.getElementById("summary");
    title.value = posts[index].title;
    date.value = posts[index].date;
    summary.value = posts[index].summary;
}
export function createSetup(index)
{
    //console.log(posts);
    let title = document.getElementById("title");
    let date = document.getElementById("date");
    let summary = document.getElementById("summary");
    title.value = "";
    date.value = "";
    summary.value = "";
}
initiateEventListeners();