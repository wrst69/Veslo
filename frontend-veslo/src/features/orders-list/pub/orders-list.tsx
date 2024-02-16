import { revalidatePath } from "next/cache";
import { ordersRepository } from "../orders.repository"
import { OrderItem } from "../ui/order-item";

export async function OrdersList({
    revalidatePagePath
} : {
    revalidatePagePath: string
}) {
    const orders = await ordersRepository.getOrdersList();

    const handleDeleteAction = async (orderId: number) => {
        "use server";
        await ordersRepository.deleteOrderElement({id: orderId});

        revalidatePath(revalidatePagePath);
    };

    return <div className="flex flex-col gap-3">{
        orders.map(order => (
            <OrderItem 
                key={order.id}
                order={order} 
                onDelete={handleDeleteAction.bind(null, order.id)}
            />
        ))
    }
    </div>
}