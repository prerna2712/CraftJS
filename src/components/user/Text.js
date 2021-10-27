import { useNode } from '@craftjs/core';
import { Slider, FormControl, FormLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';

export const Text = ({ text, fontSize, textAlign, marginVer, marginHor, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
      style={{margin: `${marginVer}px ${marginHor}px`}}
    >
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')),
            500
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    props
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <>
      <FormControl fullWidth={true} size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={props.fontSize || 7}
          step={1}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value), 1000);
          }}
        />
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
    </>
  );
};

export const TextDefaultProps = {
  text: 'I am text',
  fontSize: 20,
  marginVer: 5,
  marginHor: 5
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};