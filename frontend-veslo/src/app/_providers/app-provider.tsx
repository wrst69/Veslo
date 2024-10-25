'use client';

import { ThemeProvider } from '@/features/theme/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function AppProvider({ children }: { children: React.ReactNode}) {
    const [client] = useState(new QueryClient());

    return (       
            <ThemeProvider>
                <QueryClientProvider client={client}>
                    {children}
                    {/* <ReactQueryDevtools initialIsOpen={false}/> */}
                </QueryClientProvider>
            </ThemeProvider>    
    )
}
