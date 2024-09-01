let tasks=[];


const newtask=document.querySelector("#newTask");

const addTask=()=>{
    const taskinput=document.querySelector("#taskinput");
    const text=taskinput.value.trim();
    if(text){
        tasks.push({text:text,completed:false});  
        taskinput.value="";
        updateTasklist();
        updatestats() 
    }  
};
const Toggletestcomplete=(index)=>{
    tasks[index].completed=!tasks[index].completed;
    updateTasklist();
    updatestats()
}
const delettask=(index)=>{
    tasks.splice(index,1);
    updateTasklist();
    updatestats()
}
const edittask=(index)=>{
    const taskinput=document.getElementById("taskinput");
    taskinput.value=tasks[index].text;
    tasks.splice(index,1);
    updateTasklist();
    updatestats()
}

const updatestats=()=>{
    const completedTasks=tasks.filter(task=>task.completed).length;
    const totalTasks=tasks.length
    const progress=(completedTasks/totalTasks)*100
    const progressBar=document.getElementById("progress");
    progressBar.style.width=`${progress}%`;
    document.getElementById("number").innerText=`${completedTasks}/${totalTasks}`;
    if(tasks.length && completedTasks===totalTasks){
blastjs();
    }
}


const updateTasklist=()=>{
   const tasklist=document.querySelector(".tasklist");
    tasklist.innerHTML="";

    tasks.forEach((task,index)=>{
        const listitem=document.createElement("li");
        listitem.innerHTML=`
        <div class="taskitem w-[420px] text-2xl pl-4 pt-2 text-center  pr-4 mt-4 flex justify-between boder-8 bg-purple-950 rounded-full align-middle">
            <div class="task gap-2 ml-2 flex ${task.completed ? "completed":""}">
                <input type="checkbox" class="" ${task.completed ? "checked":""}/>
                <p class="text-red-100">${task.text}</p>
            </div>
            <div class="icon">
                <i class="ri-edit-2-fill text-blue-600 cursor-pointer" onclick="edittask(${index})"></i>
                <i class="ri-delete-bin-3-fill text-blue-700 cursor-pointer" onclick="delettask(${index})"></i>

            </div>
        </div>`;
listitem.addEventListener("change",(task)=>Toggletestcomplete(index))
        tasklist.appendChild(listitem);
            
    })
   
}

newtask.addEventListener("click",(e)=>{
    e.preventDefault();
    addTask();
})


const blastjs=()=>{const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });
  
    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🦄", "🌈"],
        },
      },
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}


