import { createTheme } from "@material-ui/core"

const customTheme = createTheme({
	palette: {
		primary: {
			light: "",
			main: "#64EEBC",
			dark: "",
			contrastText: ""
		},
    secondary: {
			light: "",
			main: "#242424",
			dark: "",
			contrastText: ""
		},
		text: {
			primary: "#FFFFFF",
			secondary: "#242424",
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)"
		},
		background: {
			default: "#242424"
		},
	},
	typography: {
		fontFamily: [
			'"Bebas Neue"',
			'Helvetica', 
			'Arial',
			'sans-serif',
		].join(','),
		h1: {
			fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif",
			letterSpacing: 16,
		},
		h2: {
			fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif"
		},
		h3: {
			fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif"
		},
		h4: {
			fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif"
		},
		h5: {
			fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif"
		},
		h6: {
			fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif",
			fontSize: 20,
		},
    body1: {
      fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif",
			fontSize: 18,
    },
    body2: {
			fontFamily: "'Bebas Neue','Helvetica','Arial',sans-serif",
    }
  }
})

export default customTheme