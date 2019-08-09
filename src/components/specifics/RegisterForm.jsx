import React, { Component } from "react";
import Notification from "../generics/Notification";
import Recaptcha from "react-google-invisible-recaptcha";
import Spinner from "../generics/Spinner";

//Import Grommet components
import {
  Box,
  Button,
  Layer,
  Form,
  FormField,
  Heading,
  ResponsiveContext,
  Select,
  TextInput,
  TextArea
} from "grommet";

//Import Grommet icons
import { Close } from "grommet-icons";

//Import publisher-subscriber and requester
// import PubSub from "services/pubSub.js";
import requester from "../../services/requester.js";

const initialInputs = {
  name: "",
  email: "",
  phone: ""
};

export default class RegisterForm extends Component {
  state = {
    form: { ...initialInputs },
    errors: { ...initialInputs },
    trigger: false,
    showNotification: false,
    showSpinner: false
  };

  onChangeSelect = (key, value) => {
    let { form, trigger } = this.state;
    form[key] = value;
    this.setState({ ...form });
    if (trigger) this.requireFields();
  };

  onChange = e => {
    let { form, trigger } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ ...form });

    if (trigger) this.requireFields();
  };

  onSubmit = size => {
    this.setState({ trigger: true });
    this.requireFields();

    if (this.isErrorsEmpty()) {
      this.setState({ showSpinner: true });
      this.recaptcha.execute();
      // if (size === "xsmall" || size === "small")
        // PubSub.getInstance().emit("onVisibilityChange");
    }
  };

  onVerifyRecaptcha = token => {
    let { form } = this.state;
    requester
      .post("/addTransfersYaInterestings", { ...form, token: token })
      .then(() => {
        this.clearForm();
        this.setState({ showSpinner: false });
        this.setState({ showNotification: true });
        setTimeout(() => this.setState({ showNotification: false }), 4000);
      })
      .then(() => this.recaptcha.reset())
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  requireFields = () => {
    let { form, errors } = this.state;
    for (const key in form) {
      if (!form[key]) {
        errors[key] = "require";
        this.setState({ ...errors });
      } else {
        errors[key] = "";
        this.setState({ ...errors });
      }
    }
  };

  clearForm = () => {
    let { form } = this.state;
    for (const key in form) {
      form[key] = "";
      this.setState({ ...form });
    }
    this.setState({ trigger: false });
  };

  isErrorsEmpty = () => {
    let { errors } = this.state;
    for (var key in errors) {
      if (errors[key] === "require") return false;
    }
    return true;
  };

  renderInput = (id, name, label, textArea, placeHolder) => {
    return (
      <FormField htmlFor={id} label={label} name={name}>
        {textArea ? (
          <TextArea
            id={id}
            name={name}
            placeholder={placeHolder}
            value={this.state.form[name]}
            onChange={e => this.onChange(e)}
          />
        ) : (
          <TextInput
            id={id}
            name={name}
            placeholder={placeHolder}
            value={this.state.form[name]}
            onChange={e => this.onChange(e)}
          />
        )}
      </FormField>
    );
  };

  renderSelectInput = (id, name, label, options) => {
    return (
      <FormField
        htmlFor={id}
        label={label}
        name={name}
        style={{ borderBottom: "none" }}
      >
        <Select
          id={id}
          name={name}
          multiple={false}
          options={options}
          value={this.state.form[name]}
          focusIndicator={false}
          onChange={({ option }) => this.onChangeSelect(name, option)}
        />
      </FormField>
    );
  };

  getLayerPosition = size => {
    return "center";
  };

  getFormWidth = size => {
    if (size === "xsmall" || size === "small") return "xlarge";
    return "medium";
  };

  getFormHeight = size => {
    if (size === "xsmall" || size === "small") return "410px";
    return "510px";
  };

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => {
          return (
            <Box
              flex={true}
              direction="row"
              justify="center"
              width="100%"
              height="100%"
              pad="medium"
            >
              <Box>
                <Box style={{ padding: "10px 25px 0px" }}>
                  <Heading level="2" color="dark-2" size={size}>
                    <span
                      className="title-underlined"
                      style={{
                        backgroundSize: "100% 0.25em",
                        backgroundPosition: "0 95%"
                      }}
                    >
                      ¡Bienvenido a Transferencias YA!
                    </span>
                  </Heading>
                </Box>

                {this.props.visibility && (
                  <Box
                    width={() => this.getFormWidth(size)}
                    overflow="auto"
                    height="470px"
                  >
                    <Form
                      onSubmit={() => this.onSubmit(size)}
                      errors={this.state.errors}
                      value={this.state.form}
                      height="auto"
                    >
                      <Box flex="grow" pad={{ vertical: "medium" }}>
                        {this.renderInput(
                          "name_id",
                          "name",
                          "Full Name",
                          false,
                          "Elon Musk"
                        )}
                        {this.renderInput(
                          "email_id",
                          "email",
                          "Email Address",
                          false,
                          "elonmusk@tesla.com"
                        )}
                        {this.renderInput(
                          "phone_id",
                          "phone",
                          "Mobile Number (Please include the country code)",
                          false,
                          "+54 53567889"
                        )}

                        {this.state.showSpinner && (
                          <Spinner visibility={true} />
                        )}
                      </Box>

                      <Box flex={false} as="footer" align="center">
                        <Button type="submit" label="Send" primary />
                      </Box>
                    </Form>
                  </Box>
                )}
              </Box>

              <Box>
                {this.state.showNotification && (
                  <Notification
                    visibility={true}
                    text="User registered successfully!"
                  />
                )}
              </Box>

              <Recaptcha
                ref={ref => (this.recaptcha = ref)}
                sitekey={"6LdT158UAAAAAM-PEFOsJy9_fFAd0Jfg6-qRXMH2"}
                onResolved={this.onVerifyRecaptcha}
              />
            </Box>
          );
        }}
      </ResponsiveContext.Consumer>
    );
  }
}
