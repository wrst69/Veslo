import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";
import { Message } from "./_ui/message";

export function AppHeader({ variant }: { variant: 'auth' | 'private' | 'public' }) {
    const isProfile = variant !== 'auth';

    return <Layout
                nav={isProfile && <MainNav/>}
                profile={ isProfile && <Profile/>}
                messages={ isProfile && <Message/>}
                actions=<ToggleTheme/>
            />   
}
