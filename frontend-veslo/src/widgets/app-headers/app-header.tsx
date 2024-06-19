import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { MainNav } from "./_ui/navigation/main-nav";
import { Profile } from "./_ui/profile/profile";
import { Notification } from "./_ui/notifications/notifications";

export function AppHeader({ variant }: { variant: 'auth' | 'private' | 'public' }) {
    const isProfile = variant !== 'auth';

    return <Layout
                nav={isProfile && <MainNav/>}
                profile={ isProfile && <Profile/>}
                notifications={ isProfile && <Notification/>}
                actions=<ToggleTheme/>
            />   
}
