import IconContainer from "../top-nav/icon-container/icon-container.component";
import './item-container.styles.scss';

const ItemContainer = ({iconSrc, children, itemName, extra, onClick}) => (
  <div className='item' onClick={onClick}>
    <IconContainer>
    {
      iconSrc 
      ? <img src={iconSrc} className='icon' alt='' /> 
      : children
    }
    </IconContainer>
    <div className='others'>
      <div className='item-name'>{itemName}</div>
      {
        extra ? <div className='extra'>{extra}</div> : null
      }
    </div>
  </div>
);

export default ItemContainer;