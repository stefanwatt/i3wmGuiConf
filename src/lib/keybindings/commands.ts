import LaunchAppCommand from "./command/launchAppCommand.svelte"
import SwitchToWorkspaceCommand from "./command/switchToWorkspaceCommand.svelte"

export type Command = {
  title:string;
  component:any;
}
export const commands:Command[] = [
  {title:"launch application",component:LaunchAppCommand},
  {title:"Switch to workspace",component:SwitchToWorkspaceCommand}
]
