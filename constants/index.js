import { LogBox } from "react-native";
import constants from "./constants";
import theme, { COLORS, SIZES, FONTS } from "./theme";
import images from "./images";
import icons from "./icons";
import dummyData from "./dummyData";

LogBox.ignoreLogs(['Require cycle:']);

export {
    constants,
    theme,
    COLORS,
    SIZES,
    FONTS,
    images,
    icons,
    dummyData,
}

