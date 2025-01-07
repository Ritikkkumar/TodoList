import { useState } from "react";
import "../App.css";
import list from "../assets/utils/list";
import Todolist from "./ToDoList";

function Todoitem({task,id,edit,taskdelete}){

    const[imgtag,updateimgtag]=useState(false);

    function done(){
        updateimgtag(!imgtag);
    }

    // function edit(){

    //     var promtText=prompt("Edit the task");
    //     var filterValue=list.filter((el)=>{
    //         return props.id==el.id;
    //     })
    //     filterValue[0].task=promtText;
    //     updateEditText(promtText);
    // }

    // function deleteTask(){
    //     list.splice(list.findIndex(x=>x.id==props.id),1);
    //     console.log("list",list);
    //     props.up("");
    //     console.log("done");
    // }
    if(imgtag)
    {
        return(
            <>
            <div className="itemcontainer">
                <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/6658c9a0-743b-4370-c624-84fe82bd4a00/public" height="50px" width="50px"></img>
                <h1 className="tasktext">{task}</h1>
                <button className="itembutton" onClick={()=>edit(id)}>Edit</button>
                <button className="itembutton" onClick={()=>taskdelete(id)}>Delete</button>
                <button className="itembutton" onClick={done}>Undone</button>
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div className="itemcontainer">
                <h1 className="tasktext">{task}</h1>
                <button className="itembutton" onClick={()=>edit(id)}>Edit</button>
                <button className="itembutton" onClick={()=>taskdelete(id)}>Delete</button>
                <button className="itembutton" onClick={done}>Done</button>
            </div>
            </>
        )
    }
}

export default Todoitem;