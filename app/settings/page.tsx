'use client'

import {Box, Divider, Paper, Typography} from "@mui/material";
import {Integration} from "@/types/Integration";
import {SettingsGroup} from "@/app/settings/SettingsGroup/SettingsGroup";
import {Severity} from "@/types/Severity";
import {Addiction} from "@/types/Addiction";
import {SeverityLevel} from "@/types/SeverityLevel";
import {resolveSeverityEffect} from "@/util/resolveSeverityEffect";

const mockIntegrations: Integration[] = [
  {name: "Amazfit GTS 2 Mini", description: "Lorem ipsum dolor sit amet"},
  {name: "Facebook account", description: "Lorem ipsum dolor sit amet"},
  {name: "Instagram account", description: "Lorem ipsum dolor sit amet"},
  {name: "ScreenTime", description: "Lorem ipsum dolor sit amet"},
]

const mockSeverity: Severity[] = [
  {addiction: Addiction.drinking, level: SeverityLevel.medium},
  {addiction: Addiction.music, level: SeverityLevel.low},
  {addiction: Addiction.energyDrinks, level: SeverityLevel.high},
]

const Page: React.FC = () => {
  return(
    <div>
      <Paper elevation={2}>
        <Typography>Integrations</Typography>
        <Divider/>
        <SettingsGroup
          items={mockIntegrations}
          header={item => item.name}
          summary={item => item.description}
        />
      </Paper>

      <Box sx={{p: 2}} />

      <Paper>
        <Typography>Severity</Typography>
        <Divider/>
        <SettingsGroup
          items={mockSeverity}
          header={item => item.addiction}
          summary={item =>
            <>
              <Typography>{resolveSeverityEffect(item.addiction, item.level)}</Typography>
            </>
        }
        />
      </Paper>
      <Paper></Paper>
    </div>
  );
}

export default Page;