import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { OrderItem } from './order-item';

describe ('order item', () => {
    it('should call delete callback', async () => {
        const onDelete = jest.fn();

        render(
            <OrderItem 
                order={{
                    id:1,
                    title:'the second',
                    description: 'some description',
                    isClosed: false
                }}
                onDelete={onDelete}
            />)
    
    await userEvent.click(screen.getByText('Удалить'));

    expect(onDelete).toHaveBeenCalled();
    })
})
