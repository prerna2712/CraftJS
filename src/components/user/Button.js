import { useNode } from '@craftjs/core';
import {
  Button as MaterialButton,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Slider
} from '@material-ui/core';
import React from 'react';

export const Button = ({ size, variant, color, text, marginVer, marginHor, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      style={{ margin: `${marginVer}px ${marginHor}px` }}
      size={size}
      variant={variant}
      color={color}
      {...props}
    >
      {text}
    </MaterialButton>
  );
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <FormControl size="small" component="text">
          <TextField
            id="outlined-basic"
            label="Button Text"
            variant="outlined"
            defaultValue={props.url}
            onChange={(e) => setProp((props) => (props.text = e.target.value))}
          />
        </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          defaultValue={props.size}
          onChange={(e) => setProp((props) => (props.size = e.target.value))}
        >
          <FormControlLabel
            label="Small"
            value="small"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Medium"
            value="medium"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Large"
            value="large"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup
          defaultValue={props.variant}
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <FormControlLabel
            label="Text"
            value="text"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Outlined"
            value="outlined"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Contained"
            value="contained"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup
          defaultValue={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        >
          <FormControlLabel
            label="Default"
            value="default"
            control={<Radio size="small" color="default" />}
          />
          <FormControlLabel
            label="Primary"
            value="primary"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Secondary"
            value="secondary"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <div>
        <FormControl fullWidth={true} size="small" component="fieldset">
          <FormLabel component="legend">Margin-Horizontal</FormLabel>
          <Slider
            value={props.marginHor || 5}
            step={1}
            min={5}
            max={300}
            onChange={(_, value) => {
              setProp((props) => (props.marginHor = value), 1000);
            }}
          />
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth={true} size="small" component="fieldset">
          <FormLabel component="legend">Margin-Vertical</FormLabel>
          <Slider
            value={props.marginVer || 5}
            step={1}
            min={5}
            max={50}
            onChange={(_, value) => {
              setProp((props) => (props.marginVer = value), 1000);
            }}
          />
        </FormControl>
      </div>
    </div>
  );
};

export const ButtonDefaultProps = {
  size: 'small',
  variant: 'contained',
  color: 'primary',
  text: 'Click me',
  marginHor: "5",
  marginVer: "5",
};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
