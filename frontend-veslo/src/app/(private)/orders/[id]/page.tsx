export default function OrderPage({ params } : { params : { id: string }}) {
    return <main className="space-y-6 py-14 container  max-w-[600px]">
                <div>
                    <h1>Заявка № {params.id}</h1>
                </div>
            </main>
}
