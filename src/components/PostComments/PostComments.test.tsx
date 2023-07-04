import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.click(screen.getByTestId('btn-add-comentario'))
        fireEvent.click(screen.getByTestId('btn-add-comentario'))

        const comments = screen.getAllByTestId('comentario-content')

        expect(comments.length).toEqual(2);
    })
});
