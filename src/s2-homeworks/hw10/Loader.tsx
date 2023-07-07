import s from './Loader.module.css'

export const Loader = () => {
    return (
    <div className={s.loader}>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
            <span className={s.loaderBlock}></span>
        </div>
    )
}
