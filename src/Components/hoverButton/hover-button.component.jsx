import './hover-button.styles.scss';

const HoverButton = ({children, tooltip}) => {
  return (
    <div className='hover-button'>
      {children}
      {tooltip ? <div className='tooltip'>{tooltip}</div> : null}
    </div>
  )
}

export default HoverButton;