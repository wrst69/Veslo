'use server';

export async function Layout({
  nav,
  profile,
  notifications,
  actions,
}: {
  nav?: React.ReactNode;
  profile?: React.ReactNode;
  notifications?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  
  return   <header className="sticky top-0 flex h-16 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="m-8 items-center flex-1 flex">
              <div className="">{nav}</div>      
              <div className="flex flex-1 items-center justify-end space-x-3 mr-10">                
                { notifications }
                { actions }
                { profile }
              </div>
            </div>
          </header>
}
