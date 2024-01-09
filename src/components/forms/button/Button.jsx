function Button({title, handler,color}){
    return(
        <button style={{backgroundColor: color, color:"white"}} onClick={handler}>{title}</button>
    )
}
export default Button;