import { InputHTMLAttributes } from "react";
import { Box, Tooltip } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import createTheme, { CreateThemeOptions } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import { json } from "@codemirror/lang-json";

import "./codeEditorStyles.css";
import { InfoIcon } from "@chakra-ui/icons";
interface ICodeEditorProps extends InputHTMLAttributes<HTMLInputElement> {
  language: string;
  tooltip?: string;
  readonly?: boolean;
}

export function CodeEditor(props: ICodeEditorProps) {
  const { tooltip, language, readOnly, ...otherProps } = props;
  const extensions = [];

  if (language === "json") {
    extensions.push(json());
  }

  return (
    <Box position="relative">
      <CodeMirror
        maxHeight="210px"
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          indentOnInput: false,
          autocompletion: false,
        }}
        readOnly={readOnly}
        editable={!readOnly}
        style={{ fontSize: "14px" }}
        theme={xcodeLight}
        extensions={extensions}
        {...(otherProps as any)}
      />
      {tooltip && (
        <Box position="absolute" top="3px" right="9px">
          <Tooltip label={tooltip} aria-label={tooltip}>
            <InfoIcon w="14px" h="14px" />
          </Tooltip>
        </Box>
      )}
    </Box>
  );
}

const defaultSettingsXcodeLight: CreateThemeOptions["settings"] = {
  background: "#EDF2F7",
  foreground: "#3D3D3D",
  selection: "#BBDFFF",
  selectionMatch: "#BBDFFF",
  gutterBackground: "#fff",
  gutterForeground: "#AFAFAF",
  lineHighlight: "#EDF4FF",
  fontFamily:
    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
};

function xcodeLightInit(options?: Partial<CreateThemeOptions>) {
  const { theme = "light", settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsXcodeLight,
      ...settings,
    },
    styles: [
      { tag: [t.comment, t.quote], color: "#707F8D" },
      { tag: [t.typeName, t.typeOperator], color: "#aa0d91" },
      { tag: [t.keyword], color: "#aa0d91", fontWeight: "bold" },
      { tag: [t.string, t.meta], color: "#D23423" },
      { tag: [t.name], color: "#032f62" },
      { tag: [t.typeName], color: "#522BB2" },
      { tag: [t.variableName], color: "#23575C" },
      { tag: [t.definition(t.variableName)], color: "#327A9E" },
      { tag: [t.regexp, t.link], color: "#0e0eff" },
      ...styles,
    ],
  });
}

const xcodeLight = xcodeLightInit();
