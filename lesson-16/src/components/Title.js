

const Title = ({title, subtitle}) => {
  
    return (
        <div>
            <h1 className="title">{title}</h1>
            <br />
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}

export default Title