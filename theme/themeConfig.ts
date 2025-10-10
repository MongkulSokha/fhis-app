import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontFamily: "'Noto Sans Khmer', Geist, sans-serif",
    fontSize: 17,
    colorPrimary: "#691b32",
    colorTextBase: "#ffffffff",
    colorBgBase: "#691b32",
  },
  components: {
    Menu: {
      // itemSelectedColor: "#000000ff",
      itemSelectedBg: "#ffffffff",
    },
  },
};

export default theme;
