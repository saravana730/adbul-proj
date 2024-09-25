import { Box, Button, FormGroup, H2, H5, Illustration, Input, Label, MessageBox, Text, } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'adminjs';
const Wrapper = styled(Box) `
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
const StyledLogo = styled.img `
  max-width: 200px;
  margin: ${({ theme }) => theme.space.md} 0;
`;
const IllustrationsWrapper = styled(Box) `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & svg [stroke='#3B3552'] {
    stroke: rgba(255, 255, 255, 0.5);
  }
  & svg [fill='#3040D6'] {
    fill: rgba(255, 255, 255, 1);
  }
`;
const Login = (props) => {
    const { action, message } = props;
    const { translateComponent, translateMessage } = useTranslation();
    const branding = useSelector((state) => state.branding);
    return (React.createElement(Wrapper, { flex: true, variant: "grey", className: "login__Wrapper" },
        React.createElement(Box, { bg: "white", height: "440px", flex: true, boxShadow: "login", width: [1, 2 / 3, 'auto'] },
            React.createElement(Box, { bg: "primary100", color: "white", p: "x3", width: "380px", flexGrow: 0, display: ['none', 'none', 'block'], position: "relative" },
                React.createElement(H2, { fontWeight: "lighter" }, "Welcome"),
                React.createElement(Text, { fontWeight: "lighter", mt: "default" }, "Admin"),
                React.createElement(IllustrationsWrapper, { p: "xxl" },
                    React.createElement(Box, { display: "inline", mr: "default" },
                        React.createElement(Illustration, { variant: "Planet", width: 82, height: 91 })),
                    React.createElement(Box, { display: "inline" },
                        React.createElement(Illustration, { variant: "Astronaut", width: 82, height: 91 })),
                    React.createElement(Box, { display: "inline", position: "relative", top: "-20px" },
                        React.createElement(Illustration, { variant: "FlagInCog", width: 82, height: 91 })))),
            React.createElement(Box, { as: "form", action: action, method: "POST", p: "x3", flexGrow: 1, width: ['100%', '100%', '480px'] },
                React.createElement(H5, { marginBottom: "xxl" }, branding.logo ? (React.createElement(StyledLogo, { src: branding.logo, alt: branding.companyName })) : (branding.companyName)),
                message && (React.createElement(MessageBox, { my: "lg", message: message.split(' ').length > 1 ? message : translateMessage(message), variant: "danger" })),
                React.createElement(FormGroup, null,
                    React.createElement(Label, { required: true }, translateComponent('Login.properties.email')),
                    React.createElement(Input, { name: "email", placeholder: translateComponent('Login.properties.email') })),
                React.createElement(FormGroup, null,
                    React.createElement(Label, { required: true }, translateComponent('Login.properties.password')),
                    React.createElement(Input, { type: "password", name: "password", placeholder: translateComponent('Login.properties.password'), autoComplete: "new-password" })),
                React.createElement(Text, { mt: "xl", textAlign: "center" },
                    React.createElement(Button, { variant: "contained", color: "success" }, "Login")))),
        branding.withMadeWithLove ? React.createElement(Box, { mt: "xxl" }) : null));
};
export default Login;
