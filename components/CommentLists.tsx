import React from 'react';
import { IComment } from '@/types/track';
import CommentItem from './Comments';

interface CommentItemProps {
  comments: IComment[];
}

const CommentList: React.FC<CommentItemProps> = ({ comments }) => {
  if (comments.length === 0) return <h3 style={{ marginTop: '20px' }}>Comments not detected</h3>;
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
