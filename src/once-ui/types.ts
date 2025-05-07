export type StaticSpacingToken =
  | "0"
  | "1"
  | "2"
  | "4"
  | "8"
  | "12"
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "56"
  | "64"
  | "80"
  | "104"
  | "128"
  | "160";

export type Schemes =
  | "blue"
  | "indigo"
  | "violet"
  | "magenta"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "moss"
  | "green"
  | "emerald"
  | "aqua"
  | "cyan";

export type TShirtSizes = "xs" | "s" | "m" | "l" | "xl";

export type ResponsiveSpacingToken = TShirtSizes;

export type ShadowSize = TShirtSizes;

export type SpacingToken = StaticSpacingToken | ResponsiveSpacingToken;

export type opacity = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export type ColorScheme =
  | "neutral"
  | "brand"
  | "accent"
  | "info"
  | "danger"
  | "warning"
  | "success";

export type ColorCategory = "on-solid" | "on-background";

export type ColorWeight = "weak" | "medium" | "strong";

export type RadiusSize = TShirtSizes | "full";

export type RadiusNest = "4" | "8";

export type TextType = "body" | "heading" | "display" | "label" | "code" | "title" | "overline";

export type TextWeight = "default" | "strong" | "bold" | "regular" | "medium" | "light";

export type TextSize = TShirtSizes | "l" | "m" | "s";

export type TextVariant = `${TextType}-${TextWeight}-${TextSize}` | "display" | "title-l" | "title-m" | "title-s" | "body-l" | "body-m" | "body-s" | "overline";

export type gridColumns =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type flex =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
