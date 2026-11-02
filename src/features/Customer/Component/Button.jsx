const defaultStyle = {
  width: 'calc(100% - 20px)',
  height: '50px',
  margin: '20px auto 0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '999px',
  border: 'none',
  background: 'var(--redBrown)',
  color: 'var(--white)',
  textDecoration: 'none'
}

function Button({style, onClick, text, iconSrc, iconStyle}){
  
  return(
    <button style={{...defaultStyle, ...style}} onClick={onClick}>
      {text}
      {iconSrc && <img src={iconSrc} alt="" style={iconStyle}/>}
    </button>
  )
}
export default Button