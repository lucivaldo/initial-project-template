import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { theme } from "@/config/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { AppQueryClientProvider } from './AppQueryClientProvider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <AppQueryClientProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </AppQueryClientProvider>
    </AppRouterCacheProvider>
  )
}