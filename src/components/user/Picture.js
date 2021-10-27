import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { Slider, FormControl, TextField, FormLabel } from "@material-ui/core";
import Container from "./Container";

export const Picture = ({ url, width, height, marginHor, marginVer, padding, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  return (
    <div style={{margin: `${marginVer}px ${marginHor}px`, padding: `${padding}px`}}>
      <img
        ref={(ref) => connect(drag(ref))}
        style={{ width: `${width}px`, height: `${height}px` }}
        src={url}
      />
    </div>
  );
};

export const PictureSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <div>
        <FormControl size="small" component="text">
          <TextField
            id="outlined-basic"
            label="Image URL"
            variant="outlined"
            defaultValue={props.url}
            onChange={(e) => setProp((props) => (props.url = e.target.value))}
          />
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth={true} size="small" component="fieldset">
          <FormLabel component="legend">Width</FormLabel>
          <Slider
            value={props.width || 100}
            step={1}
            min={100}
            max={650}
            onChange={(_, value) => {
              setProp((props) => (props.width = value), 1000);
            }}
          />
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth={true} size="small" component="fieldset">
          <FormLabel component="legend">Height</FormLabel>
          <Slider
            value={props.height || 100}
            step={1}
            min={100}
            max={600}
            onChange={(_, value) => {
              setProp((props) => (props.height = value), 1000);
            }}
          />
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth={true} size="small" component="fieldset">
          <FormLabel component="legend">Margin-Horizontal</FormLabel>
          <Slider
            value={props.marginHor || 100}
            step={1}
            min={5}
            max={20}
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
            value={props.marginVer || 100}
            step={1}
            min={5}
            max={20}
            onChange={(_, value) => {
              setProp((props) => (props.marginVer = value), 1000);
            }}
          />
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth={true} size="small" component="fieldset">
          <FormLabel component="legend">Padding</FormLabel>
          <Slider
            value={props.padding || 100}
            step={1}
            min={2}
            max={10}
            onChange={(_, value) => {
              setProp((props) => (props.padding = value), 1000);
            }}
          />
        </FormControl>
      </div>
    </div>
  );
};

export const PictureDefaultProps = {
  url: "http://some-domain/image1.jpg",
  height: "100",
  width: "100",
  marginHor: "5",
  marginVer: "5",
  padding: "2"
};

Picture.craft = {
  props: PictureDefaultProps,
  related: {
    settings: PictureSettings,
  },
};
