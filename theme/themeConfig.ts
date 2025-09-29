import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 17,
    colorPrimary: "#ffffffff",
    colorTextBase: "#ffffffff",
    colorBgBase: "#570614ff",
  },
  components: {
    Menu: {
      itemSelectedColor: "#000000ff",
      colorItemBgSelected: "#ffffffff",
    },
  },
};

export default theme;
