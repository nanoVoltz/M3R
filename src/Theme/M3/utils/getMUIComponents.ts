import { Theme } from "@mui/material";
import {
  getAccordion,
  getAlert,
  getAppBar,
  getBadge,
  getButton,
  getCard,
  getCssBaseline,
  getDivider,
  getFab,
  getListItem,
  getListItemButton,
  getListItemIcon,
  getMenu,
  getMenuItem,
  getSwitch,
  getToggleButton,
  getToggleButtonGroup,
  getTooltip,
  getDialog,
  getCheckbox,
  getSideSheet,
  getAutocomplete,
  getDatePicker,
  getTimePicker,
  getTextField,
  getIcon,
  getList,
  getTable,
} from "../components";
import { getTabs } from "../components/Tabs";
import { getTab } from "../components/Tab";
import { getChip } from "../components/Chip";

type M3Components = { components: Theme["components"] };

export const getMUIComponents = (theme: Theme) => {
  //const { palette } = theme;
  return {
    components: {
      ...getCssBaseline(theme),
      ...getAccordion(theme),
      ...getAlert(theme),
      ...getAppBar(theme),
      ...getBadge(theme),
      ...getButton(theme),
      ...getCard(theme),
      ...getFab(theme),
      ...getList(theme),
      ...getListItem(theme),
      ...getListItemButton(theme),
      ...getListItemIcon(theme),
      ...getMenu(theme),
      ...getMenuItem(theme),
      ...getSwitch(theme),
      ...getToggleButton(theme),
      ...getToggleButtonGroup(theme),
      ...getTooltip(theme),
      ...getDivider(theme),
      ...getDialog(theme),
      ...getCheckbox(theme),
      ...getSideSheet(theme),
      ...getAutocomplete(theme),
      ...getDatePicker(theme),
      ...getTimePicker(theme),
      ...getTextField(theme),
      ...getIcon(theme),
      ...getTable(theme),
      ...getTabs(theme),
      ...getTab(theme),
      ...getChip(theme),
    },
  } as M3Components;
};
