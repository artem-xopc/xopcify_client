import { IComment } from '@/types/track';
import React from 'react';

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <section>
      <div>{comment.username}</div>
      <div>{comment.text}</div>
    </section>
  );
};

export default CommentItem;
