import './text-input.styles.scss';

const TextInput = ({children, ...otherprops}) => {
  return (
    <input
      type='text'
      className='text-input'
      {...otherprops}
    />
  )
}
export default TextInput;