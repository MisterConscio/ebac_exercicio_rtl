import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('textarea-field'), {
            target: {
                value: 'Comentário 1',
            }
        });
        fireEvent.click(screen.getByTestId('btn-add-comentario'));

        fireEvent.change(screen.getByTestId('textarea-field'), {
            target: {
                value: 'Iaê meu brother',
            }
        });
        fireEvent.click(screen.getByTestId('btn-add-comentario'));

        expect(screen.getAllByTestId('comentario-content')).toHaveLength(2);
    })
});
