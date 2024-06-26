import { OrderId, OrderStatus } from "@/entities/order/_domain/types";
import { useUpdateOrderMutation } from "@/entities/order/_repositories/orders.queries";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import { FileCheck } from "lucide-react";

export function AcceptOrderButton({
  orderId
}: {
  orderId: OrderId
}) {
  const acceptOrderMutation = useUpdateOrderMutation();

  const handleAccept = () => acceptOrderMutation.mutate({id: orderId, status: OrderStatus.Processing});

  return  <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <FileCheck className="h-4 w-4" />
              <span>Принять заявку</span>
            </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Подтверждение</AlertDialogTitle>
                <AlertDialogDescription>
                  Хотите принять заявку?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Отменить</AlertDialogCancel>
                <AlertDialogAction onClick={handleAccept}>Продолжить</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>      
}
