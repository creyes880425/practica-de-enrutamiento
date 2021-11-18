
export const WithStyle = (props) => {
    return (
        <div className="main" style={{ width: '960px', height: '60px', backgroundColor: props.backgroundColor}}>
            <h4 style={{ color: props.fontColor}}>The word is: {props.word} </h4>
        </div>
    )
}
