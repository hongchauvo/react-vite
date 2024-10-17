const TodoData = (props) => {
    const { age, name, data } = props;
    return (
        <div className="todo-data">
            <div>Sở thích</div>
            <div>Xem youtube</div>
            <div>my name is {name}</div>
        </div>
    )

}
export default TodoData;