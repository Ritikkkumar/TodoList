import Todoitem from "./ToDoItem";
import "../App.css";
import list from "../assets/utils/list";
import { useState } from "react";
import { useDeferredValue } from "react";

function Todolist(){

    const [lists,addlists]=useState([]);
    const [id,updateid]=useState(0);
    const [inputValue,updateInputValue]=useState("");
    //console.log("input",inputValue);
    console.log("parentlist",lists);

    function edit(taskid){

        var promtText=prompt("Edit the task");
        console.log("taskid",taskid);
        // var filterValue=lists.filter((el)=>{
        //     return taskid==el.id;
        // })
        // filterValue[0].task=promtText;
        // addlists(lists);

        addlists(lists.map((el)=>{
            if(el.id==taskid)
            {
                el.task=promtText
            }
            return el;
        }))
    }

    function deleteTask(taskid){
        // lists.splice(list.findIndex(x=>x.id==taskid),1);
        // addlists(lists);
        addlists(lists.filter((el)=>{
            if(el.id!=taskid)
            {
                return el;
            }
        }))
    }

    function add(id)
    {
        lists.push({id:id,task:inputValue});
        addlists(lists);
        updateid(id+1);
        //updateInputValue("");
        console.log(lists);
    }
    function input(e)
    {
        updateInputValue(e.target.value);
    }
    return(
        <>
        <div className="listcontainer">
        <div className="listheader">
        <input type="text" id="inputValue" onChange={input} value={inputValue}></input>
        <button className="listbutton" onClick={()=>add(id)}>Add</button>
        </div>
        {
            lists.map((el)=>{
                return(
                    <>
                    <Todoitem task={el.task} id={el.id} edit={edit} taskdelete={deleteTask} key={el.id} ></Todoitem>
                    </>
                )
            })
        }
        </div>
        </>
    )
}

export default Todolist;