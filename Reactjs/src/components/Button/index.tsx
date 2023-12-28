import React from 'react'
import styles from './button.module.css'
// import { IconName } from "react-icons/fa";

type TButton = {
  icon?: React.ReactNode,
  label:string,
  bg_color?: string
}

//Button nhận vào một tham số có tên mặc định trong React là props ==> nó là một object
function Button({icon, label, bg_color}: TButton) {
    return (
      // <div>
        <button className={styles.btn} style={{backgroundColor: bg_color}} type='button'>{icon} {label}</button> 
      // </div>
      
    )
}

  // Kiểu như là đặt giá trị dự phòng, nếu ko truyền thì nó lấy giá trị mặc định hiển thị.
Button.defaultProps = {
    label: "Button Label",
    color: "#fff",
    bgColor: "#ff6700" 
}

export default Button;