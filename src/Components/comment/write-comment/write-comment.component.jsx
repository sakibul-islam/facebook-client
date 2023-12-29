import { useState } from 'react';
import CurrentUsersProfilePic from '../../current-user/current-users-profile-pic/current-users-profile-pic.component';
import HoverButton from '../../hoverButton/hover-button.component';
import { SendIcon } from '../../icons/icons';
import './write-comment.styles.scss';

const WriteComment = () => {
  const [rows, setRows] = useState(1);

  function onChange({ target: { value } }) {
    const lines = value.split("\n").length;
    setRows(lines);
  }

  return (
    <div className='write-comment'>
      <CurrentUsersProfilePic />
      <div className='input'>
        <textarea rows={rows} onChange={onChange} type='text' placeholder='Write a comment...' />
        <div className='send-button'>
          <HoverButton>
            <SendIcon />
          </HoverButton>
        </div>
      </div>
    </div>
  );
};

export default WriteComment;