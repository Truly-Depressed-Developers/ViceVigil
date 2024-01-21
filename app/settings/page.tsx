'use client'

import {Box, Divider, Paper, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {Integration} from "@/types/Integration";
import {SettingsGroup} from "@/app/settings/SettingsGroup/SettingsGroup";
import {Severity} from "@/types/Severity";
import {Addiction} from "@/types/Addiction";
import {SeverityLevel} from "@/types/SeverityLevel";
import {resolveSeverityEffect} from "@/util/resolveSeverityEffect";
import Button from "@mui/material/Button";

const mockIntegrations: Integration[] = [
  {name: "Amazfit GTS 2 Mini", description: "Tracks movement, heartbeat, pressure; detects drunkenness and addiction related to physical activity"},
  {name: "Facebook account", description: "Tracks usage of social media (both passive and active) and addictions associated with them"},
  {name: "Instagram account", description: "Tracks usage of social media (both passive and active) and addictions associated with them"},
  {name: "ScreenTime", description: "Tracks usage of apps on your phone and addictions associated with them"},
]

const mockSeverity: Severity[] = [
  {addiction: Addiction.drinking, level: SeverityLevel.low},
  {addiction: Addiction.doomScrolling, level: SeverityLevel.medium},
  {addiction: Addiction.energyDrinks, level: SeverityLevel.none},
]

const Page: React.FC = () => {
  return(
    <div>
      <Paper elevation={2}>
        <Box
          sx={{paddingX: 2, paddingY: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center"}}
        >
          <Typography>Integrations</Typography>
          <Button>Add new</Button>
        </Box>
        <Divider/>
        <SettingsGroup
          items={mockIntegrations}
          header={item => item.name}
          summary={item => item.description}
        />
      </Paper>

      <Box sx={{p: 2}} />

      <Paper elevation={2}>
        <Box
          sx={{paddingX: 2, paddingY: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center"}}
        >
          <Typography>Sensitivity</Typography>
        </Box>
        <Divider/>
        <SettingsGroup
          items={mockSeverity}
          header={item => item.addiction}
          summary={item =>
            <>
              <ToggleButtonGroup fullWidth color="primary" value={item.level}>
                <ToggleButton value={"none"}>None</ToggleButton>
                <ToggleButton value={"low"}>Low</ToggleButton>
                <ToggleButton value={"medium"}>Medium</ToggleButton>
                <ToggleButton value={"high"}>High</ToggleButton>
              </ToggleButtonGroup>

              <Box sx={{p: 1}} />

              <Typography sx={{color: "#bbb"}}>{resolveSeverityEffect(item.addiction, item.level)}</Typography>
            </>
        }
        />
      </Paper>
      <Paper></Paper>
    </div>
  );
}

export default Page;