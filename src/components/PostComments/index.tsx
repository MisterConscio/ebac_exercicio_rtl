import { FormEvent, useState } from 'react';
import { PostComment, PostCommentContent, PostForm, PostTextarea, PostBtn } from './styles'

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <>
            <ul>
                {comments.map(({ comment, id }) => (
                    <PostComment data-testid="comentario-content" key={id}>
                        <PostCommentContent>
                            {comment}
                        </PostCommentContent>
                    </PostComment>
                ))}
            </ul>
            <PostForm onSubmit={handleAddComment}>
                <PostTextarea data-testid="textarea-field" value={tempComment} onChange={e => setTempComment(e.target.value)} required />
                <PostBtn data-testid="btn-add-comentario" type="submit">
                    Comentar
                </PostBtn>
            </PostForm>
        </>
    );
}

export default Post;
