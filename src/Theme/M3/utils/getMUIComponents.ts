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
  getDrawer,
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
  getTextField,
  getIcon,
  getList,
  getTable,
} from "../components";

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
      ...getDrawer(theme),
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
      ...getTextField(theme),
      ...getIcon(theme),
      ...getTable(theme),
    },
  } as M3Components;
};
