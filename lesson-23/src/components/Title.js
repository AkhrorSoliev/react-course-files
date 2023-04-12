import './Title.css'

const Title = ({title, subtitle}) => {
    return (
        <div className='title-block'>
            <h1 className="title">{title}</h1>
            <br />
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}

export default Title