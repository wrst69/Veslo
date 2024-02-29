import { Input } from "@/shared/ui/input";

export default function NodeSearchField({
    onInput
} : {
    onInput: (element: any) => void
}) {
    return <Input className="mt-1 mb-10" type="text" placeholder="Введите адрес" onChange={onInput}/>;
}
