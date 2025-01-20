import style from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={style.footerWrap}>
      <div className={style.сontainer}>
        <div className={style.contentWrap}>
          <div className={style.blogfolio}>@2024 Blogfolio</div>
          <div className={style.footerText}>All rights reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
