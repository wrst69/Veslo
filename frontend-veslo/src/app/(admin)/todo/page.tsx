'use server';

export default async function ToDoPage({
  searchParams
}: {
  searchParams?: {  
                    query?: string, 
                    page?: string 
                  }
}) {
  return  <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl">My Todo List</h1>
            </div>
            <div className="mt-4 flex flex-col justify-between gap-2 md:mt-8">
              <div>Пагинация таблицы ордеров</div>
              <div>В модели Order БД добавить адресата (recipient) и привязать заявки к конкретному юзеру</div>
              <div>При нажатии "посмотреть все" в окне уведомлений, само окно должно закрываться</div>
              <div>Пользователь должен удалять и редактировать только созданные им заявки</div>
              <div>Проверить редирект на auth/auth/sign-in (откуда прилетает второй auth)</div>
              <div>Настроить CI/CD</div>
              <div>Накинуть дебаунс на поле поиска</div>
              <div>Добавить тостеры на события удаления ордера, апдейта и т.д.</div> 
              <div>Валидация на форму логина</div>
              <div>Освоить React Context и добавить в order-work-place</div>   
              <div>Оптимизировать данные отдаваемые бэкендом</div>
              <div>Отрефакторить staleTime в tanstack queries </div>
              <div>Типизировать код фронта, сбилдить и добавить в докер образ</div>
              <div>Реализовать лоадинги через добавление в папку роута файла loading.ts и то же самое для ошибок, и нот фаунд</div>
            </div>
          </div>          
}
