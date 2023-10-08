import "./style.css"


const TodoFooter =({handleDeleteAllTask})=>{
    return(
        <div className="footer_todo">
            <button type="button" onClick={handleDeleteAllTask} className="footer_button-delete">delete all</button>
        </div>
    )
}
export default TodoFooter