import style from '../page.module.scss'

const Spinner = ({what}: {what: string}) => {
    return (
    <div className={style.loading}>
        <ul className={style.list} id='loading'>
            <li className={style.item}></li>
            <li className={style.item}></li>
            <li className={style.item}></li>
            <li className={style.item}></li>
            <li className={style.item}></li>
            <li className={style.item}></li>
            <li className={style.item}></li>
            <li className={style.item}></li>
            <li className={style.item}></li>
        </ul>
        <p className={style.text}>Loading {what}</p>
    </div>
    )
}

export default Spinner