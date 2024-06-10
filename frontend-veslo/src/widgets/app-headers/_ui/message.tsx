'use client';

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Mail } from 'lucide-react';
import { Badge, ThemeProvider, createTheme } from '@mui/material';
import Link from "next/link";

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000'
    }
  }
});

export function Message() {
  const data: string[] = ['1', '2', '3'];
  //const data: string[] = [];

  return  <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
              variant="ghost"
              className="p-px rounded-full self-center h-8 w-8"
              > 
                <ThemeProvider theme={theme}>
                  <Badge badgeContent={data?.length} className="text-red" color="secondary">
                    <Mail/>
                  </Badge>
                </ThemeProvider>
              </Button>             
            </DropdownMenuTrigger>
            { data.length > 0 &&  <DropdownMenuContent className="w-56 mr-2 ">
                                    <DropdownMenuGroup>
                                      <DropdownMenuItem asChild>
                                        <Link href={`/profile`}>
                                          
                                          <span>Message 1</span>
                                        </Link>
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        
                                        <span>Message 2</span>
                                      </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                  </DropdownMenuContent>
            }
          </DropdownMenu>
}
