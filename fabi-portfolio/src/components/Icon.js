function Icon ({url, target, iconClass }) {
    return(
        <div className="p-2"><a href={url} target={target} rel="noreferrer"><i className={iconClass}></i></a></div>
        // <div className="p-2"><a href="https://github.com/fabicf" target="_blank"><i className={iconClass}></i></a></div>
        // <div className="icons d-flex">
        //     <div class="p-2"><a href="https://www.linkedin.com/in/ffabiola/ " target="_blank"><i
        //                 class="fab fa-linkedin-in"></i></a>
        //     </div>
        //     <div class="p-2"><a href="mailto:fabiolacezarfaria@gmail.com" target="_blank"><i
        //                 class="far fa-envelope"></i></a></div>
        //     <div class="p-2"><a href="https://github.com/fabicf" target="_blank"><i class="fab fa-github"></i></a></div>
            

        // </div>
    )

    
}
export default Icon;
