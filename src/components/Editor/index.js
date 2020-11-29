import { Fragment, useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';

import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

function Editor({ displayName, language, value, onChange }) {
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <Fragment>
      <div className={`editor__container ${!open ? 'collapsed' : ''}`}>
        <div className="editor__title">
          {displayName}
          <button
            type="button"
            className="expand_collapse__btn"
            onClick={() => setOpen((prev) => !prev)}>
            {open ? <FaCompressAlt /> : <FaExpandAlt />}
          </button>
        </div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code_mirror__wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true,
          }}
        />
      </div>
    </Fragment>
  );
}

export default Editor;
