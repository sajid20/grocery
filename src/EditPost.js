import React from 'react';
import { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const { id } = useParams();
    const post = post.find(post => (post.id).toString() === id);
    
  return (
    <div>


    </div>
  )
}

export default EditPost