import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontFamily: "'Noto Sans Khmer', Geist, sans-serif",
    fontSize: 17,
    colorPrimary: "#ffffffff",
    colorTextBase: "#ffffffff",
    colorBgBase: "#570614ff",
  },
  components: {
    Menu: {
      // itemSelectedColor: "#000000ff",
      itemSelectedBg: "#ffffffff",
    },
  },
};

export default theme;
