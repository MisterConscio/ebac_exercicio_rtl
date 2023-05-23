import { PostContainer, PostImg, PostText } from './styles'

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <PostContainer>
        <PostImg src={imageUrl} />
        <PostText> {children} </PostText>
        <PostComments />
    </PostContainer>
);

export default Post;
